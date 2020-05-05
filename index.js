const randomHex = require('random-hex');
const createColor = require('my-colors');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

//this is random value
const randomColor = randomHex.generate();
//this is input value

//this is the desing

const design = `###############################
###############################
###############################
######                #########
######  ${randomColor}       #########
######                #########
###############################
###############################
###############################`;

/*readline.question('Which color?', (color) => {
  const print = createColor(color);
  const msg = print(design);
  console.log(msg);
  readline.close();
});
*/
/*
if (createColor === '') {
  const print = createColor(randomColor);
} else {
  const print = createColor(createColor);
}*/

const print = createColor(randomColor);
const msg = print(design);
console.log(msg);
