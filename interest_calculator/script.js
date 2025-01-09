// Function to calculate simple interest
function calculateInterest(principal, rate, time) {
    if (principal <= 0 || rate <= 0 || time <= 0) {
        throw new Error("Values must be positive numbers");
    }
    return (principal * rate * time) / 100;
}
module.exports = { calculateInterest };

// Attach the event listener
document.getElementById("calculateButton").addEventListener("click", function () {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    try {
        const interest = calculateInterest(principal, rate, time);
        document.getElementById("result").textContent = `The calculated interest is: $${interest.toFixed(2)}`;
    } catch (error) {
        document.getElementById("result").textContent = error.message;
    }
});

// Export the function for testing
export default { calculateInterest };

