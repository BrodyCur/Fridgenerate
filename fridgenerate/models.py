from django.db import models

class User(models.Model): 
  first_name = models.CharField(max_length=225)
  last_name = models.CharField(max_length=225)
  email = models.EmailField(max_length=70, unique=True) 
  created = models.DateTimeField 

  def __str__(self):
    return (f'{self.first_name}, {self.last_name}')

class Ingredient(models.Model):
  name = models.CharField(max_length=225)
  source = models.URLField(max_length=500, blank=True)

  def __str__(self):
    return self.name

class Fridge(models.Model):
  ingredients = models.ManyToManyField(Ingredient)
  owners = models.ForeignKey(User, on_delete=models.CASCADE, related_name='fridges')

  def __str__(self):
    return self.owners

class Recipe(models.Model):
  title = models.CharField(max_length=225)
  image = models.CharField(max_length=500, null=True)
  instructions = models.TextField(max_length=2000)
  ingredients = models.ManyToManyField(Ingredient)

  def __str__(self):
    return self.title
  
