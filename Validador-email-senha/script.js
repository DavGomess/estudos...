function button() {
   let email = document.getElementById('email').value;
   const regrasEmail = /^[a-zA-Z0-9]{2,20}@[a-zA-Z0-9]{2,10}\.[a-zA-Z]{2,}$/;

    let senha = document.getElementById('senha').value;
    const regrasSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;



   try {
    if(!regrasEmail.test(email)) {
        throw new Error("❌ Email inválido '@' obrigatorio!");
    }

    alert('Email valído!')
    console.log("E-mail digitado:\n", email);
    
    }catch(erro) {
        alert(erro.message);
      
    }


    try {
        if(!regrasSenha.test(senha)) {
            throw new Error("❌ Senha invalida! 8 digitos necessarios");
        }
    
        alert('senha valída!')
        console.log("senha digitada:\n", senha);
        
        }catch(erro) {
            alert(erro.message);
          
        }
}

