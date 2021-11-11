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
    document.getElementById("calculated-budget").innerHTML = "+ " + calculation;
  }
}
let valueNumber = 0;
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

  h3.id += "descText"; // give it a class by adding to the list
  p.id += pIdType;
  xButton.id += "xButton";

  h3.innerHTML = contents[contents.length - 1].description;
  p.innerHTML = contents[contents.length - 1].price;
  /*for (let i = 0; i < contents.length; i++) {
      h3.innerHTML = contents[i].description;
      p.innerHTML = contents[i].price;
    }*/
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(xButton);
  xButton.setAttribute("onClick", "xonClick()");

  document.body.appendChild(div);

  div.className = cardName;
  div.setAttribute("value", valueNumber);
  valueNumber += 1;

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
        document.getElementById("calculated-budget").innerHTML =
          sumOfCalculatedBudget;
        document.getElementById("income-value").innerHTML = "€  " + incomeSum;
        document
          .getElementById("calculated-budget")
          .setAttribute("value", sumOfCalculatedBudget);
        document
          .getElementById("income-value")
          .setAttribute("value", incomeSum);
        addCard("incomediv", "cardforincome", "priceTextI");
      } else {
        alert("Please give a positive number or choose another option!");
      }
    } else {
      if (priceInput > 0) {
        let price = document.getElementById("inputValue").value;
        sumOfCalculatedBudget -= parseInt(price);
        expensesSum -= parseInt(price);
        document.getElementById("calculated-budget").innerHTML =
          sumOfCalculatedBudget;
        document.getElementById("expenses-value").innerHTML =
          "€  " + expensesSum;
        document
          .getElementById("calculated-budget")
          .setAttribute("value", sumOfCalculatedBudget);
        document
          .getElementById("expenses-value")
          .setAttribute("value", expensesSum);
        addCard("expensesdiv", "cardforexpenses", "priceTextE");
      } else {
        alert(
          'If you want to add Expense card please just choose the "-" value on front of add section and add a positive value to the input filed.\n\n The system will resolve it.'
        );
      }
    }
  }
}
function xonClick() {
  for (let i = 0; i < contents.length; i++)
    console.log("console:" + contents[i].description);

  //alert("clicked");
}

function loadPage() {
  updateTime();
  calculateBudet();
}

function sendMail() {
  window.open("mailto:office@expenseplanner.com");
}

window.onload = loadPage;
