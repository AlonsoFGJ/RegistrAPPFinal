# Generated by Django 5.1.2 on 2024-10-24 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Docente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=45)),
                ('contrasena', models.CharField(default='S/A', max_length=30)),
                ('correo', models.CharField(default='S/A', max_length=50)),
            ],
        ),
    ]
