let btn = document.querySelector(".tombol");
let quote = document.getElementById("quote");
let kata2 = [
    "Be confident in yourself",
    " Always be looking forward",
    "Live a life of purpose",
    "Use your time wisely",
    "Keep your head up",
    "Learn to speak well and listen better",
    "Have fun. You’ll accomplish more",
    " Give more than you take",
    "Unleash your personal momentum"
]
btn.addEventListener('click', function(){
  var randomQuote = kata2[Math.floor(Math.random()*kata2.length)];
  quote.innerHTML = randomQuote

})