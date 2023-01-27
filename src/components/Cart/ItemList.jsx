import Item from "./Item";
import cart from '../../apiPlaceholders/cart.json';
import { useState } from "react";

export default function ItemList() {

  const [items, setItems] = useState(cart);
  const [totalQty, setTotalQty] = useState(0);

  function removeElement(id) {
    setItems(items.filter(item => {
      return item.id !== id
    }));
  };

  async function getQty(qty) {
    // setTotalQty(totalQty + parseFloat(qty))
    await setTotalQty(totalQty + parseFloat(qty));

  }

  return (
    <section className="w-3/4 flex flex-col gap-6">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-1">Your cart</h2>
        <span>{`(${totalQty})`}</span>
      </div>

      {items.map(data => {
        return <Item item={data} key={data.id} removeElement={removeElement} getQty={getQty} />
      })}
    </section>
  )
}