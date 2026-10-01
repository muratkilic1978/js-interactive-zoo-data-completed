"use strict";
// ✏️ B. Skriv use strict her ↓

// -----------------------------------------------------------
// STEP 1: Data om dyrene
// -----------------------------------------------------------
// ✏️ Lav et array med navnet animalInfo med ét objekt for hvert dyr
//    i tabellen.
//
//   className | name   | species | age | food
//   animal1   | Simba  | Løve    | 5   | Kød
//   animal2   | Dumbo  | Elefant | 8   | Blade og frugt
//   animal3   | Gerald | Giraf   | 6   | Blade fra høje træer
// ✏️ Skriv dit array her ↓
const animalInfo = [
    {   
        className: "animal1", // CSS-klassenavn til at identificere dyret i HTML
        name: "Simba",
        species: "Løve",
        age: 5,
        food: "Kød"
    },
    {   
        className: "animal2",
        name: "Dumbo",
        species: "Elefant",
        age: 8,
        food: "Blade og frugt"
    },
    {   
        className: "animal3",
        name: "Gerald",
        species: "Giraf",
        age: 6,
        food: "Blade fra høje træer"
    }
];


// ✅ Test: Kig i Console – er der 3 dyr?
console.log(animalInfo);

animalInfo.forEach((animal) =>{
  console.log(`${animal.name} - ${animal.species}`);
})

// -----------------------------------------------------------
// STEP 2: Hent infoboksen
// ------------------------------------------------------------------
// ✏️ Hent elementet med id'et infobox, og gem det i en variabel
//    med navnet infoboxElement.
// ✏️ Skriv din kode her ↓
  const infoboxElement = document.getElementById("infobox");


// ------------------------------------------------------------------
// STEP 3: Funktion der viser infoboksen
// ------------------------------------------------------------------
// ✏️ A. Skriv funktionshovedet til en funktion med navnet showInfoBox
//       og parameteren text.
// ✏️ B. Gør boksen synlig ved at tilføje CSS-klassen show.
//       Hint: Se på classList.
function showInfoBox(text)
{
  infoboxElement.innerHTML = text;
  // ✏️ B. Skriv din kode her ↓
  infoboxElement.classList.add("show");


}


// ------------------------------------------------------------------
// STEP 4: Vis info, når man klikker på et dyr
// ------------------------------------------------------------------
// Løkken kører én gang for hvert dyr i animalInfo.
//
// 💬 Sparring 1: Vis ChatGPT din færdige kode, og forklar, hvordan
//    className forbinder dit objekt med HTML'en.
// 💬 Sparring 2: Forklar, hvorfor teksten først vises, når brugeren
//    klikker.

animalInfo.forEach(function (animal) {
  const element = document.querySelector("." + animal.className);

  element.addEventListener("click", function () {

    // ✏️ Navnet er lavet for dig. Tilføj tre linjer under navnet:
    //      Art: ...
    //      Alder: ... år
    //      Føde: ...
    //    Afslut hver linje med <br> (undtagen den sidste).
    const animalDetails = `
      Navn: <strong>${animal.name}</strong><br>
      Race: ${animal.species}<br>
      Alder: ${animal.age}<br>
      Føde: ${animal.food}
    `;

    // ✏️ Skriv dit funktionskald til funktionen showInfoBox
    //    med animalDetails her ↓

    showInfoBox(animalDetails);
  });
});


// ==================================================================
// ✅ SLUTTJEK
// ==================================================================
// ☐ Script-tagget med defer står i <head> i index.html
// ☐ use strict står i toppen af koden i script.js
// ☐ Boksen er skjult, når siden indlæses
// ☐ Hvert dyr viser sine egne oplysninger
// ☐ Ingen røde fejl i Console
//
// 💬 Afsluttende sparring: Forklar ChatGPT hele forløbet med dine
//    egne ord: objekt → klik → tekst → infoboks.
//    Bed den udfordre din forklaring med ét spørgsmål.
