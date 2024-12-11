"use client";
import { useState } from "react";
import "./styles.css";

export default function PercentageIncreaseDecrease() {
  const [value, setValue] = useState("");  // Value input
  const [percentage, setPercentage] = useState("");  // Percentage input
  const [result, setResult] = useState("");  // Result after calculation
  const [steps, setSteps] = useState("");  // Calculation steps
  const [type, setType] = useState("increase");  // Default to "increase"

  const calculateResult = (e) => {
    e.preventDefault();
    setSteps("");  // Clear previous steps

    const val = parseFloat(value);
    const percent = parseFloat(percentage) / 100;  // Convert percentage to decimal

    if (isNaN(val) || isNaN(percent)) {
      setSteps("Please enter valid numbers.");
      return;
    }

    let calculatedResult;
    let operationText = "increase";

    // Perform the calculation based on selected type
    if (type === "decrease") {
      calculatedResult = val * (1 - percent);  // Decrease calculation
      operationText = "decrease";
    } else {
      calculatedResult = val * (1 + percent);  // Increase calculation
    }

    setResult(calculatedResult.toFixed(2));  // Display the result

    // Set detailed calculation steps
    setSteps(
      `${val} ${operationText} ${percentage}% =\n` +
      `${val} × (1 + ${percentage}%) =\n` +
      `${val} × (1 + ${percent}) = ${calculatedResult.toFixed(2)}`
    );
  };

  const clearForm = () => {
    setValue("");
    setPercentage("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="calculator-container">
      <form name="calform2" onSubmit={calculateResult}>
        <table className="panel" cellpadding="5">
          <tbody>
            <tr>
              <td className="verybigtext">
                <input
                  type="text"
                  name="c2par1"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="inlong"
                  placeholder="Enter Value"
                />
                <select
                  name="c2type"
                  className="bigtext"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="increase">Increase</option>
                  <option value="decrease">Decrease</option>
                </select>
                <input
                  type="text"
                  name="c2par2"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className="inlong inpct"
                  placeholder="%Enter Percentage"
                />
                =
                <input
                  type="text"
                  name="c2par3"
                  value={result}
                  className="inlong"
                  readOnly
                  placeholder="Result"
                />
              </td>
            </tr>
            <tr>
              <td align="center">
                <input name="ctype" value="2" type="hidden" />
                <button type="submit" className="btn-calculate">Calculate</button>
                <button type="button" className="btn-clear" onClick={clearForm}>Clear</button>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center" className="steps">
                <pre>{steps}</pre>
                <p>Result: {result}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
