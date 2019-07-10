from rest_framework import generics
from .models import User, Ingredient, Recipe, Fridge
from .serializers import IngredientSerializer, RecipeSerializer, UserSerializer, FridgeSerializer

class IngredientList(generics.ListCreateAPIView):
  queryset = Ingredient.objects.all()
  serializer_class = IngredientSerializer

class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Ingredient.objects.all()
  serializer_class = IngredientSerializer

class RecipeList(generics.ListCreateAPIView):
  queryset = Recipe.objects.all()[:10]
  serializer_class = RecipeSerializer

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Recipe.objects.all()
  serializer_class = RecipeSerializer

class UserList(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class FridgeList(generics.ListCreateAPIView):
  queryset = Fridge.objects.all()
  serializer_class = FridgeSerializer

class FridgeDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Fridge.objects.all()
  serializer_class = FridgeSerializer