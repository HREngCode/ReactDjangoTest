from django.urls import path, include
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('<id>/', views.comments_list),
    path('all/', views.get_all_comments),
    path('', views.user_comments),
]