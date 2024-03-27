import React, { useEffect, useState } from "react"; // Import useState from React

function Item({ item }) {
  const [checked, setChecked] = useState(false);
  const [packed, setPacked] = useState(item.packed);
  const [removeItem, setRemoveItem] = useState(0);

  const handleChange = () => {
    if (!item.packed) {
      setPacked(!packed);
    } else {
      setChecked(!checked);
    }
  };

  const handleDelete = (event) => {
    setRemoveItem(event);
  };
  useEffect(() => {
    localStorage.removeItem(removeItem);
  }, [item]);
  return (
    <li>
      <input
        type="checkbox"
        id="item"
        name="item"
        checked={checked || packed}
        onChange={handleChange}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
