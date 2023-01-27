import cart from '../../apiPlaceholders/cart.json';
import ItemList from "./ItemList";
import Summary from "./Summary";
import { useState } from "react";

export default function Cart() {

  const [items, setItems] = useState(cart);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function removeElement(id) {
    setItems(items.filter(item => {
      return item.id !== id
    }));
    handleChangeItem(id, 0);
  };

  function handleChangeItem(id, qty) {
    let accQty = 0;
    let accPrice = 0;

    items.forEach(item => {
      if (item.id === id) {
        item.qty = parseInt(qty);
      }

      accQty += item.qty;
      accPrice += (item.qty * item.price);
      setTotalItems(accQty);
      setTotalPrice(accPrice);
    });
  }

  return (
    <main className="flex py-6 px-20 gap-6">
      <ItemList items={items} totalItems={totalItems} removeElement={removeElement} handleChangeItem={handleChangeItem} />
      <Summary totalItems={totalItems} totalPrice={totalPrice.toFixed(2)} />
    </main>
  )
}