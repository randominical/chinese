
function timeToEvent(eventDate) {
  var now = new Date();
  var output = '';      
  var daysToEvent = Math.floor(Math.round(eventDate-now)/86400000);
  daysToEvent = (daysToEvent < 1) ? "0" + daysToEvent : daysToEvent;   
  output = daysToEvent + " дн. ";
  return output;
};

window.onload = function(){      
  var eventDate = new Date(2021,2,9);
  var span = document.getElementById('number');

  window.setInterval(function(){ 
      span.innerHTML = timeToEvent(eventDate); 
    },1000);                       
}