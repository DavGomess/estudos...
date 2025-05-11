'use client'

import { createPlanetAction } from '@/actions/planet-actions'
import styles from './page.module.css'
// import { useEffect, useState } from 'react';


export function PlanetForm() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simula uma demora de 2 segundos
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <div>Carregando formulário...</div>;
  // }
  throw new Error("Teste de erro");
  return (
    <form className={styles.planetForm} action={createPlanetAction}>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" name='name' id='name' required />
      </div>

      <div>
        <label htmlFor="description">Descrição</label>
        <textarea name="description" id="description" required></textarea>
      </div>

      <div>
        <label htmlFor='imageUrl'>Imagem (URL)</label>
        <input type='text' name='imageUrl' id='imageUrl' required />
      </div>

      <div>
        <button type='submit'>Adicionar Planeta</button>
      </div>
    </form>
  )
}
