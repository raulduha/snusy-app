# products/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductDetail.as_view(), name='product-detail'),
    path('cart/', views.CartList.as_view(), name='cart-list'),
    path('cart/<int:pk>/', views.CartDetail.as_view(), name='cart-detail'),
]
