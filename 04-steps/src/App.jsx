import { useState } from "react";
import Steps from "./Conponents/Steps";

function App() {
  const [view, setView] = useState(true);

  const viewHandler = () => {
    setView((v) => !v);
  };

  return (
    <>
      <button className="close" onClick={viewHandler}>
        &times;
      </button>
      {view && <Steps />}
    </>
  );
}
export default App;
