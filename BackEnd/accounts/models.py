from django.db import models
from django.utils import timezone

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.name
    
class Newsletter(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'newsletter'

    def __str__(self) -> str:
        return self.email

class Book(models.Model):
    title = models.CharField(max_length=50)
    autor = models.CharField(max_length=40)
    ratings = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField(max_length=255)

    class Meta:
        db_table = 'books'

    def __str__(self):
        return self.title
