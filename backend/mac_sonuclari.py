from algobp import *
import psycopg2 as psy
con = psy.connect(
    host = "db-bahispesinde1.cwln7t9ajzcz.eu-central-1.rds.amazonaws.com",
    database = "postgres",
    user = "Adminov",
    password = "amdin2323",
    port = "5435"
)

def mac_sonuclari(cur,league):
    cur.execute(f"SELECT takim1, ms, takim2 FROM {league} order by tarih desc")
    mac_sonuclari = cur.fetchall()
    print(mac_sonuclari)
with con.cursor() as cur:
    mac_sonuclari(cur, "lig_superlig")   