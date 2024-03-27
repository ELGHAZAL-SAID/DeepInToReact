import React, { useEffect, useState } from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function PackingList() {
  const [items, setItems] = useState(initialItems);

  const storedItems = useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    return storedItems;
  }, [items]);
  setItems(storedItems);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
