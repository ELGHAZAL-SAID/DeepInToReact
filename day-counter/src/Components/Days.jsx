import { useState } from "react";

const Days = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const stepHandler = (action) => {
    if (action === "add") setStep((s) => s + 1);
    else if (action === "abstract") setStep((s) => s - 1);
  };

  const countHandler = (action) => {
    if (action === "add") setCount((s) => s + step);
    else if (action === "abstract") setCount((s) => s - step);
  };

  const dateToPrint = (e) => {
    // Get the current date
    const currentDate = new Date();

    // Add 10 days to the current date
    currentDate.setDate(currentDate.getDate() + e);

    // Format the date as "Sat Jun 26 2027"
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="day-counter">
      <div className="steps">
        <button className="plus" onClick={() => stepHandler("add")}>
          +
        </button>
        <span className="step">step: {step}</span>
        <button className="mines" onClick={() => stepHandler("abstract")}>
          -
        </button>
      </div>
      <div className="counter">
        <button className="plus" onClick={() => countHandler("add")}>
          +
        </button>
        <span className="count">count: {count}</span>
        <button className="mines" onClick={() => countHandler("abstract")}>
          -
        </button>
      </div>
      <p className="day-description">
        {count
          ? `${
              count.toString() + " dyas from to day was " + dateToPrint(count)
            }`
          : `${"today is " + dateToPrint(count)}`}
      </p>
    </div>
  );
};

export default Days;
