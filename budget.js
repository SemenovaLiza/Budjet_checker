document.getElementById("calculate").onclick = Calculate;
document.getElementById("housing-expense").onmouseover = function() {
    document.getElementById("expense-description").innerHTML = "Housing: Mortgage or rent payments";
}
document.getElementById("housing-expense").onmouseout = function() {
    ClearDescription();
}
document.getElementById("food-expense").onmouseover = function() {
    document.getElementById("expense-description").innerHTML = "Food: Grocery and dining out";
}
document.getElementById("housing-expense").onmouseout = function() {
    ClearDescription();
}
document.getElementById("transportation-expense").onmouseover = function() {
    document.getElementById("expense-description").innerHTML = "Transportation: Vehicle maintenance and fuel";
}
document.getElementById("housing-expense").onmouseout = function() {
    ClearDescription();
}
document.getElementById("utilities-expense").onmouseover = function() {
    document.getElementById("expense-description").innerHTML = "Utilities: Electricity, water, etc.";
}
document.getElementById("housing-expense").onmouseout = function() {
    ClearDescription();
}
document.getElementById("insurance-expense").onmouseover = function() {
    document.getElementById("expense-description").innerHTML = "Insurance: Health, car, home insurance";
}
document.getElementById("housing-expense").onmouseout = function() {
    ClearDescription();
}


function Display(value) {
    if (value >= 0) {
        document.getElementById("budget-message").innerHTML = "You are under budget by $" + value + ". Great job!";
    } else {
        document.getElementById("budget-message").innerHTML = "You are over budget by -$" + value * -1 + ". Time to reassess your expenses.";
    }
}

function ClearDescription() {
    document.getElementById("expense-description").innerHTML = "";
}

function Calculate() {
    var netPay = parseFloat(document.getElementById("income").value) || 0;
    var housung = parseFloat(document.getElementById("housing").value) || 0;
    var food = parseFloat(document.getElementById("food").value) || 0;
    var trans = parseFloat(document.getElementById("transportation").value) || 0;
    var util = parseFloat(document.getElementById("utilities").value) || 0;
    var insure = parseFloat(document.getElementById("insurance").value) || 0;
    var expenses = netPay - housung - food - trans - util - insure;
    Display(expenses);
}