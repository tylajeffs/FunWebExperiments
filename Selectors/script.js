start = new Date(0, 0, 1);
end = new Date();

function randomDate(start, end) {
  date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  document.getElementById("date").innerHTML = date.toString();
}

function generateRandomDate() {
  month = Math.floor(Math.random() * 13);
  day = Math.floor(Math.random() * 355);
  year = Math.floor(Math.random() * 2025);
  document.getElementById("date").innerHTML = month + " " + day + " " + year;
}
