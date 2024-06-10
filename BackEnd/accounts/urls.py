from django.urls import path
from .views import register  
from .views import login
from .views import SubscriberNewsletter
from .views import bestSellers

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('SubscriberNewsletter/', SubscriberNewsletter, name='SubscriberNewsletter'),
    path('bestSellers/', bestSellers, name='bestSellers'),
]
