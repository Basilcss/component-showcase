export default function SplitHero() {
  const imageUrl = "https://source.unsplash.com/random"
  return (
    <section className="row">
      <img
        className="pic col-8 full-width big:col-4 vh-80"
        src={imageUrl}
        alt="lorem"
      />
      <img
        className="pic col-8 full-width big:col-4 vh-80"
        src={imageUrl}
        alt="lorem"
      />
    </section>
  )
}
