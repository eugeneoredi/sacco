from django.urls import path
from .views import MemberDetail, MemberList, LoanApplicationDetail, LoanApplicationList, TransactionDetail, TransactionList

urlpatterns = [
    # Member views
    path('members/<int:pk>/', MemberDetail.as_view(), name='member-detail'),
    path('members/', MemberList.as_view(), name='member-list'),

    # Loan application views
    path('loans/<int:pk>/', LoanApplicationDetail.as_view(), name='loan-detail'),
    path('loans/', LoanApplicationList.as_view(), name='loan-list'),

    # Transaction views
    path('transactions/<int:pk>/', TransactionDetail.as_view(), name='transaction-detail'),
    path('transactions/', TransactionList.as_view(), name='transaction-list'),
]
