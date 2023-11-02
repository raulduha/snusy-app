from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Permisos personalizados:
    - Solo los admins pueden editar (POST, PUT, DELETE)
    - Todos los usuarios pueden leer (GET, HEAD, OPTIONS)
    """

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_staff or request.user.role == 'admin'