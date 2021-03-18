from algobp import *
import psycopg2 as psy
con = psy.connect(
    host = "db-bahispesinde1.cwln7t9ajzcz.eu-central-1.rds.amazonaws.com",
    database = "postgres",
    user = "Adminov",
    password = "amdin2323",
    port = "5435"
)

def fikstur1(cur,league):
    cur.execute(f"SELECT * FROM {league} order by tarih asc")
    fikstur = cur.fetchall()
    print(fikstur)
with con.cursor() as cur:
    fikstur1(cur, "fikstur_premier")   