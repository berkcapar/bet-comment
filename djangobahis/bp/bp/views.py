# todos/views.py
from rest_framework import generics

from .models import LigSuperlig,FiksturBundesliga,FiksturLaliga,FiksturSeriea,FiksturPremier,FiksturSuperlig,FiksturLigue1,LigLaliga,LigSeriea,LigPremier,LigBundesliga,LigLigue1,OyuncularSuperlig,PuanBundesliga
from .serializers import LigTurkey,LigSpain,LigGermany,LigFrance,LigEngland,LigItaly,FiksBundesliga, FiksLaliga, FiksPremier, FiksLigue1, FiksSeriea,FiksSuperlig,OyuncuTurkey,PuanAlmanya

######################################## Ligler #########################################################

class Superlig(generics.ListCreateAPIView):
    queryset = LigSuperlig.objects.all()
    serializer_class = LigTurkey

class Deneme(generics.RetrieveUpdateDestroyAPIView):
    queryset = LigSuperlig.objects.all()
    serializer_class = LigTurkey

class Laliga(generics.ListCreateAPIView):
    queryset = LigLaliga.objects.all()
    serializer_class = LigSpain

class Deneme7(generics.RetrieveUpdateDestroyAPIView):
    queryset = LigLaliga.objects.all()
    serializer_class = LigSpain

class Seriea(generics.ListCreateAPIView):
    queryset = LigSeriea.objects.all()
    serializer_class = LigItaly

class Deneme8(generics.RetrieveUpdateDestroyAPIView):
    queryset = LigSeriea.objects.all()
    serializer_class = LigItaly

class PremierLeague(generics.ListCreateAPIView):
    queryset = LigPremier.objects.all()
    serializer_class = LigEngland

class Deneme9(generics.RetrieveUpdateDestroyAPIView):
    queryset = LigPremier.objects.all()
    serializer_class = LigEngland

class Bundesliga(generics.ListCreateAPIView):
    queryset = LigBundesliga.objects.all()
    serializer_class = LigGermany

class Deneme10(generics.RetrieveUpdateDestroyAPIView):
    queryset = LigBundesliga.objects.all()
    serializer_class = LigGermany

class Ligue1(generics.ListCreateAPIView):
    queryset = LigLigue1.objects.all()
    serializer_class = LigFrance

class Deneme11(generics.RetrieveUpdateDestroyAPIView):
    queryset = LigLigue1.objects.all()
    serializer_class = LigFrance

######################################## Fikstür #########################################################

class BundesligaFikstur(generics.ListCreateAPIView):
    queryset = FiksturBundesliga.objects.all()
    serializer_class = FiksBundesliga

class Deneme1(generics.RetrieveUpdateDestroyAPIView):
    queryset = FiksturBundesliga.objects.all()
    serializer_class = FiksBundesliga

class LaligaFikstur(generics.ListCreateAPIView):
    queryset = FiksturLaliga.objects.all()
    serializer_class = FiksLaliga

class Deneme2(generics.RetrieveUpdateDestroyAPIView):
    queryset = FiksturLaliga.objects.all()
    serializer_class = FiksLaliga

class SerieaFikstur(generics.ListCreateAPIView):
    queryset = FiksturSeriea.objects.all()
    serializer_class = FiksSeriea

class Deneme3(generics.RetrieveUpdateDestroyAPIView):
    queryset = FiksturSeriea.objects.all()
    serializer_class = FiksSeriea

class SuperligFikstur(generics.ListCreateAPIView):
    queryset = FiksturSuperlig.objects.all()
    serializer_class = FiksSuperlig

class Deneme4(generics.RetrieveUpdateDestroyAPIView):
    queryset = FiksturSuperlig.objects.all()
    serializer_class = FiksSuperlig

class PremierLeagueFikstur(generics.ListCreateAPIView):
    queryset = FiksturPremier.objects.all()
    serializer_class = FiksPremier

class Deneme5(generics.RetrieveUpdateDestroyAPIView):
    queryset = FiksturPremier.objects.all()
    serializer_class = FiksPremier

class Ligue1Fikstur(generics.ListCreateAPIView):
    queryset = FiksturLigue1.objects.all()
    serializer_class = FiksLigue1

class Deneme6(generics.RetrieveUpdateDestroyAPIView):
    queryset = FiksturLigue1.objects.all()
    serializer_class = FiksLigue1

######################################## Oyuncular #########################################################

class SuperligOyuncular(generics.ListCreateAPIView):
    queryset = OyuncularSuperlig.objects.all()
    serializer_class = OyuncuTurkey

class Deneme12(generics.RetrieveUpdateDestroyAPIView):
    queryset = OyuncularSuperlig.objects.all()
    serializer_class = OyuncuTurkey



######################################## Puan Tablosu #########################################################

class PuanTablosuAlmanya(generics.ListCreateAPIView):
    queryset = PuanBundesliga.objects.all()
    serializer_class = PuanAlmanya

class Deneme18(generics.RetrieveUpdateDestroyAPIView):
    queryset = PuanBundesliga.objects.all()
    serializer_class = PuanAlmanya
