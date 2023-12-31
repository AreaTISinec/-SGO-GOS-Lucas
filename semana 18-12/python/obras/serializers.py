from rest_framework import serializers
from .models import Obra

class ObraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Obra
        fields = (
            'id',
            'fecha_inicio',
            'fecha_termino',
            'monto_neto',
            'tipo_obra',
            'empresa',
            'direccion',
            'comuna',
            'estado_obra',
            'fecha_asignado',
            'avance',
            'monto_facturado',
            'observaciones',
        )