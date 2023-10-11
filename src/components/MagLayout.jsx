export default function Hero() {
  const imageUrl = "https://source.unsplash.com/random"

  return (
    <section className="m-1">
      <nav className="hidden">
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </nav>
      <main>
        <div>
          <img className="full-width" src={imageUrl} alt="lorem" />
          <h2 className="m-t-1">Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            itaque eveniet a possimus quaerat nam, earum odio ipsum vero vitae
            saepe nihil illo consequuntur! Quas nobis dolor eos iusto soluta?
          </p>
        </div>
        <div className="m-t-1">
          <img className="full-width" src={imageUrl} alt="lorem" />
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </main>
    </section>
  )
}
