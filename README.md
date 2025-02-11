# Minor_1_5th_sem

## Important Commands

### Fixing PowerShell Execution Policy  
Run the following command in **Windows PowerShell ISE** to resolve execution policy issues:
```sh
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Managing Dependencies  
#### Create `requirements.txt` file:
```sh
python -m pip freeze > requirements.txt
```
#### Install dependencies from `requirements.txt`:
```sh
pip install -r requirements.txt
```

### Fixing Common Python Errors  
#### Error: *Fatal error in launcher: Unable to create process*  
```sh
// Resolve it by running this command in CMD
```

---

## **Django Setup & Authentication**
### Installing Django REST Framework & JWT:
```sh
pip install djangorestframework
pip install djangorestframework-simplejwt
```

### **Modify `settings.py` to use JWT:**
```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

INSTALLED_APPS = [
    ...
    'rest_framework_simplejwt',
    ...
]
```

### **JWT Token Settings**
```python
from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "AUTH_HEADER_TYPES": ("Bearer",),
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
}
```

### **Add JWT Authentication URLs in `urls.py`**
```python
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
```

---

## **CORS Configuration for Frontend**
Install `django-cors-headers`:
```sh
pip install django-cors-headers
```

Modify `settings.py`:
```python
INSTALLED_APPS = [
    "corsheaders",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3080",
    "http://127.0.0.1:3000",
]
```

---

## **User Authentication**
### **Creating JWT Tokens Manually**
```python
from rest_framework_simplejwt.tokens import RefreshToken

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
```

### **Accessing User Profile via Token**
```http
GET http://127.0.0.1:8000/api/user/profile/
Authorization: Bearer <Token>
```

---

## **Django Email Configuration**
Install `django-dotenv`:
```sh
pip install django-dotenv
```

Modify `settings.py`:
```python
import os
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = os.environ.get('EMAIL_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_PASS')
EMAIL_USE_TLS = True
```

Create a `.env` file and add:
```
EMAIL_USER = 'your-email@gmail.com'
EMAIL_PASS = 'your-password'
```

---

## **Media File Setup for File Uploads**
Modify `settings.py`:
```python
import os

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'public/static')]

MEDIA_ROOT = os.path.join(BASE_DIR, "public/static")
MEDIA_URL = '/media/'
```

Modify `urls.py`:
```python
from django.conf.urls.static import static
from django.conf import settings

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

---

## **Installing OpenCV & TensorFlow**
```sh
pip install opencv-python
pip install tensorflow
```

### **Loading a Deep Learning Model for Eye Disease Prediction**
```python
from tensorflow.keras.models import load_model
import cv2
import matplotlib.pyplot as plt




## **Final Notes**
- This document includes **Django setup, authentication, JWT integration, CORS setup, email configuration, media handling, and ML model loading**.
- If errors arise, check logs and reinstall dependencies.



### **Next Steps**
✅ **Commit and Push the Changes**

git add README.md
git commit -m "Resolved merge conflicts in README.md"
git push origin main --force
```
