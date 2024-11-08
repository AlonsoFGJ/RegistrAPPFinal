from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Usuario)
admin.site.register(Alumno)
admin.site.register(Docente)
admin.site.register(Asignatura)
admin.site.register(Asistencia)