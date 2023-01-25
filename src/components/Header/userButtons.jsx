import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function UserButtons() {
  return (
    <section className="flex justify-around text-white py-2">
      <a href="/" className='mx-2 flex align-center space-around'>
        <PersonIcon />
        <span>Sign In</span>
      </a>

      <a href="/" className='mx-2 flex align-center space-around'>
        <ShoppingBagIcon />
        <span>Cart</span>
      </a>
    </section>
  )
}