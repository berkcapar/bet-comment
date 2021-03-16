from algobp import *
import psycopg2 as psy
con = psy.connect(
    host = "db-bahispesinde1.cwln7t9ajzcz.eu-central-1.rds.amazonaws.com",
    database = "postgres",
    user = "Adminov",
    password = "amdin2323",
    port = "5435"
)

winrate_evsahibi = 0.0
winrate_dep = 0.0
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
ms25ustolma = 0.0
ms25altolma = 0.0
ms25ust = 0.0
ms15ustolma = 0.0
ms15altolma = 0.0
ms15ust = 0.0
ms15alt = 0.0
ms35ust = 0.0
ms25alt = 0.0
takim1 = ''
takim2 = ''
lig = ""

with con.cursor() as cur:
    fikstur1 = (fikstur(cur, "fikstur_premier"))
    for i in range(int(len(fikstur1) / 3)):
        takim1 = fikstur1[i * 3]
        takim2 = fikstur1[i * 3 + 1]
        lig = fikstur1[i * 3 + 2]

        ms25ustolma += son3mac2bucukust_ev(cur, takim1, count_win, lig) + son3mac2bucukust_dep(cur, takim2, count_win,lig) + takim_sahibi_toplam_gol(cur, takim1, count_win, lig) + takim_sahibi_toplam_gol(cur,takim2,count_win,lig) + son5mactg(cur, takim1, count_win, lig) + son5mactg(cur, takim2, count_win, lig)
        ms25altolma += son3mac2bucukust_ev_yok(cur, takim1, count_win, lig) + son3mac2bucukust_dep_yok(cur, takim2, count_win,lig) + takim_sahibi_toplam_gol_yok(cur, takim1, count_win, lig) + takim_sahibi_toplam_gol_yok(cur,takim2,count_win,lig) + son5mactg_yok(cur, takim2, count_win, lig) + son5mactg(cur, takim1, count_win, lig)
        ms25ust = ms25ustolma/(ms25ustolma+ms25altolma)
        ms25alt = 1 - ms25ust
        print(str(takim1),"vs",str(takim2)," 2.5 Üst:",ms25ust," 2.5 Alt:",ms25alt)
        ms25ust,ms25alt,ms25ustolma,ms25altolma = 0,0,0,0


        ms15ustolma += son3mac1bucukust_ev(cur, takim1, count_win, lig) + son3mac1bucukust_dep(cur, takim2, count_win,lig) + takim_sahibi_toplam_gol_15Ust(cur, takim1, count_win, lig) + takim_sahibi_toplam_gol_15Ust(cur,takim2,count_win,lig) + son5mactg_15Ust(cur, takim1, count_win, lig) +son5mactg_15Ust(cur, takim2, count_win, lig)
        ms15altolma += son3mac2bucukust_ev_yok(cur, takim1, count_win, lig) + son3mac2bucukust_dep_yok(cur, takim2, count_win,lig) + takim_sahibi_toplam_gol_15Ust_yok(cur, takim1, count_win, lig) + takim_sahibi_toplam_gol_15Ust_yok(cur,takim2,count_win,lig) +son5mactg_15Ust_yok(cur, takim1, count_win, lig) + son5mactg_15Ust_yok(cur, takim2, count_win, lig)
        ms15ust = ms15ustolma/(ms15ustolma+ms15altolma)
        ms15alt = 1-ms15ust
        print(str(takim1), "vs", str(takim2), " 1.5 Üst:",ms15ust," 1.5 Alt:", ms15alt)
        ms15ust,ms15alt,ms15ustolma,ms15altolma = 0,0,0,0

        print()