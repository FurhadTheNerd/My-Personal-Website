<!-- mehehehehee i stole the time idea from fluffy >:3 https://github.com/MeFinity/MeFinity.github.io/blob/main/index.js-->
document.addEventListener("DOMContentLoaded", function(event) {
function currenttime() {
const date = new Date();

const settime = document.getElementById("time");

settime.textContent = date.toLocaleString('en-US', {
  timeZone: 'Asia/Amman',
  hour12: true,
  hour: '2-digit',
  minute: '2-digit'
});
}

currenttime();
});
