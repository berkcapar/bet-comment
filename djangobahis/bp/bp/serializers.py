# todos/serializers.py
from rest_framework import serializers
from .models import LigSuperlig,FiksturBundesliga,FiksturLaliga,FiksturPremier,FiksturSeriea,FiksturSuperlig,FiksturLigue1,LigLaliga,LigSeriea,LigPremier,LigBundesliga,LigLigue1


########################################## Fikstür #############################################

class FiksBundesliga(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'takim2',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = FiksturBundesliga

class FiksSeriea(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'takim2',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = FiksturSeriea

class FiksSuperlig(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'takim2',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = FiksturSuperlig


class FiksLaliga(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'takim2',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = FiksturLaliga

class FiksLigue1(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'takim2',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = FiksturLigue1

class FiksPremier(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'takim2',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = FiksturPremier

########################################## Ligler #############################################

class LigTurkey(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'ms',
            'takim2',
            'iy',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'goller',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = LigSuperlig

class LigSpain(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'ms',
            'takim2',
            'iy',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'goller',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = LigLaliga

class LigItaly(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'ms',
            'takim2',
            'iy',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'goller',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = LigSeriea

class LigEngland(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'ms',
            'takim2',
            'iy',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'goller',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = LigPremier

class LigGermany(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'ms',
            'takim2',
            'iy',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'goller',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = LigBundesliga

class LigFrance(serializers.ModelSerializer):
    class Meta:
        fields = (
            'takim1',
            'ms',
            'takim2',
            'iy',
            'tarih',
            'lig',
            'hafta',
            'saat',
            'stadyum',
            'goller',
            'teknikadam1',
            'teknikadam2',
            'hakem',
            'link',

        )
        model = LigLigue1