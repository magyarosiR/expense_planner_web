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
    else if (calculation == 0) {
        document.getElementById('calculated-budget').innerHTML = 0;
    }
    else {
        document.getElementById('calculated-budget').innerHTML = "+ " + calculation;
    }

}


let contents = [];
function addContent() {


    let content = {
        id: Date.now(),
        description: document.getElementById('description').value,
        price: document.getElementById('value').value
    }
    let selectValue = document.getElementById("select").value;
    if (selectValue === '+') {
        contents.push(content);
        document.getElementById('inputs').reset();
        let description = content.description;
        let price = content.price;
        console.warn('added', { contents });
        let pre = document.querySelector('#descText');
        let pre2 = document.querySelector('#priceText');
        //pre.textContent = JSON.stringify(description, '\t', 2);
        //pre2.textContent = JSON.stringify(price, '\t', 2);

        localStorage.setItem('myContent', JSON.stringify(contents)); // Add list to local storage


        var div = document.createElement('div');

        //var attr = document.createAttribute("priceText");
        var h3 = document.createElement("h3"); //create the h3 tag
        var p = document.createElement("p"); //create the paragraph tag

        h3.id += 'descText'; // give it a class by adding to the list
        p.id += 'priceText';


        for (let i = 0; i < contents.length; i++) {
            h3.innerHTML = contents[i].description;
            p.innerHTML = contents[i].price;
        }
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
        var h3 = document.createElement('h3');
        var p = document.createElement('p');

        div.className = 'cardforincome';

        document.getElementsByClassName('content')[0].appendChild(div);
    }
    else {
        contents.push(content);
        document.getElementById('inputs').reset();
        let description = content.description;
        let price = content.price;
        console.warn('added', { contents });
        let pre = document.querySelector('#descText');
        let pre2 = document.querySelector('#priceText');
        //pre.textContent = JSON.stringify(description, '\t', 2);
        //pre2.textContent = JSON.stringify(price, '\t', 2);

        localStorage.setItem('myContent', JSON.stringify(contents)); // Add list to local storage


        var div = document.createElement('div');

        //var attr = document.createAttribute("priceText");
        var h3 = document.createElement("h3"); //create the h3 tag
        var p = document.createElement("p"); //create the paragraph tag

        h3.id += 'descText'; // give it a class by adding to the list
        p.id += 'priceText';


        for (let i = 0; i < contents.length; i++) {
            h3.innerHTML = contents[i].description;
            p.innerHTML = contents[i].price;
        }
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
        var h3 = document.createElement('h3');
        var p = document.createElement('p');

        div.className = 'cardforexpenses';

        document.getElementsByClassName('content')[0].appendChild(div);
    }
}


//document.addEventListener('DOMContentLoaded', () => {

//document.getElementById('addButton').addEventListener('click', addContent);
//});



function loadPage() {
    updateTime();
    calculateBudet();
}

window.onload = loadPage;
