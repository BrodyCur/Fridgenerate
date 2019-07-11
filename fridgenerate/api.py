from django.http import JsonResponse
import requests
import json
import os
import pdb

def get_recipe(request, id):
  response = requests.get(f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{id}/information",
                        headers={
                          "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                          "X-RapidAPI-Key": "629f4e16afmsh4cfe6934ab567f9p1aa279jsne98d5ef9c4ff"
                        })
  recipe = json.loads(response.content)
  recipe_title = recipe['title']
  recipe_image = recipe['image']
  recipe_instruction = recipe['instructions']
  recipe_ingredients = recipe['extendedIngredients']
  ingredients = []
  for ingredient in recipe_ingredients: 
    ingredients.append(ingredient['name'])

  context = {
    'name': recipe_title,
    'image': recipe_image,
    'ingredients': ingredients,
    'instructions': recipe_instruction
  }

  return JsonResponse({'recipe': recipe})


def get_recipes_by_ingredients(request):
  ingredients_url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?&ingredients=apples%2Cflour%2Csugar"

  response = requests.get(ingredients_url,
    headers={
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "629f4e16afmsh4cfe6934ab567f9p1aa279jsne98d5ef9c4ff"
    }
  )

  recipe_list = json.loads(response.content)

  recipes = []

  for recipe in recipe_list:
    recipe_id = recipe['id']
    display_title = recipe['title']
    display_image = recipe['image']
    missing_ingredients = recipe['missedIngredientCount']
  
    new_recipe = {
      'id': recipe_id,
      'name': display_title,
      'image': display_image,
      'missing_ingredients': missing_ingredients
    }

    recipes.append(new_recipe)
  
  context = {
    'recipes': recipes
  }

  return JsonResponse(context)