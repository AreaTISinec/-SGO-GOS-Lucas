# Generated by Django 5.0.1 on 2024-01-17 18:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docs', '0001_initial'),
        ('obras', '0003_obras_id_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='docs',
            name='id_obra',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='obras.obras'),
        ),
    ]
