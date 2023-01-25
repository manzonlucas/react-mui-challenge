import ItemList from "./ItemList";
import Summary from "./Summary";

export default function Cart() {
  return (
    <main className="flex py-4 px-20">
      <ItemList />
      <Summary />
    </main>
  )
}