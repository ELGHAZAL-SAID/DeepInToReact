import { useState } from "react";
import initialItems from "../../public/initialItems";

function Item({ item }) {
  const [checked, setChecked] = useState(false);
  const [packed, setPacked] = useState(false);
  const handelChange = () => {
    if (packed === true) {
      setPacked(false);
    } else {
      setChecked(!checked);
      setPacked(true);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={handelChange} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
