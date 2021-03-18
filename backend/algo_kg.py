from algobp import *
import psycopg2 as psy
con = psy.connect(
    host = "db-bahispesinde1.cwln7t9ajzcz.eu-central-1.rds.amazonaws.com",
    database = "postgres",
    user = "Adminov",
    password = "amdin2323",
    port = "5435"
)

ev_sahibi_count = 0
dep_count = 0
beraber_count = 0
count_win = 0
count_lose = 0
count_beraberlik = 0
kgvarolma = 0.0
kgyokolma = 0.0
kgvar = 0.0
kgyok = 0.0
count_kg = 0
takim1 = ''
takim2 = ''
lig = ""

with con.cursor() as cur:
    fikstur1 = (fikstur(cur, "fikstur_premier"))
    for i in range(int(len(fikstur1) / 3)):
        takim1 = fikstur1[i * 3]
        takim2 = fikstur1[i * 3 + 1]
        lig = fikstur1[i * 3 + 2]
        #winrate_evsahibi, winrate_dep = takim_deger(cur, takim1, takim2, winrate_evsahibi, winrate_dep)
        #winrate_dep += (takimdeplasman(cur, takim2, count_win, count_lose, count_beraberlik, lig))
        #winrate_evsahibi += (takimev(cur, takim1, count_win, count_lose, count_beraberlik, lig))
        #winrate_evsahibi += son3macwinlose(cur,takim1,count_win,count_lose,count_beraberlik,lig)
        #winrate_dep += son3macwinlose(cur,takim2,count_win,count_lose,count_beraberlik,lig)
        #print(str(takim1), winrate_evsahibi, str(takim2), winrate_dep)
        #winrate_evsahibi = 0.0
        #winrate_dep = 0.0

        kgvarolma += ev_gol(cur, takim1, count_kg, lig) + dep_gol(cur, takim2, count_kg, lig) + ev_son3mac_kg_var(cur, takim1, count_kg, lig) + dep_son3mac_kg_var(cur, takim2, count_kg, lig) + arasindakikgson5mackgvar(cur, takim2, takim1, count_win, lig) + ev_evde_golyeme(cur,takim1,count_kg,lig) + dep_depde_golyeme(cur,takim2,count_kg,lig)
        kgyokolma += ev_gol_yok(cur, takim1, count_kg, lig) + dep_gol_yok(cur, takim2, count_kg, lig) + ev_son3mac_kg_yok(cur, takim1, count_kg, lig) + dep_son3mac_kg_yok(cur, takim2, count_kg, lig) + arasindakikgson5mackgyok(cur, takim2, takim1, count_win, lig) + ev_evde_golyeme_yok(cur,takim1,count_kg,lig) + dep_depde_golyeme_yok(cur,takim2,count_kg,lig)
        kgvar = kgvarolma/(kgvarolma+kgyokolma)
        kgyok = 1 - kgvar
        print(str(takim1),"vs",str(takim2)," Kg Var:", kgvar," Kg Yok:", kgyok)
        kgvar,kgyok,kgvarolma,kgyokolma = 0,0,0,0