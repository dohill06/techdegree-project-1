/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/* 
  Created an array of quote objects and named it quotes.
  Added an extra occupation property to some objects for extra credit.
 */


let quotes = [
  {
    quote: 'If you try and take a cat apart to see how it works, the first thing you have on your hands is a nonworking cat.',
    source: 'Douglas Adams',
    year: 2002,
    citation: 'The Salmon of Doubt',
    occupation: 'Writer'
  },
  {
    quote: 'If A is success in life, then A = x + y + z. Work is x, play is y and z is keeping your mouth shut.',
    source: 'Albert Einstein',
    year: 1929,
    citation: 'The Ultimate Quotable Einstein'
  },
  {
    quote: 'To describe externals, you become a scientist. To describe experience, you become an artist.',
    source: 'Timothy Leary',
    year: 1982,
    citation: 'Changing My Mind, Among Others'
  },
  {
    quote: 'It is better to risk sparing a guilty person than to condemn an innocent one.',
    source: 'Voltaire',
    year: 1747,
    citation: 'Zadig',
    occupation: 'Writer'
  },
  {
    quote: 'The future is already here — it\'s just not very evenly distributed.',
    source: 'William Gibson',
    year: 1993,
    citation: 'Fresh Air, NPR',
    occupation: 'Writer'
  }
];

/*
   Created the getRandomQuote function to generate a random number.
   Used the random number to return a random array index.
*/


function getRandomQuote(array) {
  i = Math.floor(Math.random() * 5);
  return array[i];
}

//Created the randomColor function to return a random rgb value.
  
function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var rgbColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  document.body.style.background = rgbColor;
}

/*
  Created the printQuote function to print a random quote to the screen.
  Added conditional logic statements for the extra properties.
  Added the randomColor function call to change colors with the quotes.
  Added the message string to the page with the provided code.
*/   
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let message = '';
  message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  if (randomQuote.occupation) {
    message += '<span class="occupation">' + ', ' + randomQuote.occupation + '</span>';
  }
  if (randomQuote.citation) {
    message += '<span class="citation">' + randomQuote.citation + '</span >';
  }   
  if (randomQuote.year) {
    message += '<span class="year">' + randomQuote.year + '</span></p >';
  } 
  randomColor();
  document.getElementById('quote-box').innerHTML = message;
}
// Used the setInterval method to call the printQuote function every 10 seconds.

setInterval(function(){printQuote()}, 10000);

// Code that calls printQuote function on button click.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


