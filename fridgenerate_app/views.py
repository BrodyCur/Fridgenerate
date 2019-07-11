from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from .models import User, Ingredient, Recipe, Fridge
from .serializers import IngredientSerializer, RecipeSerializer, UserSerializer, FridgeSerializer

class IngredientView(viewsets.ModelViewSet):
  queryset = Ingredient.objects.all()
  serializer_class = IngredientSerializer

class RecipeView(viewsets.ModelViewSet):
  queryset = Recipe.objects.all()
  serializer_class = RecipeSerializer

class UserView(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class FridgeView(viewsets.ModelViewSet):
  queryset = Fridge.objects.all()
  serializer_class = FridgeSerializer
