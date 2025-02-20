from django.urls import path  # Importa la función path del módulo django.urls
from . import views  # Importa el módulo views de la misma aplicación

# Define las rutas URL para la aplicación
urlpatterns = [
    # Asocia la URL 'validar/' con la vista 'validar' definida en el módulo views
    # El argumento name='validar' asigna un nombre a esta ruta para referenciarla fácilmente
    path('validar/', views.validar, name='validar'),
]
