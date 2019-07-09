import json
import os
import glob
from fridgenerate.models import Recipe
from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):

  def handle(self, *args, **options):
    
    consolidated_recipes()
    # for name in glob.glob('../../fixtures/Recipe_dataset/recipes/*.json'):
    #   print(name)

def consolidated_recipes():  
  BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

  datasets = f"{BASE_DIR}/fixtures/Recipe_dataset/recipes/"

  RECIPES = os.listdir(datasets)

  for x in RECIPES:
    with open(f'{datasets}{x}') as r:
      body = json.load(r)
      print(body)
      # for key, val in body.items():
      #   if val == {}:
      #     pass
      #   else:
      #     print(val)
          # Recipe.objects.create(
          #   title = val['title'],
          #   image = val['picture_link'],
          #   method = val['instructions'],
          #   ingredients = val['ingredients'],
          # )