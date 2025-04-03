import { Fragment } from "react"
import Card from "./components/Card"
import swPosterImg from "./assets/post.jpg"
import esbPosterImg from "./assets/post2.webp"
import rotjPosterImg from "./assets/post3.webp"

export default function App() {
  return (
    <Fragment>
     <Card title="Pôster: Star Wars (1977)" poster={swPosterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" poster={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg} />
    </Fragment>
  )
}

