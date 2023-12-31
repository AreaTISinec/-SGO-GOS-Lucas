from .models import Obra
from rest_framework import viewsets, permissions
from.serializers import ObraSerializer

class ObraViewSet(viewsets.ModelViewSet):
    queryset = Obra.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ObraSerializer