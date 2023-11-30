let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
[
  'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe',
'“A room without books is like a body without a soul.”',
'Be the change that you wish to see in the world.',
'In three words I can sum up everything Ive learned about life: it goes on',
'If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.',
'If you tell the truth, you dont have to remember anything.',
'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
'To live is the rarest thing in the world. Most people exist, that is all.',
'Always forgive your enemies; nothing annoys them so much.',
'Live as if you were to die tomorrow. Learn as if you were to live forever.',
'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
'Insanity is doing the same thing, over and over again, but expecting different results.',
];
btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})