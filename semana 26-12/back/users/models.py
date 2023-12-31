from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self,  email, rol, password=None, **extra_fields):
        if not email:
            raise ValueError('Se requiere un email')
        
        email = self.normalize_email(email)
        user = self.model(email=email,rol=rol, **extra_fields )
        
        user.set_password(password)
        user.save()
        
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    USER_TYPE_CHOICES = (
      (1, 'superadmin'),
      (2, 'controlgestion'),
      (3, 'admin'),
      (4, 'supervisor'),
      (5, 'gerente'),
    )

    rol = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)
    email = models.EmailField(unique = True, max_length=50)
    username = models.CharField(unique= True, max_length=20, blank=True, null=True)
    is_active = models.BooleanField(default=False)
    
    objects = UserAccountManager()
    
    USERNAME_FIELD =  'email'
    REQUIRED_FIELDS =  ['rol']
    
    