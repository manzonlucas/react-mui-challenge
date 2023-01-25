import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button } from '@mui/material';



export default function UserButtons() {
  return (
    <section className="flex justify-around text-white py-2">

      <Button
        variant="text"
        startIcon={<PersonIcon />}
        sx={{ color: 'white', textTransform: 'none' }} >
        Sign In
      </Button>

      <Button
        variant="text"
        startIcon={<ShoppingBagIcon />}
        sx={{ color: 'white', textTransform: 'none' }} >
        Cart
      </Button>

    </section >
  )
}