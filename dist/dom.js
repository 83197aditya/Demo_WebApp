"use strict";

import { calculateInterest } from "./interest_calculator/src/script.js";
// DOM-related code (executed only in the browser)
if (typeof document !== "undefined") {
  document.getElementById("calculateButton").addEventListener("click", function () {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    try {
      const interest = (0, calculateInterest)(principal, rate, time);
      document.getElementById("result").textContent = `The calculated interest is: $${interest.toFixed(2)}`;
    } catch (error) {
      document.getElementById("result").textContent = error.message;
    }
  });
}
//# sourceMappingURL=dom.js.map