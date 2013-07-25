var carousel = document.getElementById('carousel');
var margin_left = 0;
// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var start = document.getElementById('start_slide');
var stop = document.getElementById('stop_slide');




next.onclick = function(event) {
  if (margin_left === -1220) {
    margin_left = 0;
    carousel.style.marginLeft = margin_left +"px";
  } else {
  margin_left += -610;
  carousel.style.marginLeft = margin_left +"px";
  }
};

previous.onclick = function(event){
    if (margin_left === 0) {
      margin_left = -1220;
      carousel.style.marginLeft = margin_left + "px";
  } else {
    margin_left += 610;
    carousel.style.marginLeft = margin_left + "px";
  }
};


next.onmouseover = function(event){
  this.style.opacity = 1;
};

previous.onmouseover = function(event){
  this.style.opacity = 1;
};

next.onmouseout = function(event){
  this.style.opacity = 0.5;
};

previous.onmouseout = function(event){
  this.style.opacity = 0.5;
};





// click slide show with one second interval
// start.onclick = function slideShow() {
// timer = window.setInterval(next.onclick, delayMs);
// start.style.marginLeft = "-30001px";
// };

// stop.onclick = function endShow(){
// window.clearInterval(timer);
// start.style.marginLeft = "480px";
// };

scrollTimer = null;
function scrollRight() {
  if (margin_left < -2030) {
  margin_left = 600;
  margin_left -= 5;
  carousel.style.marginLeft = margin_left + "px";
  } else {
  margin_left -= 5;
  carousel.style.marginLeft = margin_left + "px";
  }
}

start_slide.onclick = function scroll() {
    scrollTimer = window.setInterval(scrollRight, 25);
    start_slide.style.marginLeft = "-1000px;";
};

stop_slide.onclick = function stopScroll() {
  window.clearInterval(scrollTimer);
  start_slide.style.marginLeft = "-1000px;"
};
carousel.style.marginLeft = 0;





// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

