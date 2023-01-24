import UserButtons from "./userButtons";
import NavBar from "./navBar";

export default function Header() {
  return (
    <>
      <header className="bg-slate-900 h-20 flex items-center justify-around text-white">
        <span className="bg-slate-200 text-slate-500 px-20 py-2">Logo</span>
        <input type="text" placeholder="search...." />
        <UserButtons />
      </header>
      <NavBar />
    </>
  )
}