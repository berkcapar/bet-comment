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

    path('butunligler', views.LigButunLigler.as_view()),
    path('<int:pk>', views.Deneme34.as_view()),

    path('butunliglerfiksturler', views.ButunFiksturLig.as_view()),
    path('<int:pk>', views.Deneme50.as_view()),

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

######################################## Oyuncular (Bitmedi) #########################################################

    path('superligoyuncu', views.SuperligOyuncular.as_view()),
    path('<int:pk>', views.Deneme12.as_view()),

    path('premieroyuncu', views.PremierOyuncular.as_view()),
    path('<int:pk>', views.Deneme13.as_view()),

    path('serieaoyuncu', views.SeriaOyuncular.as_view()),
    path('<int:pk>', views.Deneme14.as_view()),

    path('laligaoyuncu', views.LaligaOyuncular.as_view()),
    path('<int:pk>', views.Deneme15.as_view()),

    path('bundesligaoyuncu', views.BundesligaOyuncular.as_view()),
    path('<int:pk>', views.Deneme16.as_view()),


######################################## Puan Tablosu (Bitmedi) #########################################################

    path('puanalmanya', views.PuanTablosuAlmanya.as_view()),
    path('<int:pk>', views.Deneme18.as_view()),

    path('puanturkiye', views.PuanTablosuTurkiye.as_view()),
    path('<int:pk>', views.Deneme19.as_view()),

    path('puanispanya', views.PuanTablosuIspanya.as_view()),
    path('<int:pk>', views.Deneme20.as_view()),

    path('puaningiltere', views.PuanTablosuIngiltere.as_view()),
    path('<int:pk>', views.Deneme21.as_view()),

    path('puanitalya', views.PuanTablosuItalya.as_view()),
    path('<int:pk>', views.Deneme22.as_view()),

    path('puanfransa', views.PuanTablosuFransa.as_view()),
    path('<int:pk>', views.Deneme23.as_view()),

    path('puanhepsi', views.PuanTablosuAll.as_view()),
    path('<int:pk>', views.Deneme40.as_view()),

    ######################################## Takımlar, Değerleri, Logo (Bitmedi) #########################################################

    path('takimlar', views.ButunTakimlar.as_view()),
    path('<int:pk>', views.Deneme25.as_view()),

######################################## Bütün Fikstürler #########################################################

    path('butunfikstur', views.ButunFikstur.as_view()),
    path('<int:pk>', views.Deneme26.as_view()),

]

