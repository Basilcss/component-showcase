export default function Hero() {
  const imageUrl = "https://source.unsplash.com/random"

  return (
    <section style={{ backgroundColor: "#ebe7e7" }} className="row m-1 p-2">
      {dataArray.map((item, index) => (
        <div className="col-8 big:col-2" key={index}>
          <img className="pic full-width" src={imageUrl} alt={item.title} />
          <h2
            className="
             m-t-1"
          >
            {item.title}
          </h2>
          <h3 className="flex-row-alignCenter">
            <svg
              className="
            m-r-1"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
            </svg>
            {item.likes}
          </h3>
        </div>
      ))}
    </section>
  )
}

const dataArray = [
  { title: "Title", likes: 23 },
  { title: "Title", likes: 45 },
  { title: "Title", likes: 67 },
  { title: "Title", likes: 89 },
  { title: "Title", likes: 12 },
  { title: "Title", likes: 34 },
  { title: "Title", likes: 56 },
  { title: "Title", likes: 78 },
  { title: "Title", likes: 90 },
  { title: "Title", likes: 21 },
  { title: "Title", likes: 43 },
  { title: "Title", likes: 65 },
]
