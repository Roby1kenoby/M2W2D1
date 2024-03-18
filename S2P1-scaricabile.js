//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  function maxNumber(n1,n2) {
    let result = ''
    // checking if the 2 numbers are integer
    Number.isInteger(n1) && Number.isInteger(n2) ?
        // if yes, checking which is higher
        n1 > n2 ? 
            // n1 > n2
            result = console.log(`The higher number is ${n1} \n`) 
            // n2 > n1
            : result = console.log(`The higher number is ${n2} \n`)
        // if both input aren't integers, showing error
        : result = console.log(`Inserted parameters aren't Integers! \n`)
    return result
  }

  // test cases
  console.log(`Testing maxNumber(5,4). Results: `)
  maxNumber(5,4)

  console.log(`Testing maxNumber(4,5). Results: `)
  maxNumber(4,5)
  
  console.log(`Testing maxNumber(5,'asd'). Results: `)
  maxNumber(5,'asd')

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function sizeFinder(s){
  let size = ''
  // check if s is an integer
  if(Number.isInteger(s)){
    if(s<5){
      size = 'Tiny\n'
    }
    else if(s >= 5 && s < 10){
      size = 'Small\n'
    }
    else if(s >= 10 && s < 15){
      size = 'Medium\n'
    }
    else if(s >= 15 && s < 20){
      size = 'Large\n'
    }
    else{
      size = 'Huge\n'
    }
  }
  else{
    size = 'Not recognized\n'
  }
  return console.log(size)
}


// test cases
console.log('Testing sizeFinder(3). Results: ')
sizeFinder(3)
console.log('Testing sizeFinder(7). Results: ')
sizeFinder(7)
console.log('Testing sizeFinder(12). Results: ')
sizeFinder(12)
console.log('Testing sizeFinder(18). Results: ')
sizeFinder(18)
console.log('Testing sizeFinder(20). Results: ')
sizeFinder(20)
console.log(`Testing sizeFinder('pippo'). Results: `)
sizeFinder('pippo')


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function printNumbers(){
  let i = 1
  do {
    // if i not 3 or 8, i print, otherwise i return null
    i !== 3 && i !== 8 ? console.log(i) : null
    // either way, i++
    i++
  }
  while (i<=10)
}

// test case
console.log('testing printNumbers()')
printNumbers()


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkOddEven(){
  for (let i = 0; i<=15; i++){
    i%2 === 0 ? console.log(`Testing number ${i} for oddity. It's even!`) : console.log(`Testing number ${i} for oddity. It's odd!`)
  }
} 

// test case
console.log('\ntesting checkOddEven()')
checkOddEven()

//ESERCIZI EXTRA NON OBBLIGATORI
console.log("\nTest Esercizi Extra")
/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function strangeMathTest(n1, n2){
  switch(8){
    case (n1):
    case (n2):
    case (n1+n2):
    case (n1-n2):
      console.log('Uno dei due numeri è 8, oppure la loro somma\\sottrazione è uguale a 8\n')  
      break
    default: console.log('Nessuno dei due numeri è un 8, e la loro somma\\sottrazione non è uguale a 8\n')
  }
}

// test cases
console.log('\ntesting strangeMathTest(8,3)')
strangeMathTest(8,3)
console.log('testing strangeMathTest(3,8)')
strangeMathTest(3,8)
console.log('testing strangeMathTest(2,3)')
strangeMathTest(2,3)
console.log('testing strangeMathTest(4,4)')
strangeMathTest(4,4)
console.log('testing strangeMathTest(16,8)')
strangeMathTest(16,8)


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkout(totalShoppingCart){
  return totalShoppingCart > 50 ? 
    console.log(`Congratulazioni! Hai diritto alla consegna grautita! Il tuo totale spesa è ${totalShoppingCart}€\n`) 
    : console.log(`Il totale della tua spesa, incluse le spese di spedizione (10€), è di ${totalShoppingCart + 10}€\n`) 
}

// test cases
console.log('testing checkout(45)')
checkout(45)
console.log('testing checkout(250)')
checkout(250)


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function applyDiscount(total){
  total *= 0.8
  checkout(total)
}

// test cases
console.log('testing applyDiscount(45)')
applyDiscount(45)
console.log('testing applyDiscount(250)')
applyDiscount(250)

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function genderReveal(isMale){
  return gender = isMale ? 'male' : 'female'
}

// test cases
console.log('testing genderReveal(true)')
console.log(genderReveal(true) + '\n')
console.log('testing genderReveal(false)')
console.log(genderReveal(false) + '\n')

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

function printFizzBuzz(){
  let i = 1
  do{
    switch(true){
      case (i%3 === 0 && i%5 === 0): console.log('FizzBuzz')
        break
      case (i%3 === 0): console.log('Fizz')
        break
      case (i%5 === 0): console.log('Buzz')
        break
      default: console.log(i)
    }
    i++
  }
  while(i <= 100)
}

console.log('testing printFizzBuzz')
printFizzBuzz()