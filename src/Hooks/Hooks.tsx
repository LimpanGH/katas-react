import React, { useState, useEffect, useContext } from 'react';

// * A React Hook är en funktion som tillåter funktionella komponenter i React att använda sig av tillstånd
// *    och andra React-funktioner. Hooks introducerades i React version 16.8 och ger en ny och enklare metod för att skriva komponenter.
// * En React-komponent med en Hook är en vanlig JavaScript-funktion som använder en eller flera av Reacts inbyggda Hooks,
// *    såsom useState, useEffect, useContext, etc.

// ! Här är några exempel på vanliga React-hooks och deras användningsområden:------------------------------

// todo useState: Används för att lägga till lokal tillstånd till funktionella komponenter.
// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// todo useEffect: Används för att utföra side-effects i funktionella komponenter, till exempel att prenumerera på data, hantera DOM-uppdateringar, etc.
// function Example() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     });

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// todo useContext: Används för att konsumera värden från React-kontext.
// const ThemeContext = React.createContext('light');

// function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return <button>{theme}</button>;
// }
// * Genom att använda Hooks kan du dela återanvändbar logik mellan komponenter, och du kan skriva mer läsbar och underhållbar kod.

// ! useState, useEffect och useContext EXPLAINED -------------------------------------

// todo useState är en hook som tillåter funktionella komponenter i React att hantera tillstånd. -----------------
// * Den returnerar ett aktuellt tillståndsvärde och en funktion för att uppdatera detta värde.
// * När du anropar useState, returneras en array med två element: det aktuella tillståndsvärdet och en funktion som låter dig uppdatera det.
// * Du kan anropa useState flera gånger i en komponent för att hantera olika tillstånd oberoende av varandra.

// * 1. Initialisering av tillstånd: När du använder useState(initialValue), skapar du en ny tillståndsvariabel. initialValue är det initiala värdet på tillståndsvariabeln.

// * 2. Returnering av aktuellt tillstånd och funktion för att uppdatera det: useState() returnerar en array med två element:
// *    Det första elementet är det aktuella tillståndsvärdet (currentState).
// *    Det andra elementet är en funktion (setState), som används för att uppdatera det aktuella tillståndet.

// * 3. Användning av aktuellt tillstånd och funktionen för att uppdatera det: Du kan använda det aktuella tillståndet för att visa information i din komponent.
// *    När du vill uppdatera tillståndet, anropar du den funktion som returnerades av useState(), setState(newValue), och tilldelar det nya värdet till tillståndsvariabeln.
// *    När tillståndet ändras, kommer React att omladda komponenten och visa det nya tillståndsvärdet.

// Exempel:

function Räknare() {
  const [antalKlick, setAntalKlick] = useState(0);

  return (
    <div>
      <p>Du har klickat {antalKlick} gånger</p>
      <button onClick={() => setAntalKlick(antalKlick + 1)}>Klicka här</button>
    </div>
  );
}

// todo useEffect är en hook som tillåter dig att utföra sidoeffekter i funktionella komponenter. -----------------
// * Den tjänar samma syfte som livscykelmetoder (t.ex. componentDidMount, componentDidUpdate, componentWillUnmount) i klasskomponenter.
// * useEffect tar en funktion som sin första parameter, vilken innehåller koden du vill köra som en sidoeffekt.
// * Den kan också ta en valfri andra parameter, en array med beroenden, som avgör när effekten ska köras.
// * Dessa sidoeffekter kan vara t.ex. datahämtning, DOM-manipulation eller prenumeration på externa händelser.
// * useEffect() körs efter varje renderingscykel, inklusive den första renderingen. Det är viktigt att notera att useEffect() kan köras flera gånger
// * under komponentens livstid beroende på dess beroenden och när den renderas om.

// * useEffect() tar två argument: en funktion och en valfri array av beroenden. Funktionen som skickas som första argument är själva sidoeffekten som ska utföras.
// * Denna funktion kommer att köras efter varje renderingscykel och kan innehålla asynkron kod eller andra sidoeffekter.
// * Om du anger en array av beroenden som det andra argumentet kommer useEffect() att köras igen bara om någon av beroendena har förändrats sedan föregående renderingscykel.
// * Om du lämnar detta argument tomt kommer useEffect() att köras efter varje renderingscykel.
// * Används tex med APIer och andra saker utanför REACT

// Exempel 1. useEffect:

function Exempel() {
  const [antalKlick, setAntalKlick] = useState(0);

  useEffect(() => {
    document.title = `Du har klickat ${antalKlick} gånger`;
  });

  return (
    <div>
      <p>Du har klickat {antalKlick} gånger</p>
      <button onClick={() => setAntalKlick(antalKlick + 1)}>Klicka här</button>
    </div>
  );
}

// Exempel 2 useEffect med beroende-array:

// function Example2() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Skapa en prenumeration på en extern resurs
//     const subscription = externalResource.subscribe((data) => {
//       setData(data);
//     });

//     // Funktionen returnerad från useEffect används för att rensa upp prenumerationen när komponenten avmonteras
//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []); // Tom beroendearray, effekten körs endast vid montering och avmontering av komponenten

//   return (
//     <div>{data ? <p>Received data: {data}</p> : <p>Loading data...</p>}</div>
//   );
// }

// todo useContext är en hook som tillåter dig att konsumera värden från React-context utan att behöva nästla. -----------------
// * Den accepterar ett context-objekt (värdet returnerat från React.createContext) och returnerar det aktuella kontextvärdet för det contextet.
// * Du kan använda useContext för att få tillgång till värden såsom teman, användarinställningar, autentiseringsstatus, osv., som lagras i contextet.

//Exempel:

const TemaContext = React.createContext('ljus');

function TemaKnapp() {
  const tema = useContext(TemaContext);
  return <button>{tema}</button>;
}

// *Dessa hooks förbättrar betydligt möjligheterna för funktionella komponenter i React genom att tillåta dem att hantera tillstånd, utföra sidoeffekter och konsumera kontext på ett enklare sätt. De ger en mer enkel och effektiv metod för att skriva React-komponenter jämfört med klasskomponenter och livscykelmetoder.

export const HooksView = () => {
  return (
    <>
      <Räknare />
      <Exempel />
      {/* <Exempel2 /> */}
      <Räknare />
      <TemaKnapp />
    </>
  );
};
