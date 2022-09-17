// Set the date we're counting down to
var countDownDate = new Date("Oct 10, 2022 09:00:00 +3").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  getTime();
}, 1000);

function getTime() {
      // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = addLeadingZeros(days,2);
  document.getElementById("hours").innerHTML = addLeadingZeros(hours,2);
  document.getElementById("minutes").innerHTML = addLeadingZeros(minutes,2);
  document.getElementById("seconds").innerHTML = addLeadingZeros(seconds,2);
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }


  function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        document.querySelector('.navbar').classList.add('bg-dark');
    }
    else {
        document.querySelector('.navbar').classList.remove('bg-dark');
    }
   

  }
  window.onscroll = function() {scrollFunction()};
