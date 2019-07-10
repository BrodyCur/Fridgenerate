from rest_framework import serializers
from .models import User, Ingredient, Fridge, Recipe

class UserSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = ('id', 'first_name', 'last_name', 'email', 'created')

class IngredientSerializer(serializers.ModelSerializer):

  class Meta:
    model = Ingredient
    fields = ('id', 'name', 'source')

class FridgeSerializer(serializers.ModelSerializer):

  class Meta:
    model = Fridge
    fields = ('id', 'ingredients', 'owners')

class RecipeSerializer(serializers.ModelSerializer):

  class Meta:
    model = Recipe
    fields = ('id', 'title', 'image', 'method', 'ingredients')
 