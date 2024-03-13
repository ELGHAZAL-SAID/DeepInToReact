import React from "react";
import ReactDOM from "react-dom/client";
import PizzaData from "../public/data"
import "./index.css"
import pizzaData from "../public/data";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const Header = () => {
    return (
        <header className="header" >
            <h1>
                Fast React Pizza CO.
            </h1>
        </header>
    )
}

const Menu = () => {
    const pizzas = pizzaData;
    return (
      <main className="menu">
        <h2>Our Menu</h2>
        {pizzas.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>

            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later :).</p>
        )}
      </main>
    );
}

const Footer = () => {
    const hour = new Date().getHours();
    const isOpen = hour >= 9 && hour <= 23;
    const openHour = 9
    const closeHour = "00"
    return (
        <>
            <footer className="footer" >
                {isOpen ? (
                    <Order closeHour={closeHour}/>
                ) : <p>We are closed for the moment, we will be open at 0{openHour}:00</p>}
            </footer >
        </>
    );
}

const Order = (props) => {
    return (
        <div className="order">
            <p>
                we're open until {props.closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    )
}


const Pizza = ({pizzaObj}) => {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? " sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt="" />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SoldOut" : pizzaObj.price}</span>
            </div>
        </li>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)