import cart from '../../apiPlaceholders/cart.json';
import ItemList from "./ItemList";
import Summary from "./Summary";
import { useState } from "react";

export default function Cart() {

  const [items, setItems] = useState(cart);
  const [totalItems, setTotalItems] = useState(0);

  function removeElement(id) {
    setItems(items.filter(item => {
      return item.id !== id
    }));
  };

  function handleChangeItem(id, qty) {
    let accQty = 0;

    items.forEach(item => {
      if (item.id === id) {
        item.qty = parseInt(qty);
      }

      accQty += item.qty;
      setTotalItems(accQty);
    });
  }

  return (
    <main className="flex py-6 px-20 gap-6">
      <ItemList items={items} totalItems={totalItems} removeElement={removeElement} handleChangeItem={handleChangeItem} />
      <Summary />
    </main>
  )
}