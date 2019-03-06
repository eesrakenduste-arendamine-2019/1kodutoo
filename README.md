# 1kodutoo
1. kodutöö Eesrakenduste arendamises.

## Tähtaeg 06.03.2018 23:59

Kujunda kellanäide vastavalt maitsele või kindlale teemale, mahutades kella täisekraanile, et saaks kasutada lauakella või ekraanisäästja asemel. Selleks, et see sobiks paljudele ekraanidele, kasuta kujunduse loomisel protsendilisi väärtusi (nt width: 100%; ) või nt võimalda kella suurust kasutajal muuta.

## Nõuded

1. Veebirakendus töötab. Näitab kella, kuupäeva ja nädalapäeva.
1. Vastavalt kasutaja tegevusele on võimalik muuta **kolme** lauakella atribuuti muuta (nt suurus, värv, asukoht vms)
1. Kell on originaalne ning kasutajaliides on maitsekalt kujundatud
1. Autori ees- ja perenimi on lehel välja toodud
1. Lehel on viide rakenduse repositooriumile
1. Kood on vormistatud vastavalt stiilijuhendile
1. `README.md` failis on välja toodud autori nimi, ekraanipilt rakendusest ja kirjeldatud funktsionaalsus

## Autor

Autor: Martin Tšerdantsev
Screenshot: https://prnt.sc/mu8ght
Funktsionaalsus: Kell töötab. Kell näitab kuupäeva, kellaaega ja eestikeelset kuu ja päeva nime. 
Kella sisse on ehitatud äratuskell ja taimer.
Äratuskella ja taimerit saab käivitada vastava nupu vajutusel. Neid on võimalik käivitada samaaegselt.

Äratuskell võtab sisse kaks muutujat: tund ja minutid. Pärast seda, kui kasutaja neid sisestab, hakkab kell loendama järgmise korrani, kui sisestatud kellaaeg esineb (täna või homme)
Taimer võtab sisse ühe muutuja: minutid. Pärast seda, kui kasutaja neid sisestab, arvutab programm distantsi praegusest momendist ning loendab niikaua, kuni distants ei ole <= 0.

Programis kindlasti esineb vigu - esinemise juhul palun nendest teatada e-posti kaudu: mcherda@tlu.ee