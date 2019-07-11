"""fridgenerate URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from fridgenerate import views
from fridgenerate import api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ingredients/', views.IngredientList.as_view()),
    # path('ingredients/<int:pk>', views.IngredientDetail.as_view()),
    path('recipes/<int:pk>', views.RecipeList.as_view()),
    # path('recipes/<int:pk>', views.RecipeDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>', views.UserDetail.as_view()),
    path('fridges/', views.FridgeList.as_view()),
    path('fridges/<int:pk>', views.FridgeDetail.as_view()),
    path('recipe_details/', api.get_recipe),
    path('recipes/', api.get_recipes_by_ingredients)
]
