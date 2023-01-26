import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Item() {
  return (
    <>
      <article className="flex gap-4">
        <div className='w-48 aspect-square bg-[#E6E8E9]'></div>
        <section className='w-full flex justify-between'>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Title</h3>
            <p>
              Quantity:
              <span className="underline font-bold">50</span>
            </p>

            <ul className="list-disc">
              <li className="ml-8">
                cont 1
                <span className="text-gray-500">(aclaracion)</span>
              </li>
              <li className="ml-8">
                cont 1
                <span className="text-gray-500">(aclaracion)</span>
              </li>
              <li className="ml-8">
                cont 1
                <span className="text-gray-500">(aclaracion)</span>
              </li>
            </ul>

            <p className="text-xs">
              <span>
                <EditIcon fontSize='string' />
                Edit pack
              </span>
              <span> | </span>
              <span>
                <DeleteIcon fontSize='string' />
                Remove
              </span>
            </p>
          </div>

          <div >
            <p className="font-bold text-right">$ precio</p>
            <span>Total:</span>
            <span className="font-bold">$ total por cant del item</span>
          </div>
        </section>
      </article>

      <hr />

    </>
  )
}