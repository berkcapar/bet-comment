# todos/views.py
from rest_framework import generics

from .models import FiksturAll,LigSuperlig,FiksturBundesliga,FiksturLaliga,FiksturSeriea,FiksturPremier,FiksturSuperlig,FiksturLigue1,LigLaliga,LigSeriea,LigPremier,LigBundesliga,LigLigue1,OyuncularSuperlig,PuanBundesliga,PuanLaliga,PuanSeriea,PuanSuperlig,PuanPremier,PuanLigue1,Takimlar,OyuncularLaliga,OyuncularSeriea,OyuncularBundesliga,OyuncularPremier,OyuncularLigue1
from .serializers import FiksAll,ButunTakimlarDegerLogo,LigTurkey,LigSpain,LigGermany,LigFrance,LigEngland,LigItaly,FiksBundesliga, FiksLaliga, FiksPremier, FiksLigue1, FiksSeriea,FiksSuperlig,OyuncuTurkey,PuanAlmanya,OyuncuIspanya,OyuncuAlmanya,OyuncuIngiltere,OyuncuItalya,PuanFransa,PuanIngiltere,PuanIspanya,PuanItalya,PuanTurkey

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

class PremierOyuncular(generics.ListCreateAPIView):
    queryset = OyuncularPremier.objects.all()
    serializer_class = OyuncuIngiltere

class Deneme13(generics.RetrieveUpdateDestroyAPIView):
    queryset = OyuncularPremier.objects.all()
    serializer_class = OyuncuIngiltere

class SeriaOyuncular(generics.ListCreateAPIView):
    queryset = OyuncularSeriea.objects.all()
    serializer_class = OyuncuItalya

class Deneme14(generics.RetrieveUpdateDestroyAPIView):
    queryset = OyuncularSeriea.objects.all()
    serializer_class = OyuncuItalya

class LaligaOyuncular(generics.ListCreateAPIView):
    queryset = OyuncularLaliga.objects.all()
    serializer_class = OyuncuIspanya

class Deneme15(generics.RetrieveUpdateDestroyAPIView):
    queryset = OyuncularLaliga.objects.all()
    serializer_class = OyuncuIspanya

class BundesligaOyuncular(generics.ListCreateAPIView):
    queryset = OyuncularBundesliga.objects.all()
    serializer_class = OyuncuAlmanya

class Deneme16(generics.RetrieveUpdateDestroyAPIView):
    queryset = OyuncularBundesliga.objects.all()
    serializer_class = OyuncuAlmanya


######################################## Puan Tablosu #########################################################

class PuanTablosuAlmanya(generics.ListCreateAPIView):
    queryset = PuanBundesliga.objects.all()
    serializer_class = PuanAlmanya

class Deneme18(generics.RetrieveUpdateDestroyAPIView):
    queryset = PuanBundesliga.objects.all()
    serializer_class = PuanAlmanya

class PuanTablosuTurkiye(generics.ListCreateAPIView):
    queryset = PuanSuperlig.objects.all()
    serializer_class = PuanTurkey

class Deneme19(generics.RetrieveUpdateDestroyAPIView):
    queryset = PuanSuperlig.objects.all()
    serializer_class = PuanTurkey

class PuanTablosuIspanya(generics.ListCreateAPIView):
    queryset = PuanLaliga.objects.all()
    serializer_class = PuanIspanya

class Deneme20(generics.RetrieveUpdateDestroyAPIView):
    queryset = PuanLaliga.objects.all()
    serializer_class = PuanIspanya

class PuanTablosuIngiltere(generics.ListCreateAPIView):
    queryset = PuanPremier.objects.all()
    serializer_class = PuanIngiltere

class Deneme21(generics.RetrieveUpdateDestroyAPIView):
    queryset = PuanPremier.objects.all()
    serializer_class = PuanIngiltere

class PuanTablosuItalya(generics.ListCreateAPIView):
    queryset = PuanSeriea.objects.all()
    serializer_class = PuanItalya

class Deneme22(generics.RetrieveUpdateDestroyAPIView):
    queryset = PuanSeriea.objects.all()
    serializer_class = PuanItalya

class PuanTablosuFransa(generics.ListCreateAPIView):
    queryset = PuanLigue1.objects.all()
    serializer_class = PuanFransa

class Deneme23(generics.RetrieveUpdateDestroyAPIView):
    queryset = PuanLigue1.objects.all()
    serializer_class = PuanFransa


######################################## Takımlar, Değerleri, Logo #########################################################

class ButunTakimlar(generics.ListCreateAPIView):
    queryset = Takimlar.objects.all()
    serializer_class = ButunTakimlarDegerLogo


class Deneme25(generics.RetrieveUpdateDestroyAPIView):
    queryset = Takimlar.objects.all()
    serializer_class = ButunTakimlarDegerLogo

######################################## Bütün Fikstürler #########################################################

class ButunFikstur(generics.ListCreateAPIView):
    queryset = FiksturAll.objects.all()
    serializer_class = FiksAll


class Deneme26(generics.RetrieveUpdateDestroyAPIView):
    queryset = FiksturAll.objects.all()
    serializer_class = FiksAll