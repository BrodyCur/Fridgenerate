import json
import glob

def flatten(list_of_lists):
  flattened_list = []
  for x in list_of_lists:
    for y in x:
      flattened_list.append(y)
  return flattened_list

def convert_to_obj(ingredients, n):
  for i in range(0, len(ingredients), n):
    yield ingredients[i:i+n]

def merge():
  allfiles_list = []
  merged_list = []
  for file in glob.glob("*.json"):
    with open(file, "r") as infile:
      try:
        allfiles_list.append(json.load(infile))
        merged_list = (flatten(allfiles_list)) 
      except ValueError:
        print(file)  
  ingredient = flatten(r['ingredients'] for r in merged_list)
  unique_ingredients = list(dict.fromkeys(ingredient))
  ingredient_json = [{'name': chunk[i] for i in range(len(chunk))}
        for chunk in convert_to_obj(unique_ingredients, 1)]
  with open("merged.json", "w") as outfile:
    json.dump(ingredient_json, outfile)

merge()
