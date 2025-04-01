const { createElement} = React

const appDiv = document.getElementById("app")
const root = ReactDOM.createRoot(appDiv)


const h1 = createElement("h1", {}, "Olá, mundo!")
const p = createElement("p", {}, "Estamos usando o React!")
const main = createElement("main", {}, h1, p)

root.render(main)