'use client'

import styles from "./page.module.css"
import spaceShips from "@/app/spaceships.json"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function EspaconavePorCategoria() {

    const params = useParams()
    const categoria = params.EspaconavePorCategoria as string

    const espaconavesfiltradas = spaceShips.filter((nave) => nave.category === categoria)

    return (
        <div className={styles.cardItensCategoria}>
            <div className={styles.containerTabelaItensCategoria}>
                <h1>{categoria}</h1>
                <ul className={styles.tabelaDeItensCategorias}>
                    {espaconavesfiltradas.map((nave) => (
                        <li key={nave.id}>
                            <Link href={`/categorias/${categoria}/${nave.id}`}>
                                <button className="buttons">{nave.name}</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}