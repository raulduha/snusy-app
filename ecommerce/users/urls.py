from django.urls import path
from .views import register_user, login_user

urlpatterns = [
    path('register/', register_user),
    path('logins/', login_user),
]
