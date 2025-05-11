'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlanetItem } from '../PlanetItem/page';
import { PlanetForm } from '../PlanetForm/page';
import styles from './page.module.css';
import { Planet } from '@/models/Planet';
import { deletePlanetAction } from '@/actions/planet-actions';

interface PlanetsManagerProps {
  startingPlanets: Planet[]
}

export function PlanetsManager({ startingPlanets }: PlanetsManagerProps) {
  const [planets] = useState<Planet[]>(startingPlanets);
  const router = useRouter();

  async function handleDelete(id: number) {
    await deletePlanetAction(id);
    router.refresh();
  }

  return (
    <div className={styles.container}>
      <PlanetForm />

      <section className={styles.planets}>
        {planets.map((planet) => (
          <PlanetItem key={planet.id} planet={planet} onDelete={() => handleDelete(planet.id)} />
        ))}
      </section>
    </div>
  );
}
