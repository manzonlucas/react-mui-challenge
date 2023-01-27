import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';

export default function Item({ data }) {
  const numArr = Array.from({ length: 50 }, (_, i) => i + 1);

  const [totalItemPrice, setTotalItemPrice] = useState(data.price);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setTotalItemPrice((data.price * qty));
  }, [qty])

  function handleQtyChange(e) {
    setQty(e.target.value);
  }

  return (
    <>
      <article className="flex gap-4">
        <div className='w-48 aspect-square bg-[#E6E8E9]'></div>
        <section className='w-full flex justify-between'>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              {data.name}
            </h3>

            <div className='flex'>
              <label htmlFor={`qty-id${data.id}`}>Quantity: </label>
              <select name="qty" id={`qty-id${data.id}`} onChange={handleQtyChange}>
                {numArr.map(num => {
                  return (<option value={num}>{num}</option>)
                })}
              </select>
            </div>

            {data.content ?
              <ul className="list-disc ml-6">
                {data.content.map(content => {
                  return (
                    <li>
                      <span>{content.name}</span>
                      <span className="text-gray-500 ml-1">({content.description})</span>
                    </li>
                  )
                })}
              </ul>
              : ''}

            <p className="text-xs">
              {data.content ?
                <>
                  <span>
                    <EditIcon fontSize='string' />
                    Edit pack
                  </span>
                  <span> | </span>
                </>
                : ''}

              <span>
                <DeleteIcon fontSize='string' />
                Remove
              </span>
            </p>
          </div>

          <div >
            <p className="font-bold text-right">{`$ ${data.price.toFixed(2)}`}</p>
            <span>Total:</span>
            <span className="font-bold ml-1">{`$ ${totalItemPrice.toFixed(2)}`}</span>
          </div>
        </section>
      </article>

      <hr />

    </>
  )
}