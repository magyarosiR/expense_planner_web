/* OLD CODEBASE */

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
  if (calculation < 0) {
    document.getElementById("calculated-budget").innerHTML = "- " + calculation;
  } else if (calculation == 0) {
    document.getElementById("calculated-budget").innerHTML = 0;
  } else {
    document.getElementById("calculated-budget").innerHTML = calculation;
  }
}
function addCard(whichDiv, cardName, pIdType) {
  /* VALIDATION INPUT FIELDS */

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
  var xButton = document.createElement("button"); //create x button

  h3.className += "descText"; // give it a class by adding to the list
  p.className += pIdType;
  xButton.className += "xButton";
  xButton.id += content.id;

  h3.innerHTML = contents[contents.length - 1].description;
  p.innerHTML = contents[contents.length - 1].price;

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(xButton);
  selectedColumn = p.getAttribute("class");
  if (selectedColumn === "priceTextI") {
    xButton.setAttribute("onClick", 'xonClick(this.id, "cardforincome")');
  } else if (selectedColumn === "priceTextE") {
    xButton.setAttribute("onClick", 'xonClick(this.id, "cardforexpenses")');
  } else {
    console.log("pass");
  }

  document.body.appendChild(div);

  div.className = cardName;
  valueNumber = content.id;
  div.setAttribute("value", valueNumber);
  p.setAttribute("value", contents[contents.length - 1].price);

  document.getElementsByClassName(whichDiv)[0].appendChild(div);
}

let contents = [];
let sumOfCalculatedBudget = 0;
let incomeSum = 0;
let expensesSum = 0;
function addContent() {
  var descInput = document.forms["inputForm"]["description"].value;
  var priceInput = document.forms["inputForm"]["inputValue"].value;
  if (
    (descInput == null || descInput == "",
    priceInput == null || priceInput == "")
  ) {
    alert("Please fill all input fields.");
    return false;
  } else {
    let selectValue = document.getElementById("select").value;
    if (selectValue === "+") {
      if (priceInput > 0) {
        let price = document.getElementById("inputValue").value;
        sumOfCalculatedBudget += parseInt(price);
        incomeSum += parseInt(price);
        writeToCard(
          "calculated-budget",
          sumOfCalculatedBudget,
          "income-value",
          incomeSum
        );
        addCard("incomediv", "cardforincome", "priceTextI");
      } else {
        alert("Please give a positive number or choose another option!");
      }
    } else {
      if (priceInput > 0) {
        let price = document.getElementById("inputValue").value;
        sumOfCalculatedBudget -= parseInt(price);
        expensesSum -= parseInt(price);
        writeToCard(
          "calculated-budget",
          sumOfCalculatedBudget,
          "expenses-value",
          expensesSum
        );
        addCard("expensesdiv", "cardforexpenses", "priceTextE");
      } else {
        alert(
          'If you want to add Expense card please just choose the "-" value on front of add section and add a positive value to the input filed.\n\n The system will resolve it.'
        );
      }
    }
  }
}

function xonClick(clicked_id, cardType) {
  let cardfor = document.getElementsByClassName(cardType);
  if (cardType == "cardforincome") {
    for (let i = 0; i < cardfor.length; i++) {
      let val = parseInt(cardfor[i].getAttribute("value"));
      if (clicked_id == val) {
        let removableDiv = document.getElementsByClassName(cardType);
        let clasPrice = parseInt(
          document.getElementsByClassName("priceTextI")[i].getAttribute("value")
        );

        sumOfCalculatedBudget -= parseInt(clasPrice);
        incomeSum -= parseInt(clasPrice);
        writeToCard(
          "calculated-budget",
          sumOfCalculatedBudget,
          "income-value",
          incomeSum
        );
        calculateBudet();
        removableDiv[i].remove();
      }
    }
  } else if (cardType == "cardforexpenses") {
    for (let i = 0; i < cardfor.length; i++) {
      let val = parseInt(cardfor[i].getAttribute("value"));
      if (clicked_id == val) {
        let removableDiv = document.getElementsByClassName(cardType);
        let clasPrice = parseInt(
          document.getElementsByClassName("priceTextE")[i].getAttribute("value")
        );

        sumOfCalculatedBudget += parseInt(clasPrice);
        expensesSum += parseInt(clasPrice);
        writeToCard(
          "calculated-budget",
          sumOfCalculatedBudget,
          "expenses-value",
          expensesSum
        );
        calculateBudet();
        removableDiv[i].remove();
      }
    }
  } else {
    console.log("pass");
  }
}

function writeToCard(
  calculatedBudget,
  sumOfCalculatedBudget,
  eOrIValue,
  oOrISum
) {
  document.getElementById(calculatedBudget).innerHTML = sumOfCalculatedBudget;
  document.getElementById(eOrIValue).innerHTML = "€  " + oOrISum;
  document
    .getElementById(calculatedBudget)
    .setAttribute("value", sumOfCalculatedBudget);
  document.getElementById(eOrIValue).setAttribute("value", oOrISum);
}

function loadPage() {
  updateTime();
  calculateBudet();
}

function sendMail() {
  window.open("mailto:office@expenseplanner.com");
}

window.onload = loadPage;

function register() {
  alert("asd");
}
