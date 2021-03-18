def fikstur(cur,league):
    matches = []
    cur.execute(f"SELECT takim1,takim2,lig FROM {league} order by tarih asc LIMIT 30")
    fikstur = cur.fetchall()

    for item in fikstur:

        matches += item

    return matches

######################################################################################################################################################################

def isim(lig):

    if lig == "Premier League":
        return "lig_premier"
    elif lig == "Süper Lig":
        return "lig_superlig"
    elif lig == "Serie A ":
        return "lig_seriea"
    elif lig == "Bundesliga":
        return "lig_bundesliga"
    elif lig == "Ligue 1":
        return "lig_ligue1"
    elif lig == "La Liga":
        return "lig_laliga"

def takim_deger(cur,ev_sahibi,deplasman,winrate_evsahibi,winrate_dep):
    cur.execute(f"SELECT team_value FROM takimlar where team_name = '{ev_sahibi}' ")
    prints1 = cur.fetchall()
    print(prints1)
    cur.execute(f"SELECT team_value FROM takimlar where team_name = '{deplasman}' ")
    prints2 = cur.fetchall()
    print(prints2)

    if prints1 > prints2:
        winrate_evsahibi += 0.1
        return winrate_evsahibi,0

    else:
        winrate_dep += 0.1
        return winrate_dep,1

######################################################################################################################################################################

def sonmaclar(cur,ev_sahibi,deplasman,countev,countdep,countberaber,league):
    cur.execute(f"SELECT ms FROM  {isim(league)} where takim1 = '{ev_sahibi}' and takim2 = '{deplasman}' order by tarih desc limit 3")
    prints3 = cur.fetchall()
    for item in prints3:
        #print(str(item[0]).split(" ")[0],str(item[0]).split(" ")[1],str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[0]) > int(str(item[0]).split(" ")[2]):
            countev +=1
        elif int(str(item[0]).split(" ")[0]) < int(str(item[0]).split(" ")[2]):
            countdep +=1
        else:
            countberaber +=1

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1 = '{deplasman}' and takim2 = '{ev_sahibi}' order by tarih desc limit 3 ")
    prints4 = cur.fetchall()
    for item in prints4:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[0]) > int(str(item[0]).split(" ")[2]):
            countdep += 1
        elif int(str(item[0]).split(" ")[0]) < int(str(item[0]).split(" ")[2]):
            countev += 1
        else:
            countberaber += 1

    return (countev-countdep) * 0.05

    #return countev,countdep,countberaber

######################################################################################################################################################################

def takimdeplasman(cur,deplasman,countwin,countberaber,countlose,league):
    cur.execute(f"SELECT ms FROM {isim(league)} where takim2 = '{deplasman}' order by tarih desc limit 3")
    depdurum = cur.fetchall()
    for item in depdurum:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[0]) > int(str(item[0]).split(" ")[2]):
            countlose += 1
        elif int(str(item[0]).split(" ")[0]) < int(str(item[0]).split(" ")[2]):
            countwin += 1
        else:
            countberaber += 1

    return (countwin-countlose) * 0.05

######################################################################################################################################################################

def takimev(cur,ev_sahibi,countwin,countberaber,countlose,league):
    cur.execute(f"SELECT ms FROM {isim(league)} where takim1 = '{ev_sahibi}' order by tarih desc limit 3")
    evdurum = cur.fetchall()
    for item in evdurum:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[0]) > int(str(item[0]).split(" ")[2]):
            countwin += 1
        elif int(str(item[0]).split(" ")[0]) < int(str(item[0]).split(" ")[2]):
            countlose += 1
        else:
            countberaber += 1

    return (countwin-countlose) * 0.05

######################################################################################################################################################################

def son3macwinlose(cur,takim,countwin,countlose,countberaber,league):
    cur.execute(f"SELECT ms FROM {isim(league)} where takim1 = '{takim}' order by tarih desc limit 3")
    takim3mac = cur.fetchall()
    for item in takim3mac:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[0]) > int(str(item[0]).split(" ")[2]):
            countwin += 1
        elif int(str(item[0]).split(" ")[0]) < int(str(item[0]).split(" ")[2]):
            countlose += 1
        else:
            countberaber += 1
        if countwin == 3:
            return -0.15
        elif countlose == 3:
            return 0.15
        else:
            return 0.00

######################################################################################################################################################################
#                                                                KG VAR - YOK                                                                                        #
######################################################################################################################################################################

def ev_evde_golyeme(cur,ev_sahibi,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' order by tarih desc LIMIT 5")
    golvarev = cur.fetchall()

    for item in golvarev:

        if int(str(item[0]).split(" ")[2]) > 0:
            countgoal += 1

    return countgoal * 0.10

######################################################################################################################################################################

def ev_evde_golyeme_yok(cur,ev_sahibi,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' order by tarih desc LIMIT 5")
    golvarev = cur.fetchall()

    for item in golvarev:

        if int(str(item[0]).split(" ")[2]) == 0:
            countgoal += 1

    return countgoal * 0.10

######################################################################################################################################################################

def dep_depde_golyeme(cur,deplasman,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2= '{deplasman}' order by tarih desc LIMIT 5")
    golvardep = cur.fetchall()

    for item in golvardep:

        if int(str(item[0]).split(" ")[0]) > 0:
            countgoal += 1

    return countgoal * 0.10

######################################################################################################################################################################

def dep_depde_golyeme_yok(cur,deplasman,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2= '{deplasman}' order by tarih desc LIMIT 5")
    golvardep = cur.fetchall()

    for item in golvardep:

        if int(str(item[0]).split(" ")[0]) == 0:
            countgoal += 1

    return countgoal * 0.10

######################################################################################################################################################################

def ev_gol(cur,ev_sahibi,countev,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1 = '{ev_sahibi}' order by tarih desc LIMIT 5")
    golvarev = cur.fetchall()

    for item in golvarev:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[0]) > 0:
            countev += 1


    return countev * 0.10


######################################################################################################################################################################

def ev_gol_yok(cur,ev_sahibi,countev,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1 = '{ev_sahibi}' order by tarih desc LIMIT 5")
    golvarev = cur.fetchall()

    for item in golvarev:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[0]) == 0:
            countev += 1


    return countev * 0.10


######################################################################################################################################################################


def dep_gol(cur,deplasman,countdep,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2 = '{deplasman}' order by tarih desc LIMIT 5")
    golvardep = cur.fetchall()

    for item in golvardep:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[2]) > 0:
            countdep += 1

    return countdep * 0.10

######################################################################################################################################################################

def dep_gol_yok(cur,deplasman,countdep,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2 = '{deplasman}' order by tarih desc LIMIT 5")
    golvardep = cur.fetchall()

    for item in golvardep:
        #print(str(item[0]).split(" ")[0], str(item[0]).split(" ")[1], str(item[0]).split(" ")[2])

        if int(str(item[0]).split(" ")[2]) == 0:
            countdep += 1

    return countdep * 0.10

######################################################################################################################################################################

def ev_son3mac_kg_var(cur,ev_sahibi,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' or takim2 = '{ev_sahibi}' order by tarih desc LIMIT 3")
    kgvarev = cur.fetchall()

    for item in kgvarev:

        if int(str(item[0]).split(" ")[0]) > 0 and int(str(item[0]).split(" ")[2]) > 0:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def ev_son3mac_kg_yok(cur,ev_sahibi,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' or takim2 = '{ev_sahibi}' order by tarih desc LIMIT 3")
    kgvarev = cur.fetchall()

    for item in kgvarev:

        if int(str(item[0]).split(" ")[0]) == 0 or int(str(item[0]).split(" ")[2]) == 0:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def dep_son3mac_kg_var(cur,deplasman,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{deplasman}' or takim2 = '{deplasman}' order by tarih desc LIMIT 3")
    kgvardep = cur.fetchall()

    for item in kgvardep:

        if int(str(item[0]).split(" ")[0]) > 0 and int(str(item[0]).split(" ")[2]) > 0:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def dep_son3mac_kg_yok(cur,deplasman,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{deplasman}' or takim2 = '{deplasman}' order by tarih desc LIMIT 3")
    kgvardep = cur.fetchall()

    for item in kgvardep:

        if int(str(item[0]).split(" ")[0]) == 0 or int(str(item[0]).split(" ")[2]) == 0:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def arasindakikgson5mackgvar(cur,ev_sahibi,deplasman,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' and takim2 = '{deplasman}' or takim1 = '{deplasman}' and takim2 = '{ev_sahibi}' order by tarih desc LIMIT 5")
    kgvarikitakım = cur.fetchall()

    for item in kgvarikitakım:

        if int(str(item[0]).split(" ")[0]) > 0 and int(str(item[0]).split(" ")[2]) > 0:
            countgoal +=1

    return countgoal * 0.10


######################################################################################################################################################################

def arasindakikgson5mackgyok(cur,ev_sahibi,deplasman,countgoal,league): #kgvar

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' and takim2 = '{deplasman}' or takim1 = '{deplasman}' and takim2 = '{ev_sahibi}' order by tarih desc LIMIT 5")
    kgvarikitakım = cur.fetchall()

    for item in kgvarikitakım:

        if int(str(item[0]).split(" ")[0]) == 0 or int(str(item[0]).split(" ")[2]) == 0:
            countgoal +=1

    return countgoal * 0.10


######################################################################################################################################################################
#                                                                2.5 Üst-Alt                                                                                         #
######################################################################################################################################################################

def son3mac2bucukust_ev(cur,ev_sahibi,countgoal,league): #2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' or takim2 = '{ev_sahibi}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) > 2:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def son3mac2bucukust_ev_yok(cur,ev_sahibi,countgoal,league): #2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' or takim2 = '{ev_sahibi}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) <= 2:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def son3mac2bucukust_dep(cur,deplasman,countgoal,league): #2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{deplasman}' or takim2 = '{deplasman}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) > 2:
            countgoal += 1


    return countgoal * 0.15

######################################################################################################################################################################

def son3mac2bucukust_dep_yok(cur,deplasman,countgoal,league): #2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{deplasman}' or takim2 = '{deplasman}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) <= 2:
            countgoal += 1


    return countgoal * 0.15


######################################################################################################################################################################

def takim_sahibi_toplam_gol(cur,takim,countgoal,league): #2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}'order by tarih desc LIMIT 2")
    tgev = cur.fetchall()

    for item in tgev:

        countgoal += int(str(item[0]).split(" ")[0])

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2= '{takim}'order by tarih desc LIMIT 2")
    tgdep = cur.fetchall()

    for item in tgdep:

        countgoal += int(str(item[0]).split(" ")[2])

    if countgoal >= 7 :

        return 0.10

    else:
        return 0.0

######################################################################################################################################################################

def takim_sahibi_toplam_gol_yok(cur,takim,countgoal,league): #2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}'order by tarih desc LIMIT 2")
    tgev = cur.fetchall()

    for item in tgev:

        countgoal += int(str(item[0]).split(" ")[0])

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2= '{takim}'order by tarih desc LIMIT 2")
    tgdep = cur.fetchall()

    for item in tgdep:

        countgoal += int(str(item[0]).split(" ")[2])

    if countgoal <= 7 :

        return 0.10

    else:
        return 0.0

######################################################################################################################################################################

def son5mactg(cur,takim,countgoal,league): #2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}' or takim2 = '{takim}' order by tarih desc LIMIT 5")
    tg = cur.fetchall()

    for item in tg:

        countgoal += int(str(item[0]).split(" ")[0])+int(str(item[0]).split(" ")[2])

    if countgoal >= 30:

        return 0.15

    else:
        return 0.0

######################################################################################################################################################################

def son5mactg_yok(cur, takim, countgoal, league):  # 2.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}' or takim2 = '{takim}' order by tarih desc LIMIT 5")
    tg = cur.fetchall()

    for item in tg:
        countgoal += int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2])

    if countgoal <= 30:

        return 0.15

    else:
        return 0.0

######################################################################################################################################################################
#                                                                1.5 Üst-Alt                                                                                         #
######################################################################################################################################################################

def son3mac1bucukust_ev(cur,ev_sahibi,countgoal,league): #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' or takim2 = '{ev_sahibi}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) > 1:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def son3mac1bucukust_ev_yok(cur,ev_sahibi,countgoal,league): #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{ev_sahibi}' or takim2 = '{ev_sahibi}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) <= 1:
            countgoal += 1

    return countgoal * 0.15

######################################################################################################################################################################

def son3mac1bucukust_dep(cur,deplasman,countgoal,league): #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{deplasman}' or takim2 = '{deplasman}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) > 1:
            countgoal += 1


    return countgoal * 0.15

######################################################################################################################################################################

def son3mac1bucukust_dep_yok(cur,deplasman,countgoal,league): #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{deplasman}' or takim2 = '{deplasman}' order by tarih desc LIMIT 3")
    son3mac2bucuk = cur.fetchall()

    for item in son3mac2bucuk:

        if int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2]) <= 1:
            countgoal += 1


    return countgoal * 0.15


######################################################################################################################################################################

def takim_sahibi_toplam_gol_15Ust(cur,takim,countgoal,league): #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}'order by tarih desc LIMIT 2")
    tgev = cur.fetchall()

    for item in tgev:

        countgoal += int(str(item[0]).split(" ")[0])

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2= '{takim}'order by tarih desc LIMIT 2")
    tgdep = cur.fetchall()

    for item in tgdep:

        countgoal += int(str(item[0]).split(" ")[2])

    if countgoal >= 3 :

        return 0.10

    else:
        return 0.0

######################################################################################################################################################################

def takim_sahibi_toplam_gol_15Ust_yok(cur,takim,countgoal,league): #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}'order by tarih desc LIMIT 2")
    tgev = cur.fetchall()

    for item in tgev:

        countgoal += int(str(item[0]).split(" ")[0])

    cur.execute(f"SELECT ms FROM {isim(league)} where takim2= '{takim}'order by tarih desc LIMIT 2")
    tgdep = cur.fetchall()

    for item in tgdep:

        countgoal += int(str(item[0]).split(" ")[2])

    if countgoal < 3 :

        return 0.10

    else:
        return 0.0

######################################################################################################################################################################

def son5mactg_15Ust(cur,takim,countgoal,league): #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}' or takim2 = '{takim}' order by tarih desc LIMIT 5")
    tg = cur.fetchall()

    for item in tg:

        countgoal += int(str(item[0]).split(" ")[0])+int(str(item[0]).split(" ")[2])

    if countgoal >= 20:

        return 0.15

    else:
        return 0.0

######################################################################################################################################################################

def son5mactg_15Ust_yok(cur, takim, countgoal, league):  #1.5üst

    cur.execute(f"SELECT ms FROM {isim(league)} where takim1= '{takim}' or takim2 = '{takim}' order by tarih desc LIMIT 5")
    tg = cur.fetchall()

    for item in tg:
        countgoal += int(str(item[0]).split(" ")[0]) + int(str(item[0]).split(" ")[2])

    if countgoal < 20:

        return 0.15

    else:
        return 0.0

######################################################################################################################################################################
#                                                                3.5 Üst-Alt                                                                                         #
######################################################################################################################################################################

