import React from "react";
import ReactDOM from "react-dom";
import PizzaData from "../public/data"
import "./index.css"

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
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza
            Pizzaname = "pizza Spinaci"
            engredians = "Tomato, mozarella, spinach, and ricotta cheese"
            photoName = "pizzas/spinaci.jpg"
            price = {12}
            />
        </main>
    );
}

const Footer = () => {
    const hour = new Date().getHours();
    return (
        <>
            <footer className="footer" >
                {hour}. we are currently Open!
            </footer>
        </>
    );
}


const Pizza = (props) => {
    return (
        PizzaData.map((pizza) =>
            <div className="pizza">
                <div className="pizzas" key={PizzaData.indexOf(pizza)}>
                    <div>
                        <img src={pizza.photoName} alt="" />
                    </div>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span>{pizza.price}</span>
                </div>
            </div>
        )

    //     <div className="pizzas">
    //         <img src={props.photoName} alt="" />
    //         <h3>{props.Pizzaname}</h3>
    //         <p>{props.engredians}</p>
    //         <span>{props.price}</span>
    //     </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)