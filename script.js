
/*-------------------- countdown --------------------*/
var endDate = new Date("Mar 15, 2024 12:00:00").getTime();
const interval = 1000; //1 second in miliseconds

var timer = setInterval( function() {

  //calculate the remaining time
  let now = new Date().getTime();
  let timespan = endDate - now; //time between end date and now in miliseconds

  const day  = interval * 60 * 60 * 24; //miliseconds in a day
  const hour = interval * 60 * 60; //miliseconds in an hour
  const min  = interval * 60; //miliseconds in a minute

  if (timespan >= 0) {
    let days  = Math.floor( timespan / day ); //divide the timespan by day
    let hours = Math.floor( (timespan % day) / hour ); //remaining hours
    let mins  = Math.floor( (timespan % hour) / min ); //remaining minutes
    let secs  = Math.floor( (timespan % min) / interval ); //remaining seconds

    hours = ("0" + hours).slice(-2); //returns the last two chars with a leading zero if applies
    mins  = ("0" + mins).slice(-2);
    secs  = ("0" + secs).slice(-2);

    document.getElementById("timer-days").innerHTML = days;
    document.getElementById("timer-hours").innerHTML = hours;
    document.getElementById("timer-mins").innerHTML = mins;
    document.getElementById("timer-secs").innerHTML = secs;
  }
  else {
    document.getElementById("timer").innerHTML = "Countdown is over!";
  }

}, interval);
