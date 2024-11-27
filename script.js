// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


const bike = [
  {
  name: 'mountainbike',
  weight: 11
  },
  {
    name: 'graziella',
    weight: 10
  },
  {
    name: 'atala',
    weight: 7 
  },
  {
    name: 'bianchi',
    weight: 8
  },
  {
    name: 'garelli',
    weight: 9
  }
]

let lighterbike = bike[0];

console.log(lighterbike);


for (let i = 0; i < bike.length; i++){
  const singlebike = bike[i]
  if(singlebike.weight < lighterbike.weight){
    lighterbike = singlebike;
  }

  
  
}

console.log(`La bici più leggera è ${lighterbike.name}`);

document.getElementById('bicileggera').innerHTML = `La bici più leggera è ${lighterbike.name}`;



// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squads = [
  {
    name:  'Lecce',
    punti: 0,
    falliSubiti: 0
  },
  {
    name: 'Bari',
    punti: 0,
    falliSubiti: 0
  },
  {
    name: 'Roma',
    punti: 0,
    falliSubiti: 0
  },
  {
    name: 'Juventus',
    punti: 0,
    falliSubiti: 0
  },
  {
    name: 'Inter',
    punti: 0,
    falliSubiti: 0
  }
]



function valoriArray(max, min){
  return Math.floor(Math.random(max - min + 1) + min)
}

squads.forEach(squad => {
  squad.punti = valoriArray(30, 1)
  squad.falliSubiti = valoriArray(10, 2)
}) 

const datiSquad = [];

for(let x in squads.name){
  console.log(`chiave ${chiave[chiave]}, valore:${squads[chiave]}`);
  
}




// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.