from django.contrib import admin
from .models import FiksturAll,Takimlar,LigSuperlig,LigSeriea,LigLaliga,LigLigue1,LigPremier,LigBundesliga,FiksturLaliga,FiksturSeriea,FiksturLigue1,FiksturPremier,FiksturSuperlig,OyuncularSuperlig,PuanBundesliga

admin.site.register(LigSuperlig)
admin.site.register(LigBundesliga)
admin.site.register(LigPremier)
admin.site.register(LigLaliga)
admin.site.register(LigSeriea)
admin.site.register(LigLigue1)

admin.site.register(FiksturLaliga)
admin.site.register(FiksturSeriea)
admin.site.register(FiksturLigue1)
admin.site.register(FiksturPremier)
admin.site.register(FiksturSuperlig)

admin.site.register(OyuncularSuperlig)
admin.site.register(PuanBundesliga)

admin.site.register(Takimlar)
admin.site.register(FiksturAll)
