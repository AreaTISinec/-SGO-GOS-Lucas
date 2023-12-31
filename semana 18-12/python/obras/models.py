from django.db import models

# Create your models here.
class Obra(models.Model):
    fecha_inicio = models.DateField()
    fecha_termino = models.DateField()
    monto_neto = models.DecimalField(decimal_places=5, max_digits= 20)
    tipo_obra = models.CharField(max_length=100)
    empresa = models.CharField(max_length=200)
    direccion = models.CharField(max_length=200)
    comuna = models.CharField(max_length=200)
    estado_obra = models.CharField(max_length=200)
    fecha_asignado = models.DateField()
    avance = models.CharField(max_length=200)
    monto_facturado = models.CharField(max_length=200)
    observaciones = models.TextField()
    
    