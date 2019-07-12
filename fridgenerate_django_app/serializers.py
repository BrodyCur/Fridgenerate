from rest_framework import serializers
from .models import User, Ingredient, Fridge, Recipe

class UserSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = User
    fields = ('id', 'url','first_name', 'last_name', 'email', 'created')

class IngredientSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Ingredient
    fields = ('id', 'url', 'name', 'source')

class FridgeSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Fridge
    fields = ('id', 'url','ingredients', 'owners')

class RecipeSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Recipe
    fields = ('id', 'url', 'title', 'image', 'ingredients', 'instructions')
