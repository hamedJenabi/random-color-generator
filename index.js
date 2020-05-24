const randomHex = require('random-hex');
const createColor = require('my-colors');
const toHex = require('colornames');
const randomColor = require('randomcolor');

//this is random value
const randomColorNull = randomHex.generate();
//this is input value

//this is the design

const colorMain = process.argv[2];
const colorVersion = process.argv[3]; // THIS is version of color like "light"
const colorName = colorVersion + colorMain;

const answer = randomColor({
  luminosity: colorVersion,
  hue: colorMain,
});
//*************** THIS ASKS USER WHICH COLOR

if (process.argv[2] === 'ask') {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question('Which color?', (color) => {
    const hexColor = toHex(color);

    const design = `
    ###############################
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
  const design = `
    ###############################
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
  //*************** THIS IS RANDOM
  const design = `  
    ###############################
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
