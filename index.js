const randomHex = require('random-hex');
const createColor = require('my-colors');
const toHex = require('colornames');
const randomColor = require('randomcolor');

/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
*/

//this is random value
let randomColorNull = randomHex.generate();
//this is input value

//this is the desing

const design = `###############################
###############################
###############################
######                #########
######     ${randomColor}    #########
######                #########
###############################
###############################
###############################`;

// This asks you fro color with question
/*readline.question('Which color?', (color) => {
  const print = createColor(color);
  const msg = print(design);
  console.log(msg);
  readline.close();
});
*/

let colorMain = process.argv[2];
let colorVersion = process.argv[3];

let colorName = colorVersion + colorMain;

let answer = randomColor({
  luminosity: colorVersion,
  hue: colorMain,
});

if (process.argv[2] === 'ask') {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question('Which color?', (color) => {
    let hexColor = toHex(color);

    const design = `###############################
    ###############################
    ###############################
    ######                #########
    ######     ${hexColor}    #########
    ######                #########
    ###############################
    ###############################
    ###############################`;
    const print = createColor(color);
    const msg = print(design);
    console.log(msg);
    readline.close();
  });
} else if (colorName !== 'ask') {
  const design = `###############################
    ###############################
    ###############################
    ######                #########
    ######     ${answer}    #########
    ######                #########
    ###############################
    ###############################
    ###############################`;

  const print = createColor(answer);
  const msg = print(design);
  console.log(msg);
} else {
  const design = `###############################
    ###############################
    ###############################
    ######                #########
    ######     ${randomColorNull}    #########
    ######                #########
    ###############################
    ###############################
    ###############################`;
  const print = createColor(randomColorNull);
  const msg = print(design);
  console.log(msg);
}

/*
const print = createColor(randomColor);
const msg = print(design);
console.log(msg);
*/
//const print = createColor(answer);

//const msg = print(design);
//console.log(msg);
