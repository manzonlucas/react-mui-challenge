import UserButtons from "./userButtons";
import SearchBar from "./searchBar";
import NavBar from "./navBar";

export default function Header() {
  return (
    <>
      <header className="bg-slate-900 h-20 flex items-center justify-between text-white">
        <span className="bg-slate-200 text-slate-500 px-20 py-2 mx-20">Logo</span>
        <SearchBar />
        <UserButtons />
      </header>
      <NavBar />
    </>
  )
}