from django.urls import path
from django.views.generic import TemplateView



app_name = 'sacco'

urlpatterns = [
    path('',TemplateView.as_view(template_name="sacco/index.html"))
]