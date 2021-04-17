# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DatabasePost(models.Model):
    takim1 = models.CharField(max_length=200, blank=True, null=True)
    ms = models.CharField(max_length=200, blank=True, null=True)
    takim2 = models.CharField(max_length=200, blank=True, null=True)
    iy = models.CharField(max_length=200, blank=True, null=True)
    tarih = models.DateTimeField(blank=True, null=True)
    lig = models.CharField(max_length=200, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.CharField(max_length=5, blank=True, null=True)
    stadyum = models.CharField(max_length=300, blank=True, null=True)
    goller = models.CharField(max_length=5000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=300, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=300, blank=True, null=True)
    hakem = models.CharField(max_length=300, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'database_post'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class FiksturAll(models.Model):
    takim1 = models.CharField(max_length=30)
    takim2 = models.CharField(max_length=30)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.CharField(max_length=5, blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'fikstur_all'


class FiksturBundesliga(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'fikstur_bundesliga'


class FiksturBundesligaBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_bundesliga_backup'


class FiksturLaliga(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'fikstur_laliga'


class FiksturLaligaBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_laliga_backup'


class FiksturLigue1(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'fikstur_ligue1'


class FiksturLigue1Backup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_ligue1_backup'


class FiksturPremier(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'fikstur_premier'


class FiksturPremierBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_premier_backup'


class FiksturSeriea(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'fikstur_seriea'


class FiksturSerieaBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_seriea_backup'


class FiksturSuperlig(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'fikstur_superlig'


class FiksturSuperligBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_superlig_backup'


class FiksturTmp(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_tmp'


class FiksturTmpBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fikstur_tmp_backup'


class LigBundesliga(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'lig_bundesliga'


class LigBundesligaBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lig_bundesliga_backup'


class LigLaliga(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'lig_laliga'


class LigLaligaBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lig_laliga_backup'


class LigLigue1(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'lig_ligue1'


class LigLigue1Backup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lig_ligue1_backup'


class LigPremier(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'lig_premier'


class LigPremierBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lig_premier_backup'


class LigSeriea(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'lig_seriea'


class LigSerieaBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lig_seriea_backup'


class LigSuperlig(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(primary_key=True, max_length=250)

    class Meta:
        managed = False
        db_table = 'lig_superlig'


class LigSuperligBackup(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lig_superlig_backup'


class OyuncularBundesliga(models.Model):
    takim_adi = models.CharField(max_length=30)
    oyuncu_adi = models.CharField(max_length=30, blank=True, null=True)
    oyuncu_soyadi = models.CharField(max_length=30)
    oyuncu_pozisyon = models.CharField(max_length=30)
    oyuncu_yanpozisyon = models.CharField(max_length=30, blank=True, null=True)
    transfermarkt_id = models.CharField(primary_key=True, max_length=2500)
    oyuncu_uyruk = models.CharField(max_length=30)
    oyuncu_dogum_tarihi = models.DateField(blank=True, null=True)
    guncel_tarih = models.DateField(blank=True, null=True)
    oyuncu_yas = models.FloatField(blank=True, null=True)
    oyuncu_boy = models.IntegerField(blank=True, null=True)
    oyuncu_piyasadegeri = models.FloatField(blank=True, null=True)
    oyuncu_ortalama = models.FloatField(blank=True, null=True)
    oyuncu_hucum = models.IntegerField(blank=True, null=True)
    oyuncu_defans = models.IntegerField(blank=True, null=True)
    oyuncu_teknik = models.IntegerField(blank=True, null=True)
    oyuncu_zihinsel = models.IntegerField(blank=True, null=True)
    oyuncu_fiziksel = models.IntegerField(blank=True, null=True)
    oyuncu_hiz = models.IntegerField(blank=True, null=True)
    oyuncu_rate2021 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1920 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1819 = models.IntegerField(blank=True, null=True)
    oyuncu_mac = models.IntegerField(blank=True, null=True)
    oyuncu_gol = models.IntegerField(blank=True, null=True)
    oyuncu_asist = models.IntegerField(blank=True, null=True)
    oyuncu_kollektif = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'oyuncular_bundesliga'


class OyuncularLaliga(models.Model):
    takim_adi = models.CharField(max_length=30)
    oyuncu_adi = models.CharField(max_length=30, blank=True, null=True)
    oyuncu_soyadi = models.CharField(max_length=30)
    oyuncu_pozisyon = models.CharField(max_length=30)
    oyuncu_yanpozisyon = models.CharField(max_length=30, blank=True, null=True)
    transfermarkt_id = models.CharField(primary_key=True, max_length=2500)
    oyuncu_uyruk = models.CharField(max_length=30)
    oyuncu_dogum_tarihi = models.DateField(blank=True, null=True)
    guncel_tarih = models.DateField(blank=True, null=True)
    oyuncu_yas = models.FloatField(blank=True, null=True)
    oyuncu_boy = models.IntegerField(blank=True, null=True)
    oyuncu_piyasadegeri = models.FloatField(blank=True, null=True)
    oyuncu_ortalama = models.FloatField(blank=True, null=True)
    oyuncu_hucum = models.IntegerField(blank=True, null=True)
    oyuncu_defans = models.IntegerField(blank=True, null=True)
    oyuncu_teknik = models.IntegerField(blank=True, null=True)
    oyuncu_zihinsel = models.IntegerField(blank=True, null=True)
    oyuncu_fiziksel = models.IntegerField(blank=True, null=True)
    oyuncu_hiz = models.IntegerField(blank=True, null=True)
    oyuncu_rate2021 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1920 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1819 = models.IntegerField(blank=True, null=True)
    oyuncu_mac = models.IntegerField(blank=True, null=True)
    oyuncu_gol = models.IntegerField(blank=True, null=True)
    oyuncu_asist = models.IntegerField(blank=True, null=True)
    oyuncu_kollektif = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'oyuncular_laliga'


class OyuncularLigue1(models.Model):
    takim_adi = models.CharField(max_length=30)
    oyuncu_adi = models.CharField(max_length=30, blank=True, null=True)
    oyuncu_soyadi = models.CharField(max_length=30)
    oyuncu_pozisyon = models.CharField(max_length=30)
    oyuncu_yanpozisyon = models.CharField(max_length=30, blank=True, null=True)
    transfermarkt_id = models.CharField(primary_key=True, max_length=2500)
    oyuncu_uyruk = models.CharField(max_length=30)
    oyuncu_dogum_tarihi = models.DateField(blank=True, null=True)
    guncel_tarih = models.DateField(blank=True, null=True)
    oyuncu_yas = models.FloatField(blank=True, null=True)
    oyuncu_boy = models.IntegerField(blank=True, null=True)
    oyuncu_piyasadegeri = models.FloatField(blank=True, null=True)
    oyuncu_ortalama = models.FloatField(blank=True, null=True)
    oyuncu_hucum = models.IntegerField(blank=True, null=True)
    oyuncu_defans = models.IntegerField(blank=True, null=True)
    oyuncu_teknik = models.IntegerField(blank=True, null=True)
    oyuncu_zihinsel = models.IntegerField(blank=True, null=True)
    oyuncu_fiziksel = models.IntegerField(blank=True, null=True)
    oyuncu_hiz = models.IntegerField(blank=True, null=True)
    oyuncu_rate2021 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1920 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1819 = models.IntegerField(blank=True, null=True)
    oyuncu_mac = models.IntegerField(blank=True, null=True)
    oyuncu_gol = models.IntegerField(blank=True, null=True)
    oyuncu_asist = models.IntegerField(blank=True, null=True)
    oyuncu_kollektif = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'oyuncular_ligue1'


class OyuncularPremier(models.Model):
    takim_adi = models.CharField(max_length=30)
    oyuncu_adi = models.CharField(max_length=30, blank=True, null=True)
    oyuncu_soyadi = models.CharField(max_length=30)
    oyuncu_pozisyon = models.CharField(max_length=30)
    oyuncu_yanpozisyon = models.CharField(max_length=30, blank=True, null=True)
    transfermarkt_id = models.CharField(primary_key=True, max_length=2500)
    oyuncu_uyruk = models.CharField(max_length=30)
    oyuncu_dogum_tarihi = models.DateField(blank=True, null=True)
    guncel_tarih = models.DateField(blank=True, null=True)
    oyuncu_yas = models.FloatField(blank=True, null=True)
    oyuncu_boy = models.IntegerField(blank=True, null=True)
    oyuncu_piyasadegeri = models.FloatField(blank=True, null=True)
    oyuncu_ortalama = models.FloatField(blank=True, null=True)
    oyuncu_hucum = models.IntegerField(blank=True, null=True)
    oyuncu_defans = models.IntegerField(blank=True, null=True)
    oyuncu_teknik = models.IntegerField(blank=True, null=True)
    oyuncu_zihinsel = models.IntegerField(blank=True, null=True)
    oyuncu_fiziksel = models.IntegerField(blank=True, null=True)
    oyuncu_hiz = models.IntegerField(blank=True, null=True)
    oyuncu_rate2021 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1920 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1819 = models.IntegerField(blank=True, null=True)
    oyuncu_mac = models.IntegerField(blank=True, null=True)
    oyuncu_gol = models.IntegerField(blank=True, null=True)
    oyuncu_asist = models.IntegerField(blank=True, null=True)
    oyuncu_kollektif = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'oyuncular_premier'


class OyuncularSeriea(models.Model):
    takim_adi = models.CharField(max_length=30)
    oyuncu_adi = models.CharField(max_length=30, blank=True, null=True)
    oyuncu_soyadi = models.CharField(max_length=30)
    oyuncu_pozisyon = models.CharField(max_length=30)
    oyuncu_yanpozisyon = models.CharField(max_length=30, blank=True, null=True)
    transfermarkt_id = models.CharField(primary_key=True, max_length=2500)
    oyuncu_uyruk = models.CharField(max_length=30)
    oyuncu_dogum_tarihi = models.DateField(blank=True, null=True)
    guncel_tarih = models.DateField(blank=True, null=True)
    oyuncu_yas = models.FloatField(blank=True, null=True)
    oyuncu_boy = models.IntegerField(blank=True, null=True)
    oyuncu_piyasadegeri = models.FloatField(blank=True, null=True)
    oyuncu_ortalama = models.FloatField(blank=True, null=True)
    oyuncu_hucum = models.IntegerField(blank=True, null=True)
    oyuncu_defans = models.IntegerField(blank=True, null=True)
    oyuncu_teknik = models.IntegerField(blank=True, null=True)
    oyuncu_zihinsel = models.IntegerField(blank=True, null=True)
    oyuncu_fiziksel = models.IntegerField(blank=True, null=True)
    oyuncu_hiz = models.IntegerField(blank=True, null=True)
    oyuncu_rate2021 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1920 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1819 = models.IntegerField(blank=True, null=True)
    oyuncu_mac = models.IntegerField(blank=True, null=True)
    oyuncu_gol = models.IntegerField(blank=True, null=True)
    oyuncu_asist = models.IntegerField(blank=True, null=True)
    oyuncu_kollektif = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'oyuncular_seriea'


class OyuncularSuperlig(models.Model):
    takim_adi = models.CharField(max_length=30)
    oyuncu_adi = models.CharField(max_length=30, blank=True, null=True)
    oyuncu_soyadi = models.CharField(max_length=30)
    oyuncu_pozisyon = models.CharField(max_length=30)
    oyuncu_yanpozisyon = models.CharField(max_length=30, blank=True, null=True)
    transfermarkt_id = models.CharField(primary_key=True, max_length=2500)
    oyuncu_uyruk = models.CharField(max_length=30)
    oyuncu_dogum_tarihi = models.DateField(blank=True, null=True)
    guncel_tarih = models.DateField(blank=True, null=True)
    oyuncu_yas = models.FloatField(blank=True, null=True)
    oyuncu_boy = models.IntegerField(blank=True, null=True)
    oyuncu_piyasadegeri = models.FloatField(blank=True, null=True)
    oyuncu_ortalama = models.FloatField(blank=True, null=True)
    oyuncu_hucum = models.IntegerField(blank=True, null=True)
    oyuncu_defans = models.IntegerField(blank=True, null=True)
    oyuncu_teknik = models.IntegerField(blank=True, null=True)
    oyuncu_zihinsel = models.IntegerField(blank=True, null=True)
    oyuncu_fiziksel = models.IntegerField(blank=True, null=True)
    oyuncu_hiz = models.IntegerField(blank=True, null=True)
    oyuncu_rate2021 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1920 = models.IntegerField(blank=True, null=True)
    oyuncu_rate1819 = models.IntegerField(blank=True, null=True)
    oyuncu_mac = models.IntegerField(blank=True, null=True)
    oyuncu_gol = models.IntegerField(blank=True, null=True)
    oyuncu_asist = models.IntegerField(blank=True, null=True)
    oyuncu_kollektif = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'oyuncular_superlig'


class PuanBundesliga(models.Model):
    pos = models.IntegerField(blank=True, null=True)
    team = models.TextField(primary_key=True)
    mp = models.IntegerField(blank=True, null=True)
    w = models.IntegerField(blank=True, null=True)
    d = models.IntegerField(blank=True, null=True)
    l = models.IntegerField(blank=True, null=True)
    f = models.IntegerField(blank=True, null=True)
    a = models.IntegerField(blank=True, null=True)
    diff = models.IntegerField(blank=True, null=True)
    p = models.IntegerField(blank=True, null=True)
    last5 = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puan_bundesliga'


class PuanLaliga(models.Model):
    pos = models.IntegerField(blank=True, null=True)
    team = models.TextField(primary_key=True)
    mp = models.IntegerField(blank=True, null=True)
    w = models.IntegerField(blank=True, null=True)
    d = models.IntegerField(blank=True, null=True)
    l = models.IntegerField(blank=True, null=True)
    f = models.IntegerField(blank=True, null=True)
    a = models.IntegerField(blank=True, null=True)
    diff = models.IntegerField(blank=True, null=True)
    p = models.IntegerField(blank=True, null=True)
    last5 = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puan_laliga'


class PuanLigue1(models.Model):
    pos = models.IntegerField(blank=True, null=True)
    team = models.TextField(primary_key=True)
    mp = models.IntegerField(blank=True, null=True)
    w = models.IntegerField(blank=True, null=True)
    d = models.IntegerField(blank=True, null=True)
    l = models.IntegerField(blank=True, null=True)
    f = models.IntegerField(blank=True, null=True)
    a = models.IntegerField(blank=True, null=True)
    diff = models.IntegerField(blank=True, null=True)
    p = models.IntegerField(blank=True, null=True)
    last5 = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puan_ligue1'


class PuanPremier(models.Model):
    pos = models.IntegerField(blank=True, null=True)
    team = models.TextField(primary_key=True)
    mp = models.IntegerField(blank=True, null=True)
    w = models.IntegerField(blank=True, null=True)
    d = models.IntegerField(blank=True, null=True)
    l = models.IntegerField(blank=True, null=True)
    f = models.IntegerField(blank=True, null=True)
    a = models.IntegerField(blank=True, null=True)
    diff = models.IntegerField(blank=True, null=True)
    p = models.IntegerField(blank=True, null=True)
    last5 = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puan_premier'


class PuanSeriea(models.Model):
    pos = models.IntegerField(blank=True, null=True)
    team = models.TextField(primary_key=True)
    mp = models.IntegerField(blank=True, null=True)
    w = models.IntegerField(blank=True, null=True)
    d = models.IntegerField(blank=True, null=True)
    l = models.IntegerField(blank=True, null=True)
    f = models.IntegerField(blank=True, null=True)
    a = models.IntegerField(blank=True, null=True)
    diff = models.IntegerField(blank=True, null=True)
    p = models.IntegerField(blank=True, null=True)
    last5 = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puan_seriea'


class PuanSuperlig(models.Model):
    pos = models.IntegerField(blank=True, null=True)
    team = models.TextField(primary_key=True)
    mp = models.IntegerField(blank=True, null=True)
    w = models.IntegerField(blank=True, null=True)
    d = models.IntegerField(blank=True, null=True)
    l = models.IntegerField(blank=True, null=True)
    f = models.IntegerField(blank=True, null=True)
    a = models.IntegerField(blank=True, null=True)
    diff = models.IntegerField(blank=True, null=True)
    p = models.IntegerField(blank=True, null=True)
    last5 = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puan_superlig'


class Takimlar(models.Model):
    team_id = models.AutoField(primary_key=True)
    team_name = models.CharField(max_length=50)
    team_league = models.CharField(max_length=50)
    team_value = models.FloatField()
    logo_link = models.CharField(max_length=5000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'takimlar'


class Tmp(models.Model):
    takim1 = models.CharField(max_length=30, blank=True, null=True)
    ms = models.CharField(max_length=10, blank=True, null=True)
    takim2 = models.CharField(max_length=30, blank=True, null=True)
    iy = models.CharField(max_length=10, blank=True, null=True)
    tarih = models.DateField(blank=True, null=True)
    lig = models.CharField(max_length=30, blank=True, null=True)
    hafta = models.IntegerField(blank=True, null=True)
    saat = models.TimeField(blank=True, null=True)
    stadyum = models.CharField(max_length=100, blank=True, null=True)
    goller = models.CharField(max_length=10000, blank=True, null=True)
    teknikadam1 = models.CharField(max_length=50, blank=True, null=True)
    teknikadam2 = models.CharField(max_length=50, blank=True, null=True)
    hakem = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tmp'
