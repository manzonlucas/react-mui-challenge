import LangAndCopyright from "./LangAndCopyright";
import Links from "./Links";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around h-72 py-6 px-20 mt-32 bg-[#E6E8E9]">
      <Links />
      <LangAndCopyright />
    </footer>
  )
}