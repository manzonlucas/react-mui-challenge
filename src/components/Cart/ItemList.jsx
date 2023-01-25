import Item from "./Item";

export default function ItemList() {
  return (
    <section className="w-3/4">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-1">Your cart</h2>
        <span>(3)</span>
      </div>

      <div>
        <Item />
      </div>
    </section>
  )
}