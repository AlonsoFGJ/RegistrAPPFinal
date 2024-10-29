from django.urls import re_path as url
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns



urlpatterns = [
    url(r'^api/usuario/$',UsuarioViewSet.as_view()),
    url(r'^api/alumno/$',AlumnoViewSet.as_view()),
    url(r'^api/docente/$',DocenteViewSet.as_view()),
    url(r'^api/asignatura/$',AsignaturaViewSet.as_view()),
]

urlpatterns=format_suffix_patterns(urlpatterns)