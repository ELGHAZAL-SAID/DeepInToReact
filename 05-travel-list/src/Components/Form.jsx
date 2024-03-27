import React, { useEffect, useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState(initialItems);

  const DescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const quantityHandler = (e) => {
    setQuantity(Number(e.target.value));
  };

  const itemHandler = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItem = {
      id: items.length + 1,
      description: description,
      quantity: parseInt(quantity),
      packed: false,
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);

    setDescription("");
    setQuantity(1);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <form action="" className="add-form" onSubmit={itemHandler}>
      <h3>What do you need for your ✈🌴🚢 trip?</h3>
      <select
        id="quantity"
        name="quantity"
        value={quantity}
        onChange={quantityHandler}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map(
          (value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ),
        )}
      </select>
      <input
        type="text"
        name="item"
        id="item"
        placeholder="Add an item"
        value={description}
        onChange={DescriptionHandler}
      />
      <input type="submit" id="submit" value="Add item" />
    </form>
  );
}

export default Form;
