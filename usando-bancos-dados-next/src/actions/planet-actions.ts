'use server'

import { createPlanet, deletePlanet } from '@/models/Planet';
import { revalidatePath } from 'next/cache'; // para recarregar a página

export async function createPlanetAction(formData: FormData) {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const imageUrl = formData.get('imageUrl') as string;

  await createPlanet({ name, description, imageUrl });
  revalidatePath('/');
}

export async function deletePlanetAction(id: number) {
  await deletePlanet(id);
  revalidatePath('/');
}