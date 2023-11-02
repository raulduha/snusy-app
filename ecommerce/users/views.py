from django.contrib.auth import get_user_model, authenticate, login
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        data = request.data

        if data['password'] != data['confirmPassword']:
            return Response({'error': 'Las contraseñas no coinciden'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create(
            username=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            birth_date=data['birth_date'],
            phone_number=data['phone_number'],
            role=data['role'],
        )
        user.set_password(data['password'])
        user.save()

        if user:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                'message': 'Registro exitoso',
                'user_details': {
                    'username': user.username,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'email': user.email,
                    'birth_date': user.birth_date,
                    'phone_number': user.phone_number,
                    'role': user.role,
                },
                'token': access_token,
            }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                'message': 'Inicio de sesión exitoso',
                'token': access_token,
                'user_details': {
                    'username': user.username,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'email': user.email,
                    'birth_date': user.birth_date,
                    'phone_number': user.phone_number,
                    'role': user.role,
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)