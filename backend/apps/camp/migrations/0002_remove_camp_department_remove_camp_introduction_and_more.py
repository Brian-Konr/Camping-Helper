# Generated by Django 4.0 on 2022-01-08 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('camp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='camp',
            name='department',
        ),
        migrations.RemoveField(
            model_name='camp',
            name='introduction',
        ),
        migrations.RemoveField(
            model_name='camp',
            name='school',
        ),
        migrations.RemoveField(
            model_name='camp',
            name='template_data',
        ),
        migrations.AddField(
            model_name='camp',
            name='fee',
            field=models.IntegerField(default=0, help_text='活動費用'),
        ),
        migrations.AddField(
            model_name='camp',
            name='information',
            field=models.CharField(default='', help_text='活動資訊', max_length=2000),
        ),
        migrations.AddField(
            model_name='camp',
            name='link',
            field=models.URLField(blank=True, help_text='相關連結'),
        ),
        migrations.AddField(
            model_name='camp',
            name='place',
            field=models.CharField(default='', help_text='活動地點', max_length=100),
        ),
        migrations.AddField(
            model_name='camp',
            name='precaution',
            field=models.CharField(help_text='注意事項', max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='camp',
            name='quota',
            field=models.IntegerField(default=100, help_text='活動名額'),
        ),
        migrations.AlterField(
            model_name='camp',
            name='camp_end_date',
            field=models.DateField(blank=True, help_text='活動結束時間'),
        ),
        migrations.AlterField(
            model_name='camp',
            name='camp_start_date',
            field=models.DateField(blank=True, help_text='活動開始日期'),
        ),
        migrations.AlterField(
            model_name='camp',
            name='name',
            field=models.CharField(help_text='活動名稱', max_length=150, unique=True),
        ),
    ]
