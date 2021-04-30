from django.contrib import admin
from .models import ButunLigFikstur,PuanAll,LigButunligler,FiksturAll,Takimlar,LigSuperlig,LigSeriea,LigLaliga,LigLigue1,LigPremier,LigBundesliga,FiksturLaliga,FiksturSeriea,FiksturLigue1,FiksturPremier,FiksturSuperlig,OyuncularSuperlig,OyuncularLaliga,OyuncularBundesliga,OyuncularSeriea,OyuncularPremier,OyuncularLigue1,PuanBundesliga,PuanLaliga,PuanSeriea,PuanSuperlig,PuanPremier,PuanLigue1

admin.site.register(LigSuperlig)
admin.site.register(LigBundesliga)
admin.site.register(LigPremier)
admin.site.register(LigLaliga)
admin.site.register(LigSeriea)
admin.site.register(LigLigue1)
admin.site.register(LigButunligler)
admin.site.register(ButunLigFikstur)

admin.site.register(FiksturLaliga)
admin.site.register(FiksturSeriea)
admin.site.register(FiksturLigue1)
admin.site.register(FiksturPremier)
admin.site.register(FiksturSuperlig)

admin.site.register(OyuncularSuperlig)
admin.site.register(OyuncularPremier)
admin.site.register(OyuncularLaliga)
admin.site.register(OyuncularSeriea)
admin.site.register(OyuncularBundesliga)

admin.site.register(PuanBundesliga)
admin.site.register(PuanSeriea)
admin.site.register(PuanPremier)
admin.site.register(PuanLaliga)
admin.site.register(PuanLigue1)
admin.site.register(PuanSuperlig)
admin.site.register(PuanAll)

admin.site.register(Takimlar)
admin.site.register(FiksturAll)
