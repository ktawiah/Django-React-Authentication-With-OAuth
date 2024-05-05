from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from uuid import uuid4
from django.utils.translation import gettext as _


class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given email, and password.
        """
        if not email:
            raise ValueError("The given username must be set")
        email = self.normalize_email(email)
        email = email.lower()
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

        def create_superuser(self, email, password=None, **extra_fields):
            extra_fields.setdefault("is_staff", True)
            extra_fields.setdefault("is_superuser", True)

            if extra_fields.get("is_staff") is not True:
                raise ValueError("Superuser must have is_staff=True.")
            if extra_fields.get("is_superuser") is not True:
                raise ValueError("Superuser must have is_superuser=True.")

            return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    """Model definition for User."""

    username = None
    email = models.EmailField(_("email"), max_length=254, db_index=True, unique=True)
    inserted_timestamp = models.DateTimeField(
        _("insertion timestamp"), auto_now=True, auto_now_add=False
    )
    updated_timestamp = models.DateTimeField(
        _("updated timestamp"), auto_now=True, auto_now_add=False
    )

    object = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    class Meta:
        """Meta definition for User."""

        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self):
        """Unicode representation of User."""
        return self.email
