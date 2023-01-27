import ContactColumn from "./ContactColumn";

export default function Links() {
  return (
    <section className="flex justify-between">
      <article className="flex flex-col w-1/5 justify-around gap-6">
        <ContactColumn />
      </article >

      <article className="flex flex-col w-1/5">
        <ul className="flex flex-col gap-4">
          <li className="font-bold ">Our company</li>
          <li className="text-sm">About us</li>
          <li className="text-sm">FAQ</li>
          <li className="text-sm">Partnerships</li>
          <li className="text-sm">Sustainability</li>
          <li className="text-sm">Blog</li>
        </ul>
      </article >

      <article className="flex flex-col w-1/5">
        <ul className="flex flex-col gap-4">
          <li className="font-bold ">How can we help</li>
          <li className="text-sm">Place a ticket</li>
          <li className="text-sm">Track your order</li>
          <li className="text-sm">Help center</li>
        </ul>
      </article >

      <article className="flex flex-col w-1/5">
        <ul className="flex flex-col gap-4">
          <li className="font-bold ">Information</li>
          <li className="text-sm">Contact us</li>
          <li className="text-sm">Live chat</li>
          <li className="text-sm">Privacy</li>
          <li className="text-sm">Terms of use</li>
        </ul>
      </article >
    </section >
  )
}