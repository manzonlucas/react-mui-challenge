import Item from "./Item";
import cart from '../../apiPlaceholders/cart.json';
import { useState } from "react";

export default function ItemList() {

  const [items, setItems] = useState(cart);

  function removeElement(id) {
    setItems(items.filter(item => {
      return item.id !== id
    }));
  };

  return (
    <section className="w-3/4 flex flex-col gap-6">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-1">Your cart</h2>
        <span>cantidad total</span>
      </div>

      {items.map(data => {
        return <Item item={data} key={data.id} removeElement={removeElement} />
      })}
    </section>
  )
}