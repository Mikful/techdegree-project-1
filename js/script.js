/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {quote: 'In ancient times having power meant having access to data. Today having power means knowing what to ignore.', source: 'Yuval Noah Harari', citation: 'Homo Deus' },
  {quote: 'However beautiful a song may be, it is just a tune to those who do not understand its meaning.', source: 'Milarepa'},
  {quote: 'Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.', source: 'Viktor Frankl'},
  {quote: 'After silence, that which comes nearest to expressing the inexpressible is music.', source: 'Aldous Huxley',  citation: 'Music at Night and Other Essays' },
  {quote: 'Anyone who has the power to make you believe absurdities has the power to make you commit injustices.', source: 'Voltaire'},
  {quote: 'There is no right and wrong, but right is right and wrong is wrong.', source: 'Suzuki Roshi'},
  {quote: "He who binds to himself a Joy, Does the winged life destroy; He who kisses the Joy as it flies,Lives in Eternity's sunrise.", source: 'William Blake', citation: 'Eternity'},
  {quote: 'To learn how to die is to learn how to live.', source: 'Sogyal Rinpoche', citation: 'The Tibetan Book of Living and Dying'},
  {quote: 'In the thick of the forest is where you will find your freedom.', source: 'Buddha'},
  {quote: 'The real voyage of discovery consists not in seeing new landscapes but in having new eyes.', source: 'Marcel Proust'},
  {quote: 'As the wheel follows the ox who draws the cart, speak or act with a clear mind and happiness will follow you.', source: 'Buddha'},
  {quote: "Fear is the cheapest room in the house. I'd rather see you in better living conditions.", source: 'Hafiz'},
  {quote: 'Construction and destruction alike satisfy the will to power, but construction is more difficult as a rule, and therefore gives more satisfaction to the person who can achieve it.', source: 'Bertrand Russell'},
  {quote: 'If you think something is ugly, look harder. Ugliness is just a failure of seeing.', source: 'Matt Haig', citation: 'The Humans'},
  {quote: 'Happy the man, and happy he alone, He who can call today his own: He who, secure within, can say: "Tomorrow, do thy worst, for I have lived today."', source: 'Horace', year: '30 B.C.'},
  {quote: 'Questions you cannot answer are usually far better for you than questions you cannot question.', source: 'Yuval Noah Harai', citation: '21 Lessons For The 21st Century'},
  {quote: "As a bee takes the essence of a flower and pollen without destroying it's beauty or perfume, so the wise wander freely in this life, carrying only blessings.", source: 'Buddha'},
  {quote: 'I know that most men, including those at ease with problems of the greatest complexity, can seldom accept even the simplest and most obvious truth if it be such as would oblige them to admit the falsity of conclusions which they have delighted in explaining to colleagues, which they have proudly taught to others, and which they have woven, thread by thread, into the fabric of their lives.', source: 'Leo Tolstoy'},
  {quote: "Anger - with it's poisoned source and it's honeyed tip.", source: 'Buddha'},
  {quote: 'The mere fact of thinking that a good may be acquired or an evil avoided is sufficient to produce the desire for this to come to pass. But when, over and above this, we consider whether our desire is likely to be satisfied or not, the idea that it is likely arouses hope in us, and the idea that it is unlikely arouses fear, of which one variety is jealousy.', source: 'Descartes', citation: 'The Passions of the Soul'}
];
console.log(quotes);


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Call the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  randomNum = Math.floor((Math.random() * quotes.length) + 1);
  randomQuote = quotes[randomNum];
  return randomQuote;
};




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

// Print
// This uses a node to dynamically update the HTML within the page with the targeted id */
function print(message) {
  var outputDiv = document.getElementById('quote-box'); /* Look at html and locate id 'quote-box and change dynamically */
  outputDiv.innerHTML = message; /* change HTML within the targetd id*/
}

function  printQuote() {
  randomQuote = getRandomQuote();
  HTML = '<p class="quote">' + randomQuote.quote + '</p>' +
  '<p class="source">' + randomQuote.source ;
  if (randomQuote.hasOwnProperty('citation')) {
    HTML +='<span class="citation">' + randomQuote.citation + '</span>'
  };
  if (randomQuote.hasOwnProperty('year')) {
    HTML += '<span class="year">' + randomQuote.year + '</span>' 
  };
  HTML+= '</p>';
  print(HTML);
};



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.