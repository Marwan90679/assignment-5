// ?time and date

let date= new Date();
let curDate = date.toLocaleDateString();
  document.getElementById('date').innerText =curDate;

let day = new Date();
const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today =weeks[day.getDay()]
  document.getElementById('day').innerText =today;
