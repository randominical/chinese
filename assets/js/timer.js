function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      if (t.total <= 0) {
        document.getElementById("countdown").className = "hidden";
        document.getElementById("deadline-message").className = "visible";
        clearInterval(timeinterval);
        return true;
      }
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  //var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
  var deadline = new Date(Date.parse(new Date()) + 5 * 1000); // for endless timer
  initializeClock("countdown", deadline);