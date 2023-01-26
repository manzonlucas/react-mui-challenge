import ItemList from "./ItemList";
import Summary from "./Summary";

export default function Cart() {
  return (
    <main className="flex py-4 px-20 gap-4">
      <ItemList />
      <Summary />
    </main>
  )
}