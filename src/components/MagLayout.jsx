export default function Hero() {
  const imageUrl = "https://source.unsplash.com/random"

  return (
    <div className="m-1 big:row">
      <div className="big:col-5">
        <img className="pic full-width big:h-60" src={imageUrl} alt="lorem" />
        <h2 className="m-t-1">Lorem, ipsum dolor.</h2>
        <p className="m-b-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi itaque
          eveniet a possimus quaerat nam, earum odio ipsum vero vitae saepe
          nihil illo consequuntur! Quas nobis dolor eos iusto soluta?
        </p>
      </div>
      <div className="big:col-3">
        <div>
          <img className="pic full-width" src={imageUrl} alt="lorem" />
          <h2>Lorem, ipsum dolor.</h2>
          <p className="m-b-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <img
            className="pic full-width big:h-20"
            src={imageUrl}
            alt="lorem"
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p className="m-b-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  )
}
