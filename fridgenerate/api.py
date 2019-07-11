from django.http import JsonResponse
import requests
import json
import os
import pdb
from fridgenerate.config import api_key

def get_recipe(request, recipe_id):
  recipe_id = json.loads(request.body.decode('utf-8'))

  print("POST:", recipe_id)

  response = requests.get(f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{recipe_id}/information",
                        headers={
                          "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                          "X-RapidAPI-Key": api_key
                        })

  recipe = json.loads(response.content)
  recipe_title = recipe["title"]
  recipe_image = recipe["image"]
  recipe_instruction = recipe["instructions"]
  recipe_ingredients = recipe["extendedIngredients"]

  ingredients = []
  for ingredient in recipe_ingredients: 
    ingredients.append(ingredient["name"])

  return JsonResponse({
    'name': recipe_title,
    'image': recipe_image,
    'ingredients': ingredients,
    'instructions': recipe_instruction
  })


def get_recipes_by_ingredients(request):
  ingredients_query = json.loads(request.body.decode('utf-8'))
  
  print("POST:", ingredients_query)

  ingredients_url = f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=15&ingredients={ingredients_query}"

  response = requests.get(ingredients_url,
    headers={
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": api_key
    }
  )

  recipe_list = json.loads(response.content)


  return JsonResponse({
    'recipes': [{
      'id': r['id'],
      'name': r['title'],
      'image': r['image'],
      'missing_ingredients': r['missedIngredientCount']
    } for r in recipe_list]
  })