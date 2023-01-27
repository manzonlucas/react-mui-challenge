import Item from "./Item";

export default function ItemList({ items, totalItems, removeElement, handleChangeItem }) {

  return (
    <section className="w-3/4 flex flex-col gap-6">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-1">Your cart</h2>
        <span>{`(${totalItems})`}</span>
      </div>

      {items.map(data => {
        return <Item item={data} key={data.id} removeElement={removeElement} handleChangeItem={handleChangeItem} />
      })}
    </section>
  )
}