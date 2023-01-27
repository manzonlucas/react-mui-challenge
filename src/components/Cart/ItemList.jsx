import Item from "./Item";
import cart from '../../apiPlaceholders/cart.json';

export default function ItemList() {
  return (
    <section className="w-3/4 flex flex-col gap-6">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-1">Your cart</h2>
        <span>(3)</span>
      </div>

      {cart.map(data => {
        return <Item data={data} key={data.id} />
      })}
    </section>
  )
}