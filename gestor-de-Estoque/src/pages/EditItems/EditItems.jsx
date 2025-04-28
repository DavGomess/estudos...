import { Link, NavLink } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function EditItems() {

  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();
  const [itens, setItens] = useState([])
  const [nome, setNome] = useState(item.nome)
  const [quantidade, setQuantidade] = useState(item.quantidade)
  const [categoria, setCategoria] = useState(item.categoria)
  const [preco, setPreco] = useState(item.preco)
  const [descricao, setDescricao] = useState(item.descricao)

  const handleEdit = (e, id) => {
    e.preventDefault()

    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const itensAtualizados = itens.map(item => {

      if (item.id === id) {
        return{
          ...item,
          nome: nome,
          quantidade: quantidade,
          categoria: categoria,
          preco: preco,
          descricao: descricao,
          atualizadoEm: dataAtual
        }
      } else {
        return item
      }
    })
    localStorage.setItem('itens', JSON.stringify(itensAtualizados));
    setItens(itensAtualizados);
    navigate("/stockItems")

  }

  useEffect(() => {
    const itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
    setItens(itensSalvos);
  }, []);
  

  return (

    <div className="app">
      <div id="header">
        <h3>REACT STOCK</h3>
        <ul>
          <Link to="/" className="linkTo"><li>Início</li></Link>
          <Link to="/stockItems" className="linkTo"><li>Items</li></Link>

        </ul>
      </div>
      <h1>Stock Items</h1>
      <div id="itemsNavigation">
        <NavLink
          to="/stockItems"
          className={({ isActive }) => isActive ? "linkTo-Aba active" : "linkTo-Aba"}
        >
          <p>Todos os itens</p>
        </NavLink>

        <NavLink
          to="/newItems"
          className={({ isActive }) => isActive ? "linkTo-Aba active" : "linkTo-Aba"}
        >
          <p>Novo Item</p>
        </NavLink>
      </div>
      <hr className="hr-line" />
      <div className="updateItem">
        <p>Atualizar Item - {item.nome}</p>
      </div>
      <form>
        <div className="input-container">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name='name'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              name="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="nome">Categoria</label>
            <select
              defaultValue="eletronicos"
              name="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="eletronicos">Selecione uma categoria...</option>
              <option value="jogos">Jogos</option>
              <option value="livros">Livros</option>
              <option value="roupas">Roupas</option>
            </select>
          </div>

        </div>
        <div className="textArea-container">
          <div>
            <label htmlFor="descricao">Descrição</label>
            <textarea
              name="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div id="buttonWrapper">
            <button
              onClick={(e) => handleEdit(e, item.id)}
            >Salvar</button>
          </div>

        </div>
      </form>
      <footer>Feito com React Router!</footer>
    </div>
  )
}
