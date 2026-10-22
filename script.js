
let balance = 0;
let customerName = "";
let addedAmount = 0;

function addMoney() {
    customerName = document.getElementById("name").value;
    addedAmount = Number(document.getElementById("amount").value);

    if (customerName.trim() === "" ||
        addedAmount <= 0 ||
        !Number.isFinite(addedAmount)) {
        document.getElementById("result").innerHTML =
            "Please enter a valid name and amount.";
        return;
    }

    balance = balance + addedAmount;

    document.getElementById("result").innerHTML =
        "Transaction Successful!";
}

function checkBalance() {
    if (balance === 0) {
        document.getElementById("result").innerHTML =
            "Please add an amount first.";
        return;
    }

    document.getElementById("result").innerHTML =
        "Thank you " + customerName +
        "! You added ₹" + addedAmount +
        ". Total Balance = ₹" + balance;
}
