import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'), // indica que o index.html raiz estará na pasta 'src'
  build: { outDir: '../dist' }, // especifica um nome para a pasta de saída/build
  server: { port: 8080 } // executa o servidor na porta 8080 ao invés de 5173 (padrão)
}