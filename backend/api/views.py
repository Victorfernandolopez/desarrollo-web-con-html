from django.shortcuts import render

# Importaciones necesarias
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # Solo para pruebas locales, desactiva CSRF
def validar(request):
    # Verifica si el método de la solicitud es POST
    if request.method == 'POST':
        try:
            # Intenta cargar los datos JSON del cuerpo de la solicitud
            data = json.loads(request.body)
        except json.JSONDecodeError:
            # Si hay un error en el formato JSON, devuelve una respuesta con error
            return JsonResponse({'valid': False, 'error': 'JSON inválido'}, status=400)

        # Extrae los valores de 'email' y 'mensaje' de los datos JSON
        email = data.get('email', '')
        mensaje = data.get('mensaje', '')
        error = ""

        # Verifica si el correo electrónico contiene un "@"
        if "@" not in email:
            error += "El correo electrónico no es válido. "
        # Verifica si el mensaje no está vacío después de eliminar los espacios en blanco
        if mensaje.strip() == "":
            error += "El mensaje no puede estar vacío."

        # Si hay errores, devuelve una respuesta con los mensajes de error
        if error:
            return JsonResponse({'valid': False, 'error': error})
        else:
            # Si no hay errores, devuelve una respuesta indicando que la validación fue exitosa
            return JsonResponse({'valid': True})
    else:
        # Si el método no es POST, devuelve una respuesta indicando que el método no está permitido
        return JsonResponse({'error': 'Método no permitido'}, status=405)
