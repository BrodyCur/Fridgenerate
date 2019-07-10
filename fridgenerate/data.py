import json
from models import Ingredient

with open("/fridgenerate/fixtures/Ingridients_dataset/merged.json", encoding='utf-8') as r:
  body = json.load(r)

  for key, val in body.items():
    Ingredient.objects.create (
      name=val['name']
    )



