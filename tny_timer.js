"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Kevin Ramirez
   Date:   1-9-20

*/

function showClock(){
   var thisDay= Date("May 19,2018 9:31:27");
   var localDate= thisDay.toLocaleDateString();

   var localTime= thisDay.toLocaleTimeString();

   document.getElementById("currentTime").innerHTML= "<span>"+localDate+"</span><span>"+localTime+"</span>";
   var j4Date= nextJuly4(thisDay);
   
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
