import ItemList from "./ItemList";
import Summary from "./Summary";

export default function Cart() {
  return (
    <main className="flex py-6 px-20 gap-6">
      <ItemList />
      <Summary />
    </main>
  )
}