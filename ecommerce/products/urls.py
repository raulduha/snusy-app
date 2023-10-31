# products/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('api/products/', views.ProductList.as_view(), name='product-list'),
    path('api/products/<int:pk>/', views.ProductDetail.as_view(), name='product-detail'),
    path('api/cart/', views.CartList.as_view(), name='cart-list'),
    path('api/cart/<int:pk>/', views.CartDetail.as_view(), name='cart-detail'),
]
