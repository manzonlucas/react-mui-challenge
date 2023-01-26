import LangAndCopyright from "./LangAndCopyright";
import Links from "./Links";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between p-20 mt-32 bg-[#E6E8E9] gap-32">
      <Links />
      <LangAndCopyright />
    </footer>
  )
}