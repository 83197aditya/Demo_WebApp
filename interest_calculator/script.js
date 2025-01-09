
document.getElementById("calculateButton").addEventListener("click", function () {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").textContent = "Please enter valid positive numbers for all fields.";
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById("result").textContent = `The calculated interest is: $${interest.toFixed(2)}`;
});
