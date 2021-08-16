"use strict";

var document;
var setInterval;

setInterval("clock()",1000);
function clock(){
  var todayDate = new Date();
  var dateStr = todayDate.toLocaleDateString();
var timeStr = todayDate.toLocaleTimeString();

document.getElementById("Days").textContent = "dd";
document.getElementById("Hours").textContent = "hh";
document.getElementById("Minuts").textContent = "mm";
document.getElementById("Seconds").textContent = "ss";

document.getElementById("Today").innerHTML = dateStr + "<br >" + timeStr;

var randomDate = new Date("November 28 2020");
var daysleft = (randomDate-todayDate)/(1000*60*60*24);

var hoursleft = (daysleft-Math.floor(daysleft))*24;
var minutsleft = (hoursleft-Math.floor(hoursleft))*60;
var secondsleft = (minutsleft-Math.floor(minutsleft))*60;

document.getElementById("Days").textContent = Math.floor(daysleft);
document.getElementById("Hours").textContent = Math.floor(hoursleft);
document.getElementById("Minuts").textContent = Math.floor(minutsleft);
document.getElementById("Seconds").textContent = Math.floor(secondsleft);

}