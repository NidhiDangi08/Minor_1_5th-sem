from django.contrib import admin
from django.urls import path,include
from healthprediction.views import Symtoms_to_Disease, HeartDiseasePredictionFunction,DiabetesDiseasePredictionFunction
urlpatterns = [

   
    path('symtoms_diagnosis/', Symtoms_to_Disease.as_view(),name='symtoms-to-disease'),

    path('heart_diagnosis/', HeartDiseasePredictionFunction.as_view(),name='heart-disease-prediction'),
    path('diabetes_diagnosis/', DiabetesDiseasePredictionFunction.as_view(),name='diabetes-disease-prediction'),

    
]
