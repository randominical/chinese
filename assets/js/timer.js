
// Функция вычисляет время до события
function timeToEvent(eventDate)
{
    var now = new Date();
    var output = '';      
   // количество дней до события
   var daystoED = Math.floor(Math.round(eventDate-now)/86400000);
   daystoED = (daystoED < 1) ? "0"+daystoED : daystoED;
   // количество часов до события
   var hourstoED = 24 - now.getHours() - 1;
     hourstoED = (hourstoED < 10) ? "0"+hourstoED : hourstoED;
   // количество минут до события
   var minutestoED = 60 - now.getMinutes() - 1;
       minutestoED = (minutestoED < 10) ? "0"+minutestoED : minutestoED;
   // количество секунд до события
   var secondstoED = 60 - now.getSeconds() - 1;
   secondstoED = (secondstoED < 10) ? "0"+secondstoED : secondstoED;       
   //сообщение
     output = daystoED+" дн. "+hourstoED+" час. "+minutestoED+" мин. "+secondstoED+" сек.";
 return output;
}

window.onload = function(){
    // текущая дата
    var now = new Date(2020,12,14);       
    // дата предстоящего события (год, месяц, число)
    var eventDate = new Date(2021,2,9);
    var span = document.getElementById('timetoevent');
    var text = "До начала марафона осталось ";
    var div = document.getElementById('event-mess');
    // если событие еще не наступило
    if(now < eventDate){
      div.firstChild.nodeValue = text;
        window.setInterval(function(){ 
           span.innerHTML = timeToEvent(eventDate); 
         },1000);           
     }               
  }