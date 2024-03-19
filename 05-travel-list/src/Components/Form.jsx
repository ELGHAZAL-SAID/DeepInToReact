import { useState } from "react";
import initialItems from "../../public/initialItems";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState(initialItems);

  const itemHandler = (event) => {
    event.preventDefault();
    const newItem = {
      id: items.length + 1,
      description: event.target.item.value,
      quantity: 1,
      packed: false,
    };
    console.log(event);
    setItems([...items, newItem]);
    event.target.reset();
  };
  return (
    <form action="" className="add-form" onSubmit={itemHandler}>
      <h3>What do you need for your ✈🌴🚢 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="item"
        placeholder="Add an item"
        value={description}
      />
      <input type="submit" value="Add item" />
    </form>
  );
}

export default Form;
