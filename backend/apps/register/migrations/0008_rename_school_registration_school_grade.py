# Generated by Django 4.0 on 2022-01-15 05:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0007_remove_registration_grade_alter_registration_school'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registration',
            old_name='school',
            new_name='school_grade',
        ),
    ]
