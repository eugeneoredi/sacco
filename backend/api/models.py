from django.db import models

# Create your models here.
class Members(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.first_name} - {self.last_name}"

class Account(models.Model):
    member = models.ForeignKey(Members, on_delete=models.CASCADE)
    account_number = models.CharField(max_length=20, unique=True)
    balance = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.member} - {self.account_number} - {self.balance}" 

    
    
