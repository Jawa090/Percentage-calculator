"use client";
import { useState } from "react";
import "./styles.css";

export default function PercentageDifference() {
  const [value1, setValue1] = useState("111");  // Default value for Value 1
  const [value2, setValue2] = useState("114");  // Default value for Value 2
  const [differenceResult, setDifferenceResult] = useState("");
  const [increaseResult, setIncreaseResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculateDifference = (e) => {
    e.preventDefault();
    setSteps("");  

    const val1 = parseFloat(value1);
    const val2 = parseFloat(value2);

    if (isNaN(val1) || isNaN(val2)) {
      setSteps("Please enter valid numbers.");
      return;
    }

    const difference = Math.abs(val1 - val2);
    const sum = val1 + val2;
    const percentageDifference = (difference / sum) * 100;

    
    const percentageIncrease = ((Math.abs(val1 - val2) / val1) * 100).toFixed(13);

    setDifferenceResult(percentageDifference.toFixed(10));
    setIncreaseResult(percentageIncrease);

    setSteps(
      `Difference of ${val1} and ${val2} =\n` +
      `|${val1} - ${val2}| / (${val1} + ${val2}) =\n` +
      `|${val1 - val2}| / ${sum} = ${difference} / ${sum} =\n` +
      `${difference / sum} = ${percentageDifference.toFixed(10)}%\n\n` +
      `${val2} is a ${percentageIncrease}% increase of ${val1}.\n` +
      `Percentage of increase = |${val1} – ${val2}| / ${val1} =\n` +
      `|${val1 - val2}| / ${val1} = ${difference} / ${val1} =\n` +
      `${difference / val1} = ${percentageIncrease}`
    );
  };

  const clearForm = () => {
    setValue1("111");
    setValue2("114");
    setDifferenceResult("");
    setIncreaseResult("");
    setSteps("");
  };

  return (
    <div className="calculator-container">
      <form name="calform3" onSubmit={calculateDifference}>
        <table className="panel" cellpadding="5">
          <tbody>
            <tr>
              <td>Value 1</td>
              <td>
                <input
                  type="text"
                  name="c3par1"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  className="inlongest"
                  placeholder="Enter Value 1"
                />
              </td>
            </tr>
            <tr>
              <td>Value 2</td>
              <td>
                <input
                  type="text"
                  name="c3par2"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  className="inlongest"
                  placeholder="Enter Value 2"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input name="ctype" value="3" type="hidden" />
                <button type="submit" className="btn-calculate">Calculate</button>
                <button type="button" className="btn-clear" onClick={clearForm}>Clear</button>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center" className="steps">
                <pre>{steps}</pre>
                <p>Difference: {differenceResult}%</p>
                <p>Increase: {increaseResult}%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
