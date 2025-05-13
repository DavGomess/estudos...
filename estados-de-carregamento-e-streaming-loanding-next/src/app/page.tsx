import { PlanetItem } from '@/components/PlanetItem/page';
import { PlanetForm } from '@/components/PlanetForm/page';
import styles from './page.module.css';
import * as Planet from "@/models/Planet"

export default async function Page() {
  const planets = await Planet.getPlanets();

  
  return (
    <div className={styles.page}>
      <h1>Planetas</h1>

      <div className={styles.container}>
       
        <PlanetForm />

        <section className={styles.planets}>
          {planets.map((planet) => (
            <PlanetItem key={planet.id} planet={planet} />
          ))}
        </section>
      </div>
    </div>
  );
};


