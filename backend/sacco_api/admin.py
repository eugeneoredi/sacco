from django.contrib import admin
from sacco.models import LoanApplication, Member, Transaction
# Register your models here.
admin.site.register(LoanApplication)
admin.site.register(Member)
admin.site.register(Transaction)