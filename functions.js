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