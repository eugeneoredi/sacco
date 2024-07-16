from rest_framework import serializers
from .models import Members, Account

class MembersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Members
        fields = ['first_name','last_name','phone']

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['member','account_number','balance']
        
