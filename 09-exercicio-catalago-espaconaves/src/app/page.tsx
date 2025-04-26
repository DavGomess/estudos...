import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.divPrincipal}>
          <h1>Conheça as Naves do Universo Star Wars</h1>
          <Link href={"/espaconaves"}><button className="buttons" id={styles.botaoVerTodas}>Ver Todas</button></Link>
      </div>
    </div>

  );
}
