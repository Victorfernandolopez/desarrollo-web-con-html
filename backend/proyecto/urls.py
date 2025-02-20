from django.contrib import admin  # Importa el módulo de administración de Django
from django.urls import path, include  # Importa las funciones path e include del módulo django.urls

# Define las rutas URL principales para el proyecto
urlpatterns = [
    # Asocia la URL 'admin/' con la interfaz de administración de Django
    path('admin/', admin.site.urls),
    
    # Asocia la URL 'api/' con las rutas definidas en el archivo api/urls.py
    path('api/', include('api.urls')),
]
