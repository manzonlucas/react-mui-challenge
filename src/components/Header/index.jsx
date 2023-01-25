import UserButtons from "./userButtons";
import SearchBar from "./searchBar";
import NavBar from "./navBar";

export default function Header() {
  return (
    <>
      <header className="bg-slate-900 flex items-center justify-between text-white py-4 px-20">
        <span className="bg-slate-200 text-slate-500 px-20 py-2">Logo</span>
        <SearchBar />
        <UserButtons />
      </header>
      <NavBar />
    </>
  )
}