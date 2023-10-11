export default function Hero() {
  const imageUrl = "https://source.unsplash.com/random"

  return (
    <div
      className="pic vh-100 flex-row-justifyCenter-alignCenter"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="c-content">
        <h1 className="m-b-2">Lorem ipsum dolor sit.</h1>
        <button>Click</button>
      </div>
    </div>
  )
}
