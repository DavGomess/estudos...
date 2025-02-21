class user {
        constructor(fullname, email, password) {
                this.fullname = fullname
                this.email = email     
                this.password = password    
   }
        login(endereco, senha) {
                if(this.email === endereco && this.password === senha) {
                    console.log("login realizado com sucesso!")    
                }else {
                        console.log("login não realizado!")
                }
        }
               
     
}

const usuario = new user('david', 'teste@gmail.com', 1234)
console.log(usuario.login('teste@gmail.com', 1234))
console.log(usuario.login('teste@gmail.com', 12345))
console.log(usuario.login('teste@gmail.com', 1234))