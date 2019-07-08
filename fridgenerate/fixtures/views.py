import json

def 
ingredients = []
try:
    with open("./simple.json", 'r') as f:
        contents = json.load(f)
except Exception as e:
    print(e)


li = [item.get('name') for item in contents]
print(li)
