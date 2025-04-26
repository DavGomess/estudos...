import styles from "./page.module.css"
import spaceShips from "../spaceships.json"
import Link from "next/link"

export default function Espaconaves() {

    return (
        <div className={styles.cardEspaconaves}>
            <div className={styles.containerTabelaEspaconaves}>
            <h1>Todas as Espaçonaves</h1>
                <ul className={styles.tabelaEspaconaves}>
                    {spaceShips.map((categoriaUnica) => (
                        <li key={categoriaUnica.id}>
                           <Link href={`/espaconaves/${categoriaUnica.id}`}><button className="buttons">{categoriaUnica.name}</button></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}