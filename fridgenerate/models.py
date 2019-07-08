from django.db import models

class User(models.Model): 
  first_name = models.CharField(max_length=225)
  last_name = models.CharField(max_length=225)
  email = models.EmailField(max_length=70, unique=True) 
  created = models.DateTimeField(editable=False) 

class Ingredient(models.Model):
  name = models.CharField(max_length=225)
  source = models.URLField(max_length=500, blank=True)

class Fridge(models.Model):
  ingredients = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
  owners = models.ForeignKey(User, on_delete=models.CASCADE, related_name='fridges')

class Recipe(models.Model):
  title = models.CharField(max_length=225)
  image = models.CharField(max_length=500, null=True)
  method = models.TextField(max_length=2000)
  ingredients = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='recipes')
