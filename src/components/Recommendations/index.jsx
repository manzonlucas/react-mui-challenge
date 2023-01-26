import RecommendationItem from "./RecommendationItem";

export default function Recommendations() {
  return (
    <section className="flex flex-col py-4 px-20 gap-6">
      <h2 className="font-bold text-xl">You might also like</h2>
      <div className="flex justify-between">
        <RecommendationItem />
        <RecommendationItem />
        <RecommendationItem />
        <RecommendationItem />
      </div>
    </section>
  )
}