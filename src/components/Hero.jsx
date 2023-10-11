import styled from "styled-components"

export default function Hero() {
  const imageUrl = "https://source.unsplash.com/random"

  return (
    <Container>
      <div
        className="c-hero vh-100 flex-row-justifyCenter-alignCenter"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="c-content">
          <h1 className="m-b-2">Lorem ipsum dolor sit.</h1>
          <button>Click</button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.section`
  .c-hero {
    background-size: cover;
    background-position: center;
    .c-content {
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(1px);
      padding: 1rem;
      border-radius: 0.5rem;
      h1 {
        color: white;
      }
    }
  }
`
