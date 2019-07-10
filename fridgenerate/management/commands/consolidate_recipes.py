import json
import os
import re
from fridgenerate.models import Recipe, Ingredient, RecipeTest
from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):

  def handle(self, *args, **options):
    
    # consolidated_recipes()
    # recipe_test()
    isolate_ingredients()


def consolidated_recipes():  
  BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

  datasets = f"{BASE_DIR}/fixtures/Recipe_dataset/recipes/"

  RECIPES = os.listdir(datasets)

  for x in RECIPES:
    with open(f'{datasets}{x}', encoding='utf-8') as r:
      body = json.load(r)

      for key, val in body.items():
        if val == {} or val['title'] == None or val['instructions'] == None or val['ingredients'] == None:
          pass
        else:
          Recipe.objects.create(
            title = val['title'],
            image = val['picture_link'],
            method = val['instructions'],
            ingredients = val['ingredients'],
          )

def populate_test_recipe_subset():
  for recipe in Recipe.objects.all()[:100]:
    #recipe.ingredients = recipe.ingredients.replace('ADVERTISEMENT', '')
    #recipe.save()
    new_recipe = RecipeTest()
    new_recipe.recipe_id = recipe.id
    new_recipe.ingredients = recipe.ingredients
    print(new_recipe.ingredients)
    new_recipe.save()
    #print(recipe.ingredients)

def isolate_ingredients():
  clean_words = ["cups", "cup", "teaspoon", "teaspoons", "tablespoon", "tablespoons", "pinch","dash","ounce", "'", '', "'']", "1/2"]
  for recipe in RecipeTest.objects.all():
    #recipe.ingredients = recipe.ingredients.replace('ADVERTISEMENT', '')
    #recipe.save()
    ingredient_rows = recipe.ingredients.split(",")
    for ingredient in ingredient_rows:
      data = ingredient.split(" ")
      for word in clean_words:
        try:
          p = re.compile(r'[a-z]')
          p.sub(' ', word)
          data.remove(word)
        except ValueError:
          pass
      print(data)
