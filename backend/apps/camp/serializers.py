from rest_framework import serializers
from . import models


class CampSerializer(serializers.HyperlinkedModelSerializer):
    host = serializers.PrimaryKeyRelatedField(
        many=False,
        read_only=True,
    )

    class Meta:
        model = models.Camp
        fields = [
            "id", "url", "name", "information", "cover_photo",
            "is_public", "camp_start_date", "camp_end_date",
            "register_start_date", "register_end_date",
            "host", "place", "link", "fee", "quota", "precaution",
            "questions", "short_description", "category",
        ]
        read_only_fields = [
            "host", "is_public",
        ]
        extra_kwargs = {
            "fee": {"required": True},
            "place": {"required": True},
        }


class CampStatusSerializer(serializers.HyperlinkedModelSerializer):
    host = serializers.PrimaryKeyRelatedField(
        many=False,
        read_only=True,
    )

    class Meta:
        model = models.Camp
        fields = [
            'id', 'host', 'is_public',
        ]
        read_only_fields = [
            "host", "is_public"
        ]