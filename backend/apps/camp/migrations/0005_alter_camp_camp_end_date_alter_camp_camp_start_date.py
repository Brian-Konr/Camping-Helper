# Generated by Django 4.0 on 2022-01-11 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('camp', '0004_alter_camp_cover_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='camp',
            name='camp_end_date',
            field=models.DateField(blank=True, help_text='活動結束時間', null=True),
        ),
        migrations.AlterField(
            model_name='camp',
            name='camp_start_date',
            field=models.DateField(blank=True, help_text='活動開始日期', null=True),
        ),
    ]