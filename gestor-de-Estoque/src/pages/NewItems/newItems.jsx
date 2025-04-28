import { Link, NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from 'react';

export default function NewItems() {
  const nomeRef = useRef()
  const dataAtual = new Date().toISOString()
  const [dadoItem, setDadoItem] = useState({

    nome: '',
    quantidade: '',
    preco: '',
    categoria: '',
    descricao: '',
    criadoEm: dataAtual,
    atualizadoEm: dataAtual 
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadoItem((prevState) => ({
      ...prevState,
      [name]: value,
    }))

  }


  const handleSubmit = (e) => {

    e.preventDefault();

    const novoItem = {
      ...dadoItem,
      id: Date.now()
    }
    console.log(novoItem)
    const storedItems = JSON.parse(localStorage.getItem('itens')) || []



    localStorage.setItem('itens', JSON.stringify([...storedItems, novoItem]))

    setDadoItem({
      nome: '',
      quantidade: '',
      preco: '',
      categoria: '',
      descricao: ''
      
    })
  }

  useEffect(() => {
    nomeRef.current.focus()
  }, [])

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
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              value={dadoItem.nome}
              onChange={handleChange}
              ref={nomeRef}
            />
          </div>
          <div>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              value={dadoItem.quantidade}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              name="preco"
              value={dadoItem.preco}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nome">Categoria</label>
            <select
              name="categoria"
              value={dadoItem.categoria}
              onChange={handleChange}
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
              value={dadoItem.descricao}
              onChange={handleChange}
            />
          </div>
          <div id="buttonWrapper">
            <button type="submit">Salvar</button>
          </div>

        </div>
      </form>
      <footer>Feito com React Router!</footer>
    </div>
  )
}
