
![LOGO](/documentation/images/cover.png)

Herzlich willkommen im Wiki von teamTrivial

Anwendung erreichbar unter : Windpark

Teamaufteilung und Verantwortlichkeiten:

    Frank Schütze (Frontend: mit Angular)
    Konrad Münch (Backend: mit NodeJS, Express, MongoDB)
    Philipp Horländer (Backend NodeJS, Tests)
    Lukas Poeppel (Jenkins, Sonar)

Projekt-Bedienung im Jenkins:

    teamTrivial_Start startet die Anwendung. Diese ist erreichbar unter (1min 20sek Aufbau/Verzögerung):
    http://robert-magnus.de:8035/teamtrivial/

    teamTrivial_Stopp ist derzeit ausgesetzt! Zum Stoppen der Anwendung:
    http://robert-magnus.de:8035/api/shutdown

Dokumentation:
   <details>
    <summary>Projekt richtig kompilieren</summary>
    > Text
    </details>  
    
   <details>
    <summary>APIs</summary>
    API  
Die APIs müssen in der URL hinter den Port angehängt werden. Beispiel: localhost:8035/api/power  

APIs ohne Datumsfilter  
API: /api/power  
Gibt alle WKAs der Datenbank zurück, keine Parameter nötig  

API: /api/count  
Gibt die Anzahl aller Datenbankeinträge wieder  

API: /api/shutdown  
Ermöglicht das Herrunterfahren des Servers  

APIs mit Datumsfilter  
&from : von Datum  
&until : bis Datum  
&filterProperty : ob Anlage genehmigt oder in Betrieb ist (Inbetriebn,D oder Genehmigt,D )  
Beispiele  

URL: http://localhost:8035/api/turbines?until=2020-01-01&from=2015-01-01&filterProperty=Inbetriebn,D  
URL: http://localhost:8035/api/turbines?until=2020-01-01&from=2015-01-01&filterProperty=Genehmigt,D  
API: /api/turbines  
Für die Kartenanzeige der Anwendung, gibt eine gefilterte Anzahl von WKAs zurück.  

API: /api/full-power  
Gibt die Summe aller Leistungen der Anlagen im Datumbereich zurück.  

API: /api/power-per-year  
Für Grafische Darstellung der verfügbaren Gesamtleistung (incl. bereits vorhandener Leistung)  

API: /api/hub-rotor  
Grafische Darstellung Nabenhöhe vs. Rotordurchmesser, inkl. farblicher Kodierung der jeweiligen Anzahl der Wertkombinationen Streudiagramm  

API: /api/power-per-area-code  
Leistung (Anzeige der Top 10) Balkendiagramm (X-Achse Leistung, Y-Achse PLZs)  

API: /api/approved-built-difference  
Zur Darstellung des Boxplots.  

API: /api/average-built-duration  
Für die Darstellung, wie entwickelt sich die Baudauer von WKA's in dem (gewählten) Zeitraum  

der Parameter &amount ist hier für die Anzahl von Datenpunkten  

URL: http://localhost:8035/api/average-built-duration?until=2020-01-01&from=2015-01-01&amount=25  
    </details>  

   <details>
    <summary>Lizenzen</summary>
    > Text
    </details>  

   <details>
    <summary>Komponentenarchitektur</summary>
    ![Komponenten](/documentation/images/component.png)
    </details> 

   <details>
    <summary>Systemarchitektur</summary>
    ![System](/documentation/images/system.png)
    </details> Systemarchitektur

Sprintprotokolle / Abschlusspräsentation :

    Protokoll vom 21.10.2020

    Protokoll vom 04.11.2020

    Protokoll vom 18.11.2020

    Protokoll vom 02.12.2020

    Protokoll vom 16.12.2020

    Protokoll vom 06.01.2021

    Abschlusspräsentation 20.01.2021

