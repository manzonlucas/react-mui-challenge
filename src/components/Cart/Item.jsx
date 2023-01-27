import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';

export default function Item({ item, removeElement, handleChangeItem }) {

  const numArray = [];
  for (let i = 0; i <= 50; i++) {
    numArray.push(i);
  }

  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    setTotalItemPrice(item.price * qty);
    handleChangeItem(item.id, qty);
  }, [qty])

  function handleQtyChange(e) {
    setQty(e.target.value);
  }

  function onClickRemove() {
    removeElement(item.id);
  }

  return (
    <>
      <article className="flex gap-4">
        <div className='w-48 aspect-square bg-[#E6E8E9]'></div>
        <section className='w-full flex justify-between'>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              {item.name}
            </h3>

            <div className='flex'>
              <label htmlFor={`qty-id${item.id}`}>Quantity: </label>
              <select name="qty" id={`qty-id${item.id}`} onChange={handleQtyChange}>
                {numArray.map((num, i) => {
                  return (<option value={num} key={i}>{num}</option>)
                })}
              </select>
            </div>

            {item.content ?
              <ul className="list-disc ml-6">
                {item.content.map((content, i) => {
                  return (
                    <li key={i}>
                      <span>{content.name}</span>
                      <span className="text-gray-500 ml-1">({content.description})</span>
                    </li>
                  )
                })}
              </ul>
              : ''}

            <p className="text-xs">
              {item.content ?
                <>
                  <span>
                    <EditIcon fontSize='string' />
                    Edit pack
                  </span>
                  <span> | </span>
                </>
                : ''}

              <span onClick={onClickRemove} className='cursor-pointer'>
                <DeleteIcon fontSize='string' />
                Remove
              </span>
            </p>
          </div>

          <div >
            <p className="font-bold text-right">{`$ ${item.price.toFixed(2)}`}</p>
            <span>Total:</span>
            <span className="font-bold ml-1">{`$ ${totalItemPrice.toFixed(2)}`}</span>
          </div>
        </section>
      </article>

      <hr />

    </>
  )
}