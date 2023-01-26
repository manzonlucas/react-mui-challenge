export default function RecommendationItem() {
  return (
    <article className="flex flex-col w-1/5">
      <div className="aspect-square bg-slate-200">    </div>
      <div>
        <p className="font-bold">Unisex Short Sleeve T-Shirt</p>
        <div className="flex justify-between">
          <p className="text-sm">price</p>
          <p className="text-sm">
            <span className="text-gray-500">minimum: </span>
            $12
          </p>
        </div>
      </div>
    </article>
  )
}