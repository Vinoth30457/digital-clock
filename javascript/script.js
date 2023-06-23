"use strict";

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

const init = () => {
  timeFunction();
};

let timeFunction = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let dat = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayNum = date.getDay();
  let Am_Pm = "AM";

  let day = [
    "Monday",
    "tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (h > 12) {
    h = h - 12;
    Am_Pm = "PM";
  } else if (h == 0) {
    h = 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  month = month < 10 ? "0" + month : month;
  dat = dat < 10 ? "0" + dat : dat;
  let time = ` ${h}:${m}:${s} ${Am_Pm}`;
  let todayDate = `${dat}/${month}/${year}  ${day[dayNum - 1]}`;
  timeEl.innerText = time;
  dateEl.innerText = `${todayDate}`;
  setInterval(timeFunction, 1000);
};
init();
