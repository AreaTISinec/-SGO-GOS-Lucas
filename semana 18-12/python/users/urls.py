
from django.urls import path, include
from . import views

urlpatterns = [
     path('user', views.UserView.as_view(), name='home'),
     path('login', views.UserLogin.as_view(), name='login'),
     path('signup', views.UserRegister.as_view(), name='signup'),
     path('logout', views.UserLogout.as_view(), name='logout'),
]
