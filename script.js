// Üçgen Şekli Oluşturma
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *

const triangle = 9;

for (let i = 1; i <= triangle; i++) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  console.log(star);
}

// 2___________________________________________
// Kare Şekli Oluşturma
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *

const square = 9;

for (let i = 1; i < square; i++) {
  let star = "";

  for (let j = 1; j < i; j++) {
    star += "* ";
  }

  for (let j = 9; j >= i; j--) {
    star += "* ";
  }

  console.log(star);
}

// 3_______________________________
// Çerçeve Şekli Oluşturma
// * * * * * * * *
// *             *
// *             *
// *             *
// *             *
// *             *
// * * * * * * * *

const col = 8;
const row = 7;

for (let i = 0; i < row; i++) {
  let star = "";

  for (let j = 0; j < col; j++) {

    if (i === 0 || i === row - 1) {
      star += "* ";
    } else {

      if (j === 0 || j === col - 1) {
        star += "* ";
      } else {
        star += "  ";
      }
    }
  }
  console.log(star);
}

//4_____________________________________________
// Piramit Şekli Oluşturma
//      *
//     ***
//    *****
//   *******
//  *********
const pyramid = 5;

for (let i = 1; i <= pyramid; i++) {
  let star = "";

  for (let j = 1; j <= pyramid - i; j++) {
    star += " ";
  }

  for (let k = 1; k <= (2 * i - 1); k++) {
    star += "*";
  }

  console.log(star);
}

// 5_______________________________________________
// Sayı Piramidi Oluşturma
//      1
//     2 3
//    4 5 6
//   7 8 9 10

const pyramidNumb = 4;
let  numb = 1;

for (let i = 1; i <= pyramidNumb; i++) {
  let star = '';

  for (let j = 1; j <= pyramidNumb - i; j++) {
    star += " ";
  }

  for (let k = 1; k <= i; k++) {
    star += numb + ' ';
    numb++;
  }

  console.log(star);
}

// 6_____________________________________
// Ters Üçgen Şekli Oluşturma
// * * * * * * * * *
//  * * * * * * * *
//  * * * * * * *
//  * * * * * *
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

const triangleRev = 9;

for (let i = triangleRev; i >= 1; i--) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// 7__________________________________________
// Karakter Piramidi Oluşturma
//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA

const pyramidLetter = 5;
let letters = "ABCDE";

for (let i = 1; i <= pyramidLetter; i++) {
  let star = "";

  for (let j = 1; j <= pyramidLetter - i; j++) {
    star += " ";
  }

  for (let x = 0; x <= i - 1; x++) {
    star += letters[x];
  }

  for (let z = i - 2; z >= 0; z--) {
    star += letters[z];
  }

  console.log(star);
}

// // 8__________________________________________
// Fibonacci Serisi Oluşturma

let number = 25;
let fibOne = 0;
let fibTwo = 1;

for (let i = 0; i < number; i++) {
  if (i === 0) {
    console.log(fibOne);
  } else if (i === 1) {
    console.log(fibTwo);
  } else {
    let fibonacci = fibOne + fibTwo;

    console.log(fibonacci);

    fibOne = fibTwo;
    fibTwo = fibonacci;

  }
}


// 9________________________________________________
// 1'den 10'a kadar olan sayılar için çarpım tablosunu oluşturun. Her bir çarpım işleminin sonucunu ekrana yazdırın.

for(let i = 1; i<= 10; i++){
  for(let j = 1; j<10; j++){
    let table = `${i} x ${j}`;

    console.log(table)
  }
  console.log('------')
}