from django.http import JsonResponse
import requests
import json
import os
import pdb

def get_recipe(request, id):
    response = requests.get(f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{id}/information",
                          headers={
                            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                            "X-RapidAPI-Key": 
                          })
    recipe = json.loads(response.content)
    recipe_title = recipe['title']
    recipe_image = recipe['image']
    recipe_instruction = recipe['instructions']
    recipe_ingredients = recipe['extendedIngredients']
    ingredients = []
    for ingredient in recipe_ingredients: 
      ingredients.append(ingredient['name'])
    return JsonResponse({'name': recipe_title, 'image': recipe_image, 'ingredients': ingredients, 'instructions': recipe_instruction})


