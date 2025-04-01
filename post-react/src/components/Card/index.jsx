import posterImg from "../../assets/post.jpg"
import styles from "./styles.module.css"

 export default function App() {
   return (
     <div  className={styles.container}>
       <div className={styles.containerPoster}>
         <div className={styles.content}>
           <img style={{width: "20rem", height: "auto", border: "1rem solid black"}} src={posterImg} alt="" />
           <div className={styles.texts}>
             <h1>Pôster: Star Wars (1977)</h1>
             <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este Clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
             <button>Comprar agora</button>
           </div>
         </div>
       </div>
     </div>
   )
 }