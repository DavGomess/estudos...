import { PlanetsManager } from '@/components/PlanetsManager/page';
import styles from './page.module.css';

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/planets');
  const data = await response.json();

  return (
    <div className={styles.page}>
      <h1>Planetas</h1>
      <PlanetsManager startingPlanets={data} />
    </div>
  );
};