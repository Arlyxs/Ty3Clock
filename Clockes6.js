// Use const and let instead of var
const clock = document.getElementById("clock");

// Use arrow functions instead of function expressions
const updateClock = () => {
  // Use template literals instead of string concatenation
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  // Use ternary operators instead of if statements
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  clock.innerHTML = `${hours}:${minutes}:${seconds}<br>${day}/${month}/${year}`;
};
setInterval(updateClock, 1000);
