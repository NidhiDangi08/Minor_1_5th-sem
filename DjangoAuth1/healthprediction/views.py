from django.shortcuts import render
from healthprediction.serializers import Symtoms_to_DiseaseSerializer,DiabetesDiseasePredictionFunctionSerializer,HeartDiseasePredictionFunctionSerializer
import json

# 

# import cv2
import numpy as np
# from PIL import Image
# import matplotlib.pyplot as plt




from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status



# from tensorflow.keras.models import load_model









from rest_framework.parsers import MultiPartParser, FormParser

import os


from healthprediction.seed import get_predicted_value,helper


import pickle


svc = pickle.load(open('model/svc.pkl','rb'))



Logistic_model = pickle.load(open('model/Logistic_model (2).pkl','rb'))
classifier = pickle.load(open('model/classifier.pkl','rb'))





# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate # import here authenticate
from account.renderers import UserRenderer   # import custome errors

from rest_framework.permissions import IsAuthenticated




class Symtoms_to_Disease(APIView):
    renderer_classes = [UserRenderer]   # ab all 'error' word show before error text
    def post(self, request,format=None):
        
        
        serializer = Symtoms_to_DiseaseSerializer(data=request.data)
        
        
        
        model = svc.predict([[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])

        # svc.predict(X_test.iloc[100].values.reshape(1,-1))
        print('\n\n')
        print('testing 1')
        print('prediction :- ',model[0])
        print('\n\n')
        
       
    
        if serializer.is_valid(raise_exception=True):
            print('testing 2 :- ',serializer.data)
            symtoms_name = serializer.data.get('symtoms_name')
            print('symtoms_name is :- ',symtoms_name)
            # print('symtoms_name type is :- ',type(symtoms_name))
            
            # symptoms = 'itching,skin_rash,nodal_skin_eruptions'
            # symptoms = ' skin_rash, high_fever, blister, red_sore_around_nose'
            # symptoms = ' skin_rash,  joint_pain,  skin_peeling,  silver_like_dusting'
            
            try:
                
                symptoms = f"{symtoms_name}"
                user_symptoms = [s.strip() for s in symptoms.split(',')]
                user_symptoms = [symptom.strip("[]' ") for symptom in user_symptoms]
                predicted_disease = get_predicted_value(user_symptoms)
                print('\n','predicted_disease testing :- ',predicted_disease,'\n')
                desc, pre, med, die, wrkout = helper(predicted_disease)
                
                
                print("=================precautions==================")
                pre = ', '.join(pre[0])
                print(pre)



                print("=================medications==================")
                import ast
                string_list = med
                actual_list = ast.literal_eval(string_list[0])
                medi = ', '.join(actual_list)
                print(medi)
                
                
                
                
                
                print("=================workout==================")
                workout = (', '.join(wrkout))
                print(workout)
                
                

                            
                print("=================diets==================")
                import ast
                string_list = die
                actual_list = ast.literal_eval(string_list[0])
                diets = ', '.join(actual_list)
                print(diets)
                            
                            
            
                data = {
                    "symtoms_name":symtoms_name,
                    "predicted_disease":predicted_disease,
                    "predicted_descriptions":desc,
                    "predicted_precations":pre,   
                    "predicted_medications":medi,
                    "predicted_diets":diets,
                    "predicted_workout":workout,
                    "msg":"Successfully Model Predictions!!"
                }
            except Exception as e:
                print("\n\n Logical Error   \n\n")
                # return Response({'Predictions_error':"somethings wrong!!"},status=status.HTTP_201_CREATED)
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
                
             
            return Response({'Predictions':data},status=status.HTTP_201_CREATED)
        
        print('error testing')
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
        
class DiabetesDiseasePredictionFunction(APIView):
    renderer_classes = [UserRenderer]   # ab all 'error' word show before error text
    def post(self, request,format=None):
        print("testing 1")
        serializer = DiabetesDiseasePredictionFunctionSerializer(data=request.data)
        print("testing 2")
        if serializer.is_valid(raise_exception=True):
            print("testing 3")
            # serializer.save()
                
            Pregnancies = serializer.data.get('Pregnancies')
            Glucose = serializer.data.get('Glucose')
            BloodPressure = serializer.data.get('BloodPressure')
            SkinThickness = serializer.data.get('SkinThickness')
            Insulin = serializer.data.get('Insulin')
            BMI = serializer.data.get('BMI')
            DiabetesPedigreeFunction = serializer.data.get('DiabetesPedigreeFunction')
            Age = serializer.data.get('Age')
            
            
            print("Pregnancies : ",Pregnancies)
            print("Glucose : ",Glucose)
            print("BloodPressure : ",BloodPressure)
            print("SkinThickness : ",SkinThickness)
            print("Insulin : ",Insulin)
            print("BMI : ",BMI)
            print("DiabetesPedigreeFunction : ",DiabetesPedigreeFunction)
            print("Age : ",Age)
            
            predicted_value = classifier.predict([[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]])
            print("predicted_value :- ",predicted_value)
            
            output = ""      
            if predicted_value[0] == 1:
                output = "Diabeties Can be Possible!!"
            else:
                output = "you don't have any symptom of  Diabeties!"
                
                
        

            prediction = {
                    "msg": "Successfully Diabetes predict!!",
                    "disease":output
                } 
            return Response({'Prediction': prediction},status=status.HTTP_201_CREATED)
            
        else:
            print('error testing')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        


        
class HeartDiseasePredictionFunction(APIView):
    renderer_classes = [UserRenderer]   # ab all 'error' word show before error text
    def post(self, request,format=None):
        print("testing 1")
        serializer = HeartDiseasePredictionFunctionSerializer(data=request.data)
        print("testing 2")
        if serializer.is_valid(raise_exception=True):
            print("testing 3")
            serializer.save()
            

            age = serializer.data.get('age')
            sex = serializer.data.get('sex')
            cp = serializer.data.get('cp')
            trestbps = serializer.data.get('trestbps')
            chol = serializer.data.get('chol')
            fbs = serializer.data.get('fbs')
            restecg = serializer.data.get('restecg')
            thalach = serializer.data.get('thalach')
            exang = serializer.data.get('exang')
            oldpeak = serializer.data.get('oldpeak')
            slope = serializer.data.get('slope')
            ca = serializer.data.get('ca')
            thal = serializer.data.get('thal')

            
            
            
            print("age : ",age)
            print("sex : ",sex)
            print("cp : ",cp)
            print("trestbps : ",trestbps)
            print("chol : ",chol)
            print("fbs : ",fbs)
            print("Glucose : ",restecg)
            print("BloodPressure : ",thalach)
            print("SkinThickness : ",exang)
            print("Insulin : ",oldpeak)
            print("BMI : ",slope)
            print("DiabetesPedigreeFunction : ",ca)
            print("Age : ",thal)
            
            if sex == 'male' or  sex == 'female':
                sex = 1
            else:
                sex = 0
            
            predicted_value = Logistic_model.predict([[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]])
            print("predicted_value :-  ",predicted_value)
            
            
            output = ""      
            if predicted_value[0] == 1:
                output = "Heart Disease Can be Possible!!"
            else:
                output = "you Don't have any heart problem!"
            
            
            
            prediction = {
                    "msg": "Successfully Heart Disease predict!!",
                    "disease":output
                } 



            return Response({'Prediction': prediction},status=status.HTTP_201_CREATED)
            
        
        else:
            print('error testing')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            