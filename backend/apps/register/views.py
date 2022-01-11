from django.shortcuts import render
from . import serializers, models, permissions
from rest_framework import viewsets
from rest_framework_nested.viewsets import NestedViewSetMixin
from rest_framework.permissions import AllowAny
# Create your views here.


class RegisterViewSet(
    viewsets.ModelViewSet,
    NestedViewSetMixin,
):
    serializer_class = serializers.RegisterSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return models.Registration.objects.filter(camp=self.kwargs["camp_pk"])

    # todo: not yet implement
    # def get_permissions(self):
    #     if self.action in ["list"]:
    #         # permission_classes = [IsAuthenticated]
    #         pass
    #     elif self.action in ["retrieve"]:
    #         pass
    #     elif self.action in ["update", "delete"]:
    #         pass
    #     elif self.action in ["create"]:
    #         pass
    #     else:
    #         pass
    #     # return [permission() for permission in permission_classes]
    #     return None

    def perform_create(self, serializer):
        serializer.save(
            camp=models.Registration._meta.get_field('camp').remote_field.model.objects.get(id=self.kwargs['camp_pk']),
            user=self.request.user,
        )


