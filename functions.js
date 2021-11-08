function updateTime() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var currentDate = new Date();
  var date =
    monthNames[currentDate.getMonth()] +
    " " +
    currentDate.getDate() +
    " (" +
    currentDate.getFullYear() +
    "):";

  document.getElementById("time_span").innerHTML = date;
}

function calculateBudet() {
  var income = parseInt(
    document.getElementById("income-value").getAttribute("value")
  );

  var expenses = parseInt(
    document.getElementById("expenses-value").getAttribute("value")
  );
  let calculation = income - expenses;
  console.log(calculation);
  if (calculation < 0) {
    document.getElementById("calculated-budget").innerHTML = "- " + calculation;
  } else if (calculation == 0) {
    document.getElementById("calculated-budget").innerHTML = 0;
  } else {
    document.getElementById("calculated-budget").innerHTML = "+ " + calculation;
  }
}

function addCard(whichDiv, cardName, pIdType) {
  let content = {
    id: Date.now(),
    description: document.getElementById("description").value,
    price: document.getElementById("inputValue").value,
  };

  contents.push(content);
  document.getElementById("inputs").reset();

  console.warn("added", { contents });

  localStorage.setItem("myContent", JSON.stringify(contents)); // Add list to local storage

  var div = document.createElement("div");

  var h3 = document.createElement("h3"); //create the h3 tag
  var p = document.createElement("p"); //create the paragraph tag

  h3.id += "descText"; // give it a class by adding to the list
  p.id += pIdType;

  for (let i = 0; i < contents.length; i++) {
    h3.innerHTML = contents[i].description;
    p.innerHTML = contents[i].price;
  }
  div.appendChild(h3);
  div.appendChild(p);
  document.body.appendChild(div);
  var h3 = document.createElement("h3");
  var p = document.createElement("p");

  div.className = cardName;

  document.getElementsByClassName(whichDiv)[0].appendChild(div);
}

let contents = [];
let sumOfCalculatedBudget = 0;
let incomeSum = 0;
let expensesSum = 0;
function addContent() {
  let selectValue = document.getElementById("select").value;
  if (selectValue === "+") {
    let price = document.getElementById("inputValue").value;
    sumOfCalculatedBudget += parseInt(price);
    incomeSum += parseInt(price);
    document.getElementById("calculated-budget").innerHTML =
      sumOfCalculatedBudget;
    document.getElementById("income-value").innerHTML = "€  " + incomeSum;
    document
      .getElementById("calculated-budget")
      .setAttribute("value", sumOfCalculatedBudget);
    addCard("incomediv", "cardforincome", "priceTextI");
  } else {
    let price = document.getElementById("inputValue").value;
    sumOfCalculatedBudget -= parseInt(price);
    expensesSum -= parseInt(price);
    document.getElementById("calculated-budget").innerHTML =
      sumOfCalculatedBudget;
    document.getElementById("expenses-value").innerHTML = "€  " + expensesSum;
    document
      .getElementById("calculated-budget")
      .setAttribute("value", sumOfCalculatedBudget);
    addCard("expensesdiv", "cardforexpenses", "priceTextE");
  }
}

function loadPage() {
  updateTime();
  calculateBudet();
}

function sendMail() {
  window.open("mailto:office@expenseplanner.com");
}

window.onload = loadPage;
