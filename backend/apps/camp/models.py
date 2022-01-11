from django.db import models
from django.contrib.auth import get_user_model
from .. storage_backends import PublicMediaStorage, PrivateMediaStorage


def camp_file_path(instance, filename):
    return f'camp_{instance.name}/{filename}'


class Camp(models.Model):
    name = models.CharField(
        max_length=150,
        unique=True,
        help_text="活動名稱",
        null=False,
        db_index=True,
    )
    information = models.CharField(
        max_length=2000,
        help_text="活動資訊",
        default="",
    )
    cover_photo = models.FileField(
        upload_to=camp_file_path,
        help_text="活動圖片",
        storage=PublicMediaStorage(),
        blank=True,
    )
    is_public = models.BooleanField(
        default=False,
        help_text="是否公開",
        db_index=True,
    )
    camp_start_date = models.DateField(
        blank=True,
        null=True,
        help_text="活動開始日期",
        db_index=True,
    )
    camp_end_date = models.DateField(
        blank=True,
        null=True,
        help_text="活動結束時間",
        db_index=True,
    )
    register_start_date = models.DateTimeField(
        blank=False,
        help_text="報名開始時間",
    )
    register_end_date = models.DateTimeField(
        blank=False,
        help_text="報名結束時間",
    )
    host = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name="host_activity",
        help_text="營隊創辦人",
    )
    place = models.CharField(
        max_length=100,
        null=False,
        help_text="活動地點",
        default="",
    )
    link = models.URLField(
        blank=True,
        help_text="相關連結",
    )
    fee = models.PositiveIntegerField(
        default=0,
        help_text="活動費用",
    )
    quota = models.PositiveIntegerField(
        default=100,
        help_text="活動名額",
    )
    precaution = models.CharField(
        help_text="注意事項",
        max_length=2000,
        null=True,
    )

    def __str__(self):
        return self.name

    class Meta:
        db_table = "camp"
