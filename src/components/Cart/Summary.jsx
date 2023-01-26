import { Button } from "@mui/material";

export default function Summary() {
  return (
    <section className="w-1/4 flex flex-col justify-between gap-2 h-60">
      <h2 className="text-xl font-bold mr-1">Order summary</h2>

      <div className="flex justify-between text-gray-500">
        <h3>Number of items</h3>
        <span>3</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold">
        <h3>Total</h3>
        <span>$$$</span>
      </div>

      <div className="flex flex-col">
        <Button
          variant="contained"
          sx={{
            color: '', backgroundColor: '#3A4451', textTransform: 'none', "&.MuiButtonBase-root:hover": { bgcolor: "#3A4451" }, marginBottom: '10px'
          }} >
          Proceed to checkout
        </Button>

        <Button
          variant="text"
          sx={{ textTransform: 'none', color: '#3A4451', fontWeight: 'bold', border: '2px solid #3A4451' }}>
          Continue shopping
        </Button>
      </div>
    </section>
  )
}