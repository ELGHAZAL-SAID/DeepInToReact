import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

export default App;
