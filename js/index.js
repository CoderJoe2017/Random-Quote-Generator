$(document).ready(function(){
  function getQuote(){
    
    var quotes = ["hello, world", "Hello You", "Hello Me"]
    var author = ["Joe LaPenna", "Kate LaPenna", "Meredith LaPenna"]
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
     }
  $(".btn").on("click", function(){
      getQuote();
    });
   
});