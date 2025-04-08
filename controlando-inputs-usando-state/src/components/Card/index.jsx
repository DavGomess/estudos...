import styles from './styles.module.css'
import { useState } from "react";

export default function Card() {

    const [password, setPassword] = useState("")
    const [passwordSize, setPasswordSize] = useState(12)
    const [copy, setCopy] = useState("Copiar")

    function generateButton() {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let newPassword = "";

      for (let i = 0; i < passwordSize; i++) {
        newPassword += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      } 

      setPassword(newPassword)
  
    }
   
    

    function copyButton() {
     
        if (!password) return; // Se não houver senha, não faz nada

        navigator.clipboard.writeText(password); // Copia para a área de transferência
       
        alert("SENHA COPIADA!")
       
         // Muda o texto do botão
        setCopy("Copiado!")
        setTimeout(() => {
            
            setCopy("Copiar"); // Depois de 2 segundos, volta para "Copiar"
            setPassword(""); // apaga a senha atual
        }, 1000);
       
    }

    return(
        <div className={styles.container}>
           <div className={styles.card}>
                <div className={styles.title}>
                    <h2>Gerador de senhas</h2>
                </div>
                    <div>
                    <label htmlFor="passwordSize">Tamanho: </label>
                    <input type="number" id="passwordSize" min={1}  value={passwordSize}
                        onChange={(ev) => setPasswordSize(ev.target.value)}/>
                    </div>
                          <div className={styles.buttons}>
                        <button className={styles.button} onClick={generateButton}>Gerar senha de {passwordSize} caracteres</button>
                        <button className={styles.button} onClick={copyButton} disabled={!password}>{copy}</button>
                         </div>
                    <div className={styles.password}>{password ? password : ''}</div>
           </div>
        </div>
    )
}