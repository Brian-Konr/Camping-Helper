# Generated by Django 4.0 on 2022-01-15 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0008_rename_school_registration_school_grade'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='fb_link',
            field=models.URLField(blank=True, help_text='臉書連結', null=True, verbose_name='Facebook Link'),
        ),
        migrations.AlterField(
            model_name='registration',
            name='sex',
            field=models.CharField(blank=True, default='', help_text='生理性別', max_length=50),
        ),
    ]
