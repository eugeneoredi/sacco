from django.urls import path
from .import views

urlpatterns = [
    path("members/", views.MembersView.as_view(), name="members-view"),
    path("account/", views.AccountView.as_view(), name="account-view"),
]