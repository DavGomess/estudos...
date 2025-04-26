import styles from "./page.module.css"
import spaceShips from "../spaceships.json"
import Link from "next/link"

export default function Categorias() {

    const categoriasUnicas = spaceShips.filter((categoriaUnica, index, self) =>
        index === self.findIndex(p => p.category === categoriaUnica.category)
    )
    return (
        <div className={styles.cardCategorias}>
            <div className={styles.containerTabelaCategoria}>
            <h1>Categorias</h1>
                <ul className={styles.tabelaDeCategorias}>
                    {categoriasUnicas.map((categoriaUnica) => (
                        <li key={categoriaUnica.id}>
                            <Link href={`/categorias/${categoriaUnica.category}`}><button className="buttons">{categoriaUnica.category}</button></Link>
                           
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}