export default function Hero() {
  const imageUrl = "https://source.unsplash.com/random"

  return (
    <section className="row big:vh-100">
      <div className="col-8 big:col-4 big:flex-col-justifyCenter-alignCenter">
        <div className="big:w-60 m-1">
          <h1 className="m-b-1">Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam
            maiores ipsam, unde exercitationem error. Culpa quisquam dolorem ad,
            sunt cupiditate praesentium laudantium eum aspernatur distinctio
            ullam recusandae officia, reprehenderit, sequi et commodi earum ea
            nesciunt.
          </p>
          <button className="m-t-1">click</button>
        </div>
      </div>
      <div className="col-8 big:col-4 big:flex-col-justifyCenter-alignCenter">
        <img
          className="pic full-width big:w-80"
          id="randomImage"
          src={imageUrl}
          alt="Random Image"
        />
      </div>
    </section>
  )
}
