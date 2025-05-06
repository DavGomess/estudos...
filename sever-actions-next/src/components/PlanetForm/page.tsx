import styles from './page.module.css'
import { createPlanet } from '../../actions/planet-actions';

export function PlanetForm() {
    return (
        <form className={styles.planetForm} action={createPlanet}>
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