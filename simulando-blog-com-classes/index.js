const Author = require("./Author");


const john = new Author('John Doe')

const post = john.writePost('titulo do post', 'lorem ipsum dolo sic.')

post.addComment('david', 'muito bom!')
post.addComment('ana', 'não gostei!')

console.log(john)
console.log(post)