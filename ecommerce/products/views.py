# products/views.py
from .permissions import IsAdminOrReadOnly
from rest_framework import generics
from .models import Product, Cart
from .serializers import ProductSerializer, CartSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]

class CartList(generics.ListCreateAPIView):
    serializer_class = CartSerializer

    def get_queryset(self):
        # Asume que el ID del usuario está en la solicitud. Puede requerir ajustes según tu configuración.
        user_id = self.request.user.id
        return Cart.objects.filter(user__id=user_id)

class CartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
