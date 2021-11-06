function updateTime() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var currentDate = new Date();
    var date = monthNames[currentDate.getMonth()] + ' ' + currentDate.getDate() + ' (' + currentDate.getFullYear() + '):';


    document.getElementById('time_span').innerHTML = date;
}


function calculateBudet() {
    var income = parseInt(document.getElementById("income-value").getAttribute('value'));
    var expenses = parseInt(document.getElementById("expenses-value").getAttribute('value'));
    let calculation = income - expenses;
    console.log(calculation);
    if (calculation < 0) {
        document.getElementById('calculated-budget').innerHTML = "- " + calculation;

    }
    else {
        document.getElementById('calculated-budget').innerHTML = "+ " + calculation;
    }

}

function func() {
    alert("Click");

}

let contents = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addContent = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let content = {
        id: Date.now(),
        description: document.getElementById('description').value,
        price: document.getElementById('value').value
    }
    contents.push(content);
    document.getElementById('inputs').reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
    let description = content.description;
    let price = content.price;
    //for display purposes only
    console.warn('added', { contents });
    let pre = document.querySelector('#descText');
    let pre2 = document.querySelector('#priceText');
    pre.textContent = JSON.stringify(description, '\t', 2);
    pre2.textContent = JSON.stringify(price, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyContentList', JSON.stringify(contents));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addButton').addEventListener('click', addContent);
});