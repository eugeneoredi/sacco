from django.shortcuts import render
from rest_framework import generics
from .models import Account, Members
from .serializer import MembersSerializer, AccountSerializer
# Create your views here.



class MembersView(generics.CreateAPIView):
    queryset = Members.objects.all()
    serializer_class = MembersSerializer


class AccountView(generics.CreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer