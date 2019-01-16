/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

// Added array with quote objects 
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



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
// Created the getRandomQuote function to generate a random #/index

function getRandomQuote(array) {
  i = Math.floor(Math.random() * 5);
  return array[i];
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var rgbColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  document.body.style.background = rgbColor;
}
// Created the printQuote function to print a random quote to the screen
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

setInterval(function(){printQuote()}, 10000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.