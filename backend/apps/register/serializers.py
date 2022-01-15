from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer
from . import models


class RegisterSerializer(NestedHyperlinkedModelSerializer):
    parent_lookup_kwargs = {
        "camp_pk": "camp__pk",
    }

    class Meta:
        model = models.Registration
        fields = [
            "id", "url", "user", "camp", "name", "sex",
            "nationality", "id_number", "birth_date",
            "school_grade", "special_disease", "fb_link",
            "eating_habit", "email", "contact_number",
            "guardian_name", "guardian_relationship",
            "guardian_contact_number", "introduction",
            "special_experience", "motivation",
            "camp_anticipation", "other", "is_finish",
        ]
        read_only_fields = [
            "camp", "user", "is_finish",
        ]


