from algobp import *
import psycopg2 as psy
con = psy.connect(
    host = "db-bahispesinde1.cwln7t9ajzcz.eu-central-1.rds.amazonaws.com",
    database = "postgres",
    user = "Adminov",
    password = "amdin2323",
    port = "5435"
)



def takimlar(cur,league):
    cur.execute(f"SELECT * FROM {league} WHERE team_league = 'Eredivisie'")
    takimlar = cur.fetchall()
    print(takimlar)
with con.cursor() as cur:
    takimlar(cur, "takimlar")   