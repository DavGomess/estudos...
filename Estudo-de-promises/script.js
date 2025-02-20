function calculandoImc(peso, altura) {
    return new Promise((resolve, reject) => {
        if (typeof peso !== 'number' || typeof altura !== 'number') {
             reject('Insira números válidos por favor!');
        }

        altura = altura / 100
        
        let imc = peso / (altura * altura)

        if(imc < 18.5) {
            resolve('magreza')
        }else if(imc < 24.9) {
            resolve('normal')
        }else if(imc < 29.9) {
            resolve('sobrepeso')
        }else if(imc < 39.9) {
            resolve('obesidade')
        }else{
            resolve('obesidade grave')
      }     
    });
}


calculandoImc(1, 170)
.then(console.log)
.catch(console.error)






