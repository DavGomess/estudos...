import styles from './styles.module.css'
import { useState } from "react";

export default function Card() {

    const [password, setPassword] = useState("")
    const [copy, setCopy] = useState("Copiar")

    function generateButton(tamanho = 10) {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let newPassword = "";

      for (let i = 0; i < tamanho; i++) {
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
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={() => generateButton(12)}>Gerar!</button>
                        <button className={styles.button} onClick={copyButton} disabled={!password}>{copy}</button>
                    </div>
                    <div className={styles.password}>{password ? password : ''}</div>
           </div>
        </div>
    )
}