import { useState } from "react";
import Steps from "./Conponents/Steps";


function App() {
  const [view, setView] = useState(true)


  const viewHandler = () => {
        setView(!view)
  }

  return (
    <>
      {view ? (
        <Steps />
      ) : (
        <span className="close" onClick={viewHandler()}>
          x
        </span>
      )}
    </>
  );
}

export default App;
