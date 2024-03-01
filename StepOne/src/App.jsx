import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("");

  const GetAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      console.log(data.slip.advice);
      return data.slip.advice;
    } catch {
      console.log("Error while fetching API");
    }
  };

  const adviceHandler = async () => {
    const newAdvice = await GetAdvice();
    setAdvice(newAdvice);
    setCount(count + 1);
  };

  useEffect(() => {
    adviceHandler();
  }, []);

  return (
    <>
      <h1 className="advice">{advice}</h1>
      <button onClick={adviceHandler}>Get Advice</button>
      <Message c={count} />
    </>
  );
}

const Message = (props) => {
  return (
    <p>
      You have read <strong>{props.c}</strong> advice
    </p>
  );
};

export default App;
