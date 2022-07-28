# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Categoria(models.Model):
    codigo = models.AutoField(primary_key=True)
    nome = models.CharField(unique=True, max_length=45)

    class Meta:
        managed = False
        db_table = 'categoria'


class HibernateSequence(models.Model):
    next_val = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hibernate_sequence'


class Imovel(models.Model):
    codigo = models.AutoField(primary_key=True)
    descricao = models.CharField(max_length=250, blank=True, null=True)
    endereco = models.CharField(max_length=150, blank=True, null=True)
    imagem = models.TextField()
    metragem = models.CharField(max_length=20)
    preco = models.FloatField()
    qtde_banheiro = models.IntegerField()
    qtde_quarto = models.IntegerField()
    titulo = models.CharField(max_length=50)
    categoria_codigo = models.ForeignKey(Categoria, models.DO_NOTHING, db_column='categoria_codigo')

    class Meta:
        managed = False
        db_table = 'imovel'
