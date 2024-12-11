"use client";
import { useState } from "react";
import "./styles.css";

export default function PercentageForm() {
  const [cpar1, setCpar1] = useState("");
  const [cpar2, setCpar2] = useState("");
  const [cpar3, setCpar3] = useState("");
  const [steps, setSteps] = useState("");

  const calculatePercentage = (e) => {
    e.preventDefault();
    setSteps(""); 
    if (cpar1 && cpar2) {
      const value = parseFloat(cpar1);
      const total = parseFloat(cpar2);

      if (isNaN(value) || isNaN(total)) {
        setSteps("Please enter valid numbers.");
        return;
      }

      const result = ((value / total) * 100).toFixed(2);
      setCpar3(result);

      setSteps(
        `Step 1: Divide ${cpar1} by ${cpar2} (Value ÷ Total)\n` +
        `Step 2: Multiply the result by 100 to get the percentage\n` +
        `Final Result: ${result}%`
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
                What is
                <input
                  type="text"
                  name="cpar1"
                  id="cpar1"
                  value={cpar1}
                  onChange={(e) => setCpar1(e.target.value)}
                  className="inlong inpct"
                  placeholder="Value %"
                />
                of
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
                  placeholder="Result"
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
              
                <pre>{steps}</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
