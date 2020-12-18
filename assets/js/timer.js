var countDownDate = new Date("Feb 9, 2021 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.getElementById("number").innerHTML = days + " дн. " + hours + " ч. ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("number").innerHTML = "марафон идёт";
  }
}, 1000);