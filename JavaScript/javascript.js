
var countDownDate = new Date("Dec 25, 2020 08:00:00").getTime();

var x = setInterval(function() {
  "use stract";
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countDown").innerHTML = days + " : " + hours + " : " + minutes + " : " +  seconds ;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "The End";
  }
}, 1000);


  