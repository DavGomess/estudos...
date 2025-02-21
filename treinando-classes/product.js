class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;

      
   }
        addToStock(quantidade) {
            this.inStock += quantidade
        }
        
        calculateDiscount(desconto) {
          return this.price * ((100 - desconto) / 100)
        }
}

const produto = new Product('café', "bebida N 1º do mundo", 10)
produto.addToStock(80)
console.log(produto)



/////

