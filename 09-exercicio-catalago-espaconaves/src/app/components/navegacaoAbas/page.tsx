'use client'
import styles from "./page.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Abas() {
    const pathname = usePathname()

    return (
        <>
            <Link href={"/"} className={styles.linkNavegacao}>Início</Link>
            <Link href={"/espaconaves"} className={`${styles.linkNavegacao} ${pathname === '/espaconaves' ? styles.ativa : ''}`}>Espaçonaves</Link>
            <Link href={"/categorias"} className={`${styles.linkNavegacao} ${pathname === '/categorias' ? styles.ativa : ''}`}>Categorias</Link>
        </>
    )
}