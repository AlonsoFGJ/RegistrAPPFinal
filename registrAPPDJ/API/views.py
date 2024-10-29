from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny

# Create your views here.


class UsuarioViewSet(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class AlumnoViewSet(generics.ListCreateAPIView):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

class DocenteViewSet(generics.ListCreateAPIView):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer

    def get_queryset(self):
        nombre = self.request.query_params.get('nombre')
        contrasena = self.request.query_params.get('contrasena')
        if nombre and contrasena:
            return Alumno.objects.filter(nombre=nombre, contrasena=contrasena)
        return Alumno.objects.none() 

class AsignaturaViewSet(generics.ListCreateAPIView):
    queryset = Asignatura.objects.all()
    serializer_class = AsignaturaSerializer