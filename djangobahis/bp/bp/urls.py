"""bp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [

######################################## Ligler #########################################################

    path('superlig', views.Superlig.as_view()),
    path('<int:pk>', views.Deneme.as_view()),

    path('laliga', views.Laliga.as_view()),
    path('<int:pk>', views.Deneme7.as_view()),

    path('seriea', views.Seriea.as_view()),
    path('<int:pk>', views.Deneme8.as_view()),

    path('premierleague', views.PremierLeague.as_view()),
    path('<int:pk>', views.Deneme9.as_view()),

    path('bundesliga', views.Bundesliga.as_view()),
    path('<int:pk>', views.Deneme10.as_view()),

    path('ligue1', views.Ligue1.as_view()),
    path('<int:pk>', views.Deneme11.as_view()),

######################################## Fikstür #########################################################

    path('fiksturbundesliga', views.BundesligaFikstur.as_view()),
    path('<int:pk>', views.Deneme1.as_view()),

    path('fiksturlaliga', views.LaligaFikstur.as_view()),
    path('<int:pk>', views.Deneme2.as_view()),

    path('fiksturseriea', views.SerieaFikstur.as_view()),
    path('<int:pk>', views.Deneme3.as_view()),

    path('fikstursuperlig', views.SuperligFikstur.as_view()),
    path('<int:pk>', views.Deneme4.as_view()),

    path('fiksturpremier', views.PremierLeagueFikstur.as_view()),
    path('<int:pk>', views.Deneme5.as_view()),

    path('fiksturligue1', views.Ligue1Fikstur.as_view()),
    path('<int:pk>', views.Deneme6.as_view()),
]