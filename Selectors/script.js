function randomDate(date1, date2) {
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  var date1 = date1 || "01-01-1970";
  var date2 = date2 || new Date().toLocaleDateString();
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    document.getElementById("date").innerHTML = new Date(
      randomValueBetween(date2, date1)
    ).toLocaleDateString();
  } else {
    document.getElementById("date").innerHTML = new Date(
      randomValueBetween(date1, date2)
    ).toLocaleDateString();
  }
}
