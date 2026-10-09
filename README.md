# OFA Klima 0.01
Åpen, lokal prototype for et delregnskap i kornproduksjon. Åpne index.html i en nettleser. Ingen installasjon, konto eller server er nødvendig.

## Omfang
Energi og produksjon av mineralgjødsel beregnes. Lystgass, jordkarbon, organisk jord, kalking, plantevern, såkorn, maskiner og reparasjoner er uimplementert og vises som mangler. Transport etter gårdsgrinda er utenfor denne systemgrensen. Resultatet er aldri et komplett klimaavtrykk eller en rangering.

## Metode
Mengde ganger faktor. Faktorregister i engine.js, guide-2.3-partial-v1. Kilde: Landbrukets klimakalkulator, brukerveileder 2.3, kapittel 13: https://www.klimasmartlandbruk.no/getfile.php/134803-1776167164/Dokumenter/2.3%20Brukerveileder.pdf
Diesel: direkte 2.39 og produksjon 0.76 kg CO2e/L. Strøm 0.0345 kg CO2e/kWh. Produksjon av mineralgjødsel N/P/K: 4.79/1.34/1.44 kg CO2e/kg næringsstoff. Disse er veilederens oppgitte faktorer, ikke selvstendig verifisert hos original faktorutgiver. Gjødselproduksjon er ikke lystgass fra jord.
Modellen er vår delimplementasjon, ikke en HolosNor-sertifisering. Faktorens strøm- og drivstoffforutsetninger må vurderes før annen energimiks brukes. P/K-grunnlag må være kg element, ikke uten videre P2O5/K2O.

## Data og personvern
Tom verdi er ukjent; null er kjent null. Hver beregnet innsatsmengde krever år, kilde og datagrunnlag. År kan ikke blandes. Areal/avling skal gjelde samme produksjon og år som innsatsene; dette må brukeren kontrollere. Avlingsvanninnhold normaliseres ikke ennå. Eksempelknappen bruker kun syntetiske tall. Ingen gårdsdata, passord eller tokens er pakket med. Lokal lagring er nettleseravhengig; JSON-eksport er sikkerhetskopi, ikke automatisk skybackup.

## Kontroll
Kjør node test.cjs. Kontrollerer regning, ukjent/null, negative verdier, årskonflikt og manglende kilde. Visuell nettlesertest og sammenligning mot den fullstendige norske modellen gjenstår.

## Videre arbeid
- Versjonert skifte- og vekstmodell med avlingens vanninnhold.
- Gjødsling per skifte, jorddata og dokumentert lystgassmetode.
- Faktorer med separat kilde, lisens og usikkerhetsgrunnlag.
- Import med stabil identitet og duplikatkontroll.
- Valgfrie OFA/AgShare/Tripletex-adaptere.
- Separate sammenligninger for transport og reparasjon.
- Eksterne referansetester og metodegjennomgang før fullavtrykk vises.

Kode skrevet for dette prosjektet er lisensiert under MIT. Refererte dokumenter og tredjeparts faktordata har sine egne rettigheter; ingen rettigheter til disse overføres. Koden publiseres i oztiz/Ofa-Klimakalkulator. Innspill og feilrapporter er velkomne via GitHub Issues; ikke legg inn private gårdsdata eller bilag i offentlige saker.

