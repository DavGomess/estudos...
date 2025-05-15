'use client'

import { deletePlanetAction } from '@/actions/planet-actions';
import { Planet } from '@/models/Planet';

interface PlanetItemProps {
  planet: Planet;
  onDelete?: () => void;
}

export function PlanetItem({ planet, onDelete }: PlanetItemProps) {
  const handleDelete = async () => {
    await deletePlanetAction(planet.id);
    if (onDelete) onDelete(); // chama função do componente pai para atualizar a lista
  };

  return (
    <div>
      <h2>{planet.name}</h2>
      <img 
        src={planet.imageUrl} 
        alt={planet.name} 
      />
      <p>{planet.description}</p>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
}
