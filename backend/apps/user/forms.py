from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django import forms
from .models import User


class MyUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('email', )


class MyUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('email', )