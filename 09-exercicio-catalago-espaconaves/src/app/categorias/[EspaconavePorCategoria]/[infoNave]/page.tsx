'use client'

import styles from "./page.module.css"
import spaceShips from "@/app/spaceships.json"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function EspaconavePorCategoria() {

    const params = useParams()
    const router = useRouter()
    const categoria = params.EspaconavePorCategoria as string;
    const infoNave = params.infoNave as string;

    const nave = spaceShips.find((nav) => nav.id === Number(infoNave) && nav.category === categoria)
    const naveCategoria = spaceShips.filter(n => n.category === categoria)
    const naveAtualIndex = naveCategoria.findIndex(n => n.id === Number(infoNave))

    const proximaNave = naveCategoria[naveAtualIndex + 1]
    const anteriorNave = naveCategoria[naveAtualIndex - 1]

    const irParaProxima = () => {
        if (proximaNave) {
            router.push(`/categorias/${categoria}/${proximaNave.id}`)
        }
    }

    const irParaAnterior = () => {
        if (anteriorNave) {
            router.push(`/categorias/${categoria}/${anteriorNave.id}`)
        }
    }

    if (!nave) {
        return <p>Nave não encontrada</p>
    }

    return (
        <div className={styles.cardInfoEspaconave}>
            <div className={styles.containerInfoEspaconave}>
                <h1>{nave?.name}</h1>
                <div className={styles.imageEspaconave}>
                    <Image
                        src={nave?.imageUrl}
                        alt={nave?.name}
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
                        {anteriorNave && (
                         <button className="buttons" onClick={irParaAnterior}>anterior</button>
                        )}
                        <button className="buttons" onClick={irParaProxima}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}