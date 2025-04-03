import { calculateInterest } from './script.js';
// DOM-related code (executed only in the browser)
if (typeof document !== "undefined") {
  document.getElementById("calculateButton").addEventListener("click", function () {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);
    try {
      var interest = calculateInterest(principal, rate, time);
      document.getElementById("result").textContent = "The calculated interest is: $".concat(interest.toFixed(2));
    } catch (error) {
      document.getElementById("result").textContent = error.message;
    }
  });
}
//# sourceMappingURL=dom.js.map