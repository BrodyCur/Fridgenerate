import json
import os
from fridgenerate.models import Ingredient
from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):

  def handle(self, *args, **options):
    
    consolidate_ingredients()


def consolidate_ingredients():
  with open("/fridgenerate/fixtures/Ingridients_dataset/merged.json", encoding='utf-8') as r:
    body = json.load(r)

    for key, val in body.items():
      Ingredient.objects.create (
        name=val['name']
      )



