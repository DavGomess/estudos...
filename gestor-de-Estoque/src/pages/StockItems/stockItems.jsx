import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

export default function StockItems() {

  const [itens, setItens] = useState([])

  useEffect(() => {

    const itensSalvos = JSON.parse(localStorage.getItem('itens')) || []
    setItens(itensSalvos)

  }, [])

  const handleDelete = (id) => {
    
    const updateItems = itens.filter(item => item.id !== id)
    localStorage.setItem('itens', JSON.stringify(updateItems));
    setItens(updateItems);
  }

  return (

    <div className="app">
      <div id="header">
        <h3>REACT STOCK</h3>
        <ul>
          <Link to="/" className="linkTo"><li>Início</li></Link>
          <li>Items</li>
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
      <div id="table-container">
        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.quantidade} unid.</td>
                <td>{item.categoria}</td>
                <td>
                  <span className="buttons">
                    <Link to="/ItemProfile" state={{item}}  className="linkTo"><button className="viewButton">Ver</button></Link>
                    <Link to="/EditItems"  state={{item}} className="linkTo"><button className="updateButton">Atualizar</button></Link>
                    <button 
                    className="deleteButton"
                    onClick={() => handleDelete(item.id)}
                    >Excluir</button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer>Feito com React Router!</footer>
    </div>
  )
}

