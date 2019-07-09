import json
import glob

def flatten(list_of_lists):
  flattened_list = []
  for x in list_of_lists:
    for y in x:
      flattened_list.append(y)
  return flattened_list

def func():
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
  with open("merged.json", "w") as outfile:
    json.dump(unique_ingredients, outfile)

func()