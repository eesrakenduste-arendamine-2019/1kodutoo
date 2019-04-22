# 1kodutoo Kristjan Põldmets http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/1kodutoo/Kodut%c3%b6%c3%b6%20screenshot.png

Kellarakenduses on 4 funktsionaalsust: Kella ja kuupäeva värvi muutus, kella ja kuupäeva suuruse muutus, taustavärvi muutus ning kella ja kuupäeva kirjašerifi muutus. Igale slaider tüüpi nupule rakendub eraldi lihtne funktsioon mis muudab css'i. Leht on responsive disainiga, muutudes kolmel erineval ekraani laiusel. Viisaka välimusega slaider tüüpi nupu css on leitud otse veebi näidisest

Algselt tekkis probleeme js "camelcase" tüüpi lausete koostamisel.

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

## Mõned ideed võimalikeks täiendusteks (lihtsalt, et mõte hakkaks jooksma)

* Vahetuda võivad taustapildid, taustal võib mängida muusika
* Taustale klikkides muudetakse kella taustaväri
* Kellale klõpsides muudetakse numbrite värvi või numbrite suurust;
* Iga numbri suurust saab eraldi muuta
* Nooleklahvidega saab kella ekraanil liigutada
* Küsi enne kella näitamise alustamist kasutajalt tema lemmikvärv ja tee sellest lähtudes midagi
* Muuda kella ja tausta värvi vastavalt ajale (päev/öö)
* Kella suurus ja asukoht sõltuvad hiire asukohast ekraanil
* Äkki võiks tegu olla hoopis analoogkellaga
* Kirjatüüpi saab ka muuta, [google.com/fonts](https://www.google.com/fonts)
* Kasutaja saab lisada või kasutajaöe näidatakse mitu kellaaega erinevatest maailma kohtadest

## Abimaterjal

* Sündmuste loetelu [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp)
* Ajal põhinevad sündmused [JavaScript Timing Events](http://www.w3schools.com/js/js_timing.asp)
* CSSi muutmine [HTML DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp)
