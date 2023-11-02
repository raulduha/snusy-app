from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data.get('username')
        if not username:
            # Generar un nombre de usuario automático basado en el correo electrónico o algo similar
            username = "user" + str(User.objects.count() + 1)
        
        user = User.objects.create(
            username=username,
            email=serializer.validated_data['email'],
            first_name=serializer.validated_data['first_name'],
            last_name=serializer.validated_data['last_name'],
            phone_number=serializer.validated_data['phone_number'],
            birth_date=serializer.validated_data['birth_date'],
            role=serializer.validated_data['role'],
        )
        user.set_password(serializer.validated_data['password'])
        user.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    # Autentica al usuario
    user = authenticate(email=email, password=password)
    
    if user is not None:
        # Crea un token para el usuario
        token, created = Token.objects.get_or_create(user=user)
        
        # Devuelve el token en la respuesta JSON
        print(f"Usuario autenticado: {user}")  # Agrega esta línea para imprimir el usuario autenticado
        print(f"Token generado: {token.key}")  # Agrega esta línea para imprimir el token generado
        return Response({'token': token.key}, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
