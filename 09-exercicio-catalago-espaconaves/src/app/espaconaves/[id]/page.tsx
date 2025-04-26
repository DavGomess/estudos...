'use client'

import styles from "./page.module.css"
import spaceShips from "@/app/spaceships.json"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function NaveUnica() {

    const { id } = useParams()

    if (!id || typeof id !== 'string') return null

    const idNum = Number(id)
    const nave = spaceShips.find((nav) => nav.id === +id)
    if (!nave) return null

    const anterior = spaceShips.find(n => n.id === idNum - 1)
    const proxima = spaceShips.find(n => n.id === idNum + 1)



    return (
        <div className={styles.cardInfoEspaconave}>
            <div className={styles.containerInfoEspaconave}>
                <h1>{nave.name}</h1>
                <div className={styles.imageEspaconave}>
                    <Image
                        src={nave.imageUrl}
                        alt={nave.name}
                        width={768}
                        height={432}
                    />
                </div>
                <div className={styles.descricoesEspaconave}>
                    <p>Classe: {nave.category}</p>
                    <p>Modelo: {nave.model}</p>
                    <p>{nave.description}</p>
                </div>
                <div className={styles.containerButtons}>
                    <Link href={"/espaconaves"}><button className="buttons">Voltar para Espaçonaves</button></Link>

                    <div className={styles.buttonsNavegacao}>
                        <Link href={`/espaconaves/${anterior?.id}`} style={{ display: +id === 1 ? 'none' : 'block' }}>
                            <button className="buttons">anterior</button>
                        </Link>
                        <Link href={`/espaconaves/${proxima?.id}`} style={{ display: +id === 20 ? 'none' : 'block' }}>
                            <button className="buttons">Próxima</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
