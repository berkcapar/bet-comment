# todos/serializers.py
from rest_framework import serializers
from .models import LigButunligler,FiksturAll,LigSuperlig,FiksturBundesliga,FiksturLaliga,FiksturPremier,FiksturSeriea,FiksturSuperlig,FiksturLigue1,LigLaliga,LigSeriea,LigPremier,LigBundesliga,LigLigue1,OyuncularSuperlig,PuanBundesliga,PuanLaliga,PuanSeriea,PuanSuperlig,PuanPremier,PuanLigue1,Takimlar,OyuncularBundesliga,OyuncularPremier,OyuncularLaliga,OyuncularSeriea,OyuncularLigue1


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

class ButunLigler(serializers.ModelSerializer):
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
        model = LigButunligler

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

########################################## Oyuncular #############################################

class OyuncuTurkey(serializers.ModelSerializer):
    class Meta:
        fields = (
        'takim_adi'
        'oyuncu_adi'
        'oyuncu_soyadi'
        'oyuncu_pozisyon'
        'oyuncu_yanpozisyon'
        'transfermarkt_id'
        'oyuncu_uyruk'
        'oyuncu_dogum_tarihi'
        'guncel_tarihi'
        'oyuncu_yas'
        'oyuncu_boy'
        'oyuncu_piyasadegeri'
        'oyuncu_ortalama'
        'oyuncu_hucum'
        'oyuncu_defans'
        'oyuncu_teknik'
        'oyuncu_zihinsel'
        'oyuncu_fiziksel'
        'oyuncu_hiz'
        'oyuncu_rate2021'
        'oyuncu_rate1920'
        'oyuncu_rate1819'
        'oyuncu_mac'
        'oyuncu_gol'
        'oyuncu_asist'
        'oyuncu_kollektif'
        )
        model = OyuncularSuperlig
        fields = '__all__'

class OyuncuIngiltere(serializers.ModelSerializer):
    class Meta:
        fields = (
        'takim_adi'
        'oyuncu_adi'
        'oyuncu_soyadi'
        'oyuncu_pozisyon'
        'oyuncu_yanpozisyon'
        'transfermarkt_id'
        'oyuncu_uyruk'
        'oyuncu_dogum_tarihi'
        'guncel_tarihi'
        'oyuncu_yas'
        'oyuncu_boy'
        'oyuncu_piyasadegeri'
        'oyuncu_ortalama'
        'oyuncu_hucum'
        'oyuncu_defans'
        'oyuncu_teknik'
        'oyuncu_zihinsel'
        'oyuncu_fiziksel'
        'oyuncu_hiz'
        'oyuncu_rate2021'
        'oyuncu_rate1920'
        'oyuncu_rate1819'
        'oyuncu_mac'
        'oyuncu_gol'
        'oyuncu_asist'
        'oyuncu_kollektif'
        )
        model = OyuncularPremier
        fields = '__all__'

class OyuncuAlmanya(serializers.ModelSerializer):
    class Meta:
        fields = (
        'takim_adi'
        'oyuncu_adi'
        'oyuncu_soyadi'
        'oyuncu_pozisyon'
        'oyuncu_yanpozisyon'
        'transfermarkt_id'
        'oyuncu_uyruk'
        'oyuncu_dogum_tarihi'
        'guncel_tarihi'
        'oyuncu_yas'
        'oyuncu_boy'
        'oyuncu_piyasadegeri'
        'oyuncu_ortalama'
        'oyuncu_hucum'
        'oyuncu_defans'
        'oyuncu_teknik'
        'oyuncu_zihinsel'
        'oyuncu_fiziksel'
        'oyuncu_hiz'
        'oyuncu_rate2021'
        'oyuncu_rate1920'
        'oyuncu_rate1819'
        'oyuncu_mac'
        'oyuncu_gol'
        'oyuncu_asist'
        'oyuncu_kollektif'
        )
        model = OyuncularBundesliga
        fields = '__all__'

class OyuncuIspanya(serializers.ModelSerializer):
    class Meta:
        fields = (
        'takim_adi'
        'oyuncu_adi'
        'oyuncu_soyadi'
        'oyuncu_pozisyon'
        'oyuncu_yanpozisyon'
        'transfermarkt_id'
        'oyuncu_uyruk'
        'oyuncu_dogum_tarihi'
        'guncel_tarihi'
        'oyuncu_yas'
        'oyuncu_boy'
        'oyuncu_piyasadegeri'
        'oyuncu_ortalama'
        'oyuncu_hucum'
        'oyuncu_defans'
        'oyuncu_teknik'
        'oyuncu_zihinsel'
        'oyuncu_fiziksel'
        'oyuncu_hiz'
        'oyuncu_rate2021'
        'oyuncu_rate1920'
        'oyuncu_rate1819'
        'oyuncu_mac'
        'oyuncu_gol'
        'oyuncu_asist'
        'oyuncu_kollektif'
        )
        model = OyuncularLaliga
        fields = '__all__'

class OyuncuItalya(serializers.ModelSerializer):
    class Meta:
        fields = (
        'takim_adi'
        'oyuncu_adi'
        'oyuncu_soyadi'
        'oyuncu_pozisyon'
        'oyuncu_yanpozisyon'
        'transfermarkt_id'
        'oyuncu_uyruk'
        'oyuncu_dogum_tarihi'
        'guncel_tarihi'
        'oyuncu_yas'
        'oyuncu_boy'
        'oyuncu_piyasadegeri'
        'oyuncu_ortalama'
        'oyuncu_hucum'
        'oyuncu_defans'
        'oyuncu_teknik'
        'oyuncu_zihinsel'
        'oyuncu_fiziksel'
        'oyuncu_hiz'
        'oyuncu_rate2021'
        'oyuncu_rate1920'
        'oyuncu_rate1819'
        'oyuncu_mac'
        'oyuncu_gol'
        'oyuncu_asist'
        'oyuncu_kollektif'
        )
        model = OyuncularSeriea
        fields = '__all__'



######################################## Puan Tablosu #########################################################

class PuanAlmanya(serializers.ModelSerializer):
    class Meta:
        fields = (
            'pos',
            'team',
            'mp',
            'w',
            'd',
            'l',
            'f',
            'a',
            'diff',
            'p',
            'last5',
        )
        model = PuanBundesliga
        fields = '__all__'

class PuanIspanya(serializers.ModelSerializer):
    class Meta:
        fields = (
            'pos',
            'team',
            'mp',
            'w',
            'd',
            'l',
            'f',
            'a',
            'diff',
            'p',
            'last5',
        )
        model = PuanLaliga
        fields = '__all__'

class PuanFransa(serializers.ModelSerializer):
    class Meta:
        fields = (
            'pos',
            'team',
            'mp',
            'w',
            'd',
            'l',
            'f',
            'a',
            'diff',
            'p',
            'last5',
        )
        model = PuanLigue1
        fields = '__all__'

class PuanIngiltere(serializers.ModelSerializer):
    class Meta:
        fields = (
            'pos',
            'team',
            'mp',
            'w',
            'd',
            'l',
            'f',
            'a',
            'diff',
            'p',
            'last5',
        )
        model = PuanPremier
        fields = '__all__'

class PuanItalya(serializers.ModelSerializer):
    class Meta:
        fields = (
            'pos',
            'team',
            'mp',
            'w',
            'd',
            'l',
            'f',
            'a',
            'diff',
            'p',
            'last5',
        )
        model = PuanSeriea
        fields = '__all__'

class PuanTurkey(serializers.ModelSerializer):
    class Meta:
        fields = (
            'pos',
            'team',
            'mp',
            'w',
            'd',
            'l',
            'f',
            'a',
            'diff',
            'p',
            'last5',
        )
        model = PuanSuperlig
        fields = '__all__'


######################################## Takımlar, Değerleri, Logo #########################################################


class ButunTakimlarDegerLogo(serializers.ModelSerializer):
    class Meta:
        fields = (
            'team_id',
            'team_name',
            'team_league',
            'team_value',
            'logo_link',
        )
        model = Takimlar
        fields = '__all__'


######################################## Bütün Fikstürler #########################################################


class FiksAll(serializers.ModelSerializer):
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
        model = FiksturAll