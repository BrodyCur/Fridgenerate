from rest_framework import generics
from .models import User, Ingredient, Recipe, Fridge
from .serializers import IngredientSerializer

class IngredientList(generics.ListCreateAPIView):
  queryset = Ingredient.objects.all()
  serializer_class = IngredientSerializer

class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Ingredient.objects.all()
  serializer_class = IngredientSerializer