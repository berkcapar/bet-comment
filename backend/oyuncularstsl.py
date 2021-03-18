from algobp import *
import psycopg2 as psy
con = psy.connect(
    host = "db-bahispesinde1.cwln7t9ajzcz.eu-central-1.rds.amazonaws.com",
    database = "postgres",
    user = "Adminov",
    password = "amdin2323",
    port = "5435"
)

def oyuncular(cur,league):
    cur.execute(f"SELECT * FROM {league}")
    oyuncular = cur.fetchall()
    print(oyuncular)
with con.cursor() as cur:
    oyuncular(cur, "oyuncular_superlig")   