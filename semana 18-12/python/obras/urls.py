from rest_framework import routers
from .api import ObraViewSet

router = routers.DefaultRouter()

router.register('api/obras', ObraViewSet, 'obras')

urlpatterns = router.urls