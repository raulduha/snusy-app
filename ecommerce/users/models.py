# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    middle_name = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    role = models.CharField(max_length=20, default='cliente')
    username = models.CharField(max_length=150, unique=True)  # Agregar un campo username
