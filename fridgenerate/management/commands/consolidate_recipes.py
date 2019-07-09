import json
import os
from fridgenerate.models import Recipe, Ingredient
from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):

  def handle(self, *args, **options):
    
    consolidated_recipes()


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