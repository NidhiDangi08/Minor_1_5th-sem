from django.contrib import admin

# Register your models here.

from healthprediction.models import Symtoms
from .models import DiabetesPredict

admin.site.register(Symtoms)
admin.site.register(DiabetesPredict)