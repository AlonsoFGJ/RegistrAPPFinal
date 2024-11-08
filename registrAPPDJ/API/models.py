from django.db import models

# Create your models here.
class Usuario(models.Model):
    id=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=45,null=False)
    apellido=models.CharField(max_length=50,default='S/A')
    edad=models.IntegerField()

    def __str__(self):
        return self.nombre

class Alumno(models.Model):
    id=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=45,null=False)
    contrasena=models.CharField(max_length=30,default='S/A')
    correo=models.CharField(max_length=50,default='S/A')

    def __str__(self):
        return self.nombre+" "+self.correo

class Docente(models.Model):
    id=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=45,null=False)
    contrasena=models.CharField(max_length=30,default='S/A')
    correo=models.CharField(max_length=50,default='S/A')

    def __str__(self):
        return self.nombre+" "+self.correo

class Asignatura(models.Model):
    id=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=45,null=False)
    numalumnos=models.IntegerField()

    def __str__(self):
        return self.nombre

class Asistencia(models.Model):
    id=models.AutoField(primary_key=True)
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)
    asignatura = models.ForeignKey(Asignatura, on_delete=models.CASCADE)
    porcentaje = models.IntegerField()

    class Meta:
        unique_together = ('alumno', 'asignatura')

    def __str__(self):
        return f"{self.alumno} {self.docente} {self.asignatura} {self.porcentaje}"
