from django.db import models

# Create your models here.
class Member(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.IntegerField(unique=True)
    join_date = models.DateTimeField(auto_now_add=True)


    def __str__ (self):
        return f'{self.first_name} {self.last_name}'




# Model for loan apk

class LoanApplication(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    reason = models.TextField(null= False)
    status = models.CharField(max_length=50, choices=[
        ('Pending','Pending'),
        ('Approved','Approved'),
        ('Rejected','Rejected')
    ])

    application_date = models.DateTimeField(auto_created=True)

    # duration = models.DurationField()
    def __str__(self):
        return f'Loan Application {self.id} - {self.member}'


# Transaction modsel
class Transaction(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_type = models.CharField(max_length=50, choices=[
        ('Deposit', 'Deposit'),
        ('Withdrawal', 'Withdrawal'),
        ('Loan Payment', 'Loan Payment')
    ])

    transaction_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Transaction {self.id} - {self.member}'