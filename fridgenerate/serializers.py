from rest_framework import serializers
from .models import User, Ingredient, Fridge, Recipe

class IngredientSerializer(serializers.ModelSerializer):

  class Meta:
    model = Ingredient
    fields = ('id', 'name', 'source')