import { Button } from "@mui/material";

export default function NavBar() {

  const navLinks = ['All products', 'Packaging', 'Drinkware', 'Apparel', 'Notebooks', 'Backpacks'];

  return (
    <nav className="py-3 px-20 bg-[#E6E8E9] text-slate-700">
      {navLinks.map((link, i) => {
        return (
          <Button
            variant="text"
            sx={{ color: '#3A4451', fontSize: 'inherit', textTransform: 'none', margin: '0 6px' }}
            key={i}
          >
            {link}
          </Button>
        )
      })}
    </nav >
  )
}