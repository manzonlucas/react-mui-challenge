export default function NavBar() {

  const navLinks = ['All products', 'Packaging', 'Drinkware', 'Apparel', 'Notebooks', 'Backpacks'];

  return (
    <nav className="py-3 px-20 bg-slate-200 text-slate-700">
      {navLinks.map(link => {
        return <a href="/" className="mr-8">{link}</a>
      })}
    </nav>
  )
}