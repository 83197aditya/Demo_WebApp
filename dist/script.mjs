
// Function to calculate simple interest
export function calculateInterest(principal, rate, time) {
  if (principal <= 0 || rate <= 0 || time <= 0) {
    throw new Error("Values must be positive numbers");
  }
  return principal * rate * time / 100;
}

// Export the function for testing
//# sourceMappingURL=script.js.map