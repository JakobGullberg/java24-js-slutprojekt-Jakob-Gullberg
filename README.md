# 🎬 Movie Explorer

Movie Explorer är en webbaserad applikation där användare kan:

- Utforska populära och topprankade filmer
- Söka efter filmer eller skådespelare
- Sortera resultat efter titel eller popularitet
- Klicka på en film för att se detaljerad info och trailer via en modal

All data hämtas från [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api).

## 🚀 Kom igång

1. Klona detta repo
2. Öppna `index.html` i din webbläsare (helst med Live Server via vsCode)
3. Utforska filmer, sök, klicka, kolla trailers 🎥

## 🧩 Funktioner

- Sökning efter film eller person
- Dynamisk rendering av resultat
- Modal med detaljer och trailer
- Sortering av resultat
- Responsiv och användarvänlig layout

## 📁 Mappstruktur

Projektet är uppdelat i tre huvuddelar:

index.html – Huvudsidan där all HTML finns.
css/styles.css – Innehåller all styling för projektet.
js/ – Här ligger all JavaScript-logik uppdelad i modul-filer:
main.js – Den centrala filen som styr interaktionen och knyter ihop alla delar.
api.js – Hämtar data från TMDB:s API (filmer, personer, trailers, etc).
modal.js – Ansvarar för att visa modalen med detaljerad filminfo.
renderMovies.js – Visar filmkort i gränssnittet.
renderPersons.js – Visar sökresultat för personer (skådespelare, regissörer etc).
sort.js – Hanterar sorteringslogik (titel och popularitet).


## 🔑 API

Projektet använder TMDB:s publika REST API. Din API-nyckel måste vara aktiv och korrekt för att appen ska fungera.

> Du kan skapa en API-nyckel gratis genom att registrera dig på [TMDB:s utvecklarsida](https://www.themoviedb.org/signup). 

- När du registerar dig kan det uppstå problem med bekräftelsekoden som skickas ut, detta kan bero på vilket nätverk du är på osv. Så testa registera dig på ditt normala nätverk annars gör det via mobilt nätverk på på mobil/padda (det löste problemet åt mig, då jag inte mottog någon confirmation länk ).