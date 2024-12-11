"use client";
import { useState } from "react";
import "./styles.css";

export default function PercentageFormPanel() {
  const [cpar1, setCpar1] = useState("100");  // Default value as per your example
  const [cpar2, setCpar2] = useState("1");    // Default value as per your example
  const [cpar3, setCpar3] = useState("");
  const [steps, setSteps] = useState("");

  const calculatePercentage = (e) => {
    e.preventDefault();
    setSteps("");  // Clear previous steps

    if (cpar1 && cpar2) {
      const value = parseFloat(cpar1);  // First value (given value)
      const total = parseFloat(cpar2);  // Second value (total)

      if (isNaN(value) || isNaN(total)) {
        setSteps("Please enter valid numbers.");
        return;
      }

      // Calculate: (value ÷ total) * 100 = percentage
      const percentage = (value / total) * 100;  // Calculate percentage
      setCpar3(percentage.toFixed(2));  // Display result in the result input field

      setSteps(
        `Step 1: Divide ${value} ÷ ${total} = ${value / total}\n` +
        `Step 2: Multiply the result by 100 = ${percentage.toFixed(2)}%`
      );
    } else {
      setSteps("Please enter valid numbers for both fields.");
    }
  };

  return (
    <div className="calculator-container">
      <form name="calform" onSubmit={calculatePercentage}>
        <table className="panel" style={{ marginTop: "5px" }} cellPadding="5">
          <tbody>
            <tr>
              <td align="center" className="verybigtext">
                <input
                  type="text"
                  name="cpar1"
                  id="cpar1"
                  value={cpar1}
                  onChange={(e) => setCpar1(e.target.value)}
                  className="innormal"
                  placeholder="Value"
                />
                is what % of
                <input
                  type="text"
                  name="cpar2"
                  id="cpar2"
                  value={cpar2}
                  onChange={(e) => setCpar2(e.target.value)}
                  className="inlong"
                  placeholder="Total"
                />
                &nbsp; = &nbsp;
                <input
                  type="text"
                  name="cpar3"
                  id="cpar3"
                  value={cpar3}
                  readOnly
                  className="inlong"
                  placeholder="Percentage"
                />
              </td>
            </tr>
            <tr>
              <td align="center">
                <button type="submit" className="btn-calculate">Calculate</button>
              </td>
            </tr>
            <tr>
              <td align="center" className="steps">
                {/* Display calculation steps and result */}
                <pre>{steps}</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
