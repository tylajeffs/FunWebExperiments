//function to generate a random date between 2 other dates
function randomDate(date1, date2) {
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  var date1 = date1 || "01-01-1970";
  var date2 = date2 || new Date().toLocaleDateString();
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    var newDate = new Date(
      randomValueBetween(date2, date1)
    ).toLocaleDateString();
    document.getElementById("date").innerHTML = newDate;
    return newDate;
  } else {
    var newDate = new Date(
      randomValueBetween(date1, date2)
    ).toLocaleDateString();
    document.getElementById("date").innerHTML = newDate;
    return newDate;
  }
}

//initial start and end dates
var start;
var end;
var currentGuess;

//array to hold all guessed dates
const datesGuessed = [];

function loading() {
  // code to execute on the page load
  start = "01-01-0001";
  end = "12-12-5000";
  currentGuess = randomDate(start, end);

  console.log(currentGuess);
  console.log("we have loaded");
}

//if earlier button is clicked, update value of end and add previous guess to array
function earlierDate() {
  console.log(currentGuess);
  datesGuessed.push(currentGuess);
  end = currentGuess;
  currentGuess = randomDate(start, end);
  document.getElementById("guesses").innerHTML = datesGuessed.toString();
}

//if later button is clicked, update value of start and add previous guess to array
function laterDate() {
  datesGuessed.push(currentGuess);
  start = currentGuess;
  currentGuess = randomDate(start, end);
  document.getElementById("guesses").innerHTML = datesGuessed.toString();
  console.log(datesGuessed);
}
