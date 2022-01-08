from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from . import models, serializers, permissions
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_headers
from drf_spectacular.utils import extend_schema_view, extend_schema
from drf_spectacular.utils import OpenApiParameter


@extend_schema_view(
    list=extend_schema(
        parameters=[
            OpenApiParameter(
                name="view",
                location=OpenApiParameter.QUERY,
                description="`all`: showing all public camp <br/>"
                            "`join`: showing all join camp <br/>"
                            "`own`: showing all owned camp <br/>"
                            "use `all` when view is empty",
                required=False,
                type=str,
            ),
        ],
    ),
)
class CampViewSet(viewsets.ModelViewSet):
    serializer_classes = {
        "set_public": serializers.CampStatusSerializer,
    }
    default_serializer_class = serializers.CampSerializer
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        if self.request.query_params.get("view") is None:
            if self.request.user.is_superuser:
                return models.Camp.objects.all()
            else:
                return models.Camp.objects.filter(is_public=True)
        assert self.request.query_params.get("view") in ["all", "own", "join"], "Invalid view query type"
        if self.request.query_params.get("view") == "all":
            return models.Camp.objects.filter(is_public=True)
        elif self.request.query_params.get("view") == "own":
            return models.Camp.objects.filter(host=self.request.user)
        elif self.request.query_params.get("view") == "join":
            pass

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.default_serializer_class)

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            permission_classes = [AllowAny]
        elif self.action in ['create']:
            permission_classes = [permissions.IsHostUser]
        elif self.action in ['delete', 'update']:
            permission_classes = [IsAuthenticated, permissions.IsOwner]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    @method_decorator(cache_page(60*10), vary_on_headers("Authorization", ))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(host=self.request.user)

    @action(
        detail=True,
        methods=['put'],
        permission_classes=[permissions.IsOwner],
        url_path="public",
        url_name="activity-setpublic",
    )
    def set_public(self, request, pk=None):
        camp = self.get_object()
        if camp.is_public:
            raise ValidationError("活動已經公開")
        serializer = self.get_serializer(camp, data={"is_public": True})
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data, status=status.HTTP_200_OK)

    # @action(
    #     detail=True,
    #     methods=['post'],
    #     permission_classes=[AllowAny],
    #     url_path="join",
    #     url_name="activity-userjoin",
    # )
    # def join(self, request, pk=None):
    #     pass
