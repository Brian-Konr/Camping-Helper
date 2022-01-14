from . import serializers, models, permissions
from rest_framework import viewsets
from rest_framework_nested.viewsets import NestedViewSetMixin
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiResponse


@extend_schema_view(
    create=extend_schema(
        description="Only user who hasn't join this camp could use this endpoint",
        responses={
          201: OpenApiResponse(
            response=serializers.RegisterSerializer,
          ),
          403: OpenApiResponse(
              description="already register in this camp",
          ),
        }
    ),
    list=extend_schema(
        description="Only admin could use",
    ),
    update=extend_schema(
        description="only the user could use",
    ),
    retrieve=extend_schema(
        description="camp host or the user could use",
    ),
)
class RegisterViewSet(
    viewsets.ModelViewSet,
    NestedViewSetMixin,
):
    serializer_class = serializers.RegisterSerializer

    def get_queryset(self):
        return models.Registration.objects.filter(camp=self.kwargs["camp_pk"])

    def get_permissions(self):
        if self.action in ["list"]:
            permission_classes = [(IsAuthenticated & permissions.IsCampOwner)]
        elif self.action in ["retrieve"]:
            permission_classes = [(IsAuthenticated & (permissions.IsCampOwner | permissions.IsRegistrationOwner))]
        elif self.action in ["update", "delete"]:
            permission_classes = [(IsAuthenticated & permissions.IsRegistrationOwner)]
        elif self.action in ["create"]:
            permission_classes = [(IsAuthenticated & permissions.CanRegister)]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        serializer.save(
            camp=models.Registration._meta.get_field('camp').remote_field.model.objects.get(id=self.kwargs['camp_pk']),
            user=self.request.user,
        )


