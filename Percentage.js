"use client";
import { useState } from "react";
import "./styles.css";

export default function PercentageForm23() {
  const [cpar1, setCpar1] = useState("111"); // Default value as per your example
  const [cpar2, setCpar2] = useState("1");   // Default value as per your example
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculatePercentage = (e) => {
    e.preventDefault();
    setSteps("");  // Clear previous steps

    if (cpar1 && cpar2) {
      const value = parseFloat(cpar1);  // First value (percentage)
      const total = parseFloat(cpar2);      // Second value (total)

      if (isNaN(value) || isNaN(total)) {
        setSteps("Please enter valid numbers.");
        return;
      }

      // Calculate: value ÷ (percentage) = result
      const result = value / (total / 100);  // Convert total to percentage
      setResult(result.toFixed(2));  // Display result in the result input field

      setSteps(
        `Step 1: Divide ${value} ÷ (${total}% ) = ${result.toFixed(2)}`
      );
    } else {
      setSteps("Please enter valid numbers for both fields.");
    }
  };

  return (
    <div className="calculator-container">
      <form name="calform" onSubmit={calculatePercentage}>
        <table className="panel" cellPadding="5">
          <tbody>
            <tr>
              <td align="center" className="verybigtext">
                <input
                  type="text"
                  name="c23par1"
                  id="c23par1"
                  value={cpar1}
                  onChange={(e) => setCpar1(e.target.value)}
                  className="inlong"
                  placeholder="Value"
                />
                is
                <input
                  type="text"
                  name="c23par2"
                  id="c23par2"
                  value={cpar2}
                  onChange={(e) => setCpar2(e.target.value)}
                  className="inlong inpct"
                  placeholder="Percentage %"
                />{" "}
                of what
              </td>
            </tr>
            <tr>
              <td align="center">
                <button type="submit" className="btn-calculate">Calculate</button>
              </td>
            </tr>
            <tr>
              <td align="center" className="steps">
               
                <pre>{steps}</pre>
                <p>Result: {result} </p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
