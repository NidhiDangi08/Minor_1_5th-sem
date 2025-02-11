from rest_framework import serializers
from healthprediction.models import Symtoms,DiabetesPredict,HeartDieasesPredict


class Symtoms_to_DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symtoms
        fields=['id','symtoms_name']
        
        
        
        

        


        
        

class DiabetesDiseasePredictionFunctionSerializer(serializers.ModelSerializer):


    class Meta:
        model = DiabetesPredict
        fields=['id','Pregnancies','Glucose','BloodPressure','SkinThickness','Insulin','BMI','DiabetesPedigreeFunction','Age']
        
        
        

class HeartDiseasePredictionFunctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeartDieasesPredict
        fields=['id','age','sex','cp','trestbps','chol','fbs','restecg','thalach','exang','oldpeak','slope','ca','thal']
        
        
        
        
        
