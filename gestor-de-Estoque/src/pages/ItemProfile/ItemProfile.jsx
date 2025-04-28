import { Link, NavLink } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function ItemProfile() {

  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();
  const [ itens, setItens ] = useState([])

  useEffect(() => {

    const itensSalvos = JSON.parse(localStorage.getItem('itens')) || []
    setItens(itensSalvos)

  }, [])



  const handleDelete = (id) => {

    const updateItems = itens.filter(item => item.id !== id)
    localStorage.setItem('itens', JSON.stringify(updateItems));
    setItens(updateItems);
    navigate("/stockItems")
  }


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
        <p>{item.nome}</p>
        <Link to="/EditItems" state={{item}}  className="linkTo"><button className="updateButton">Atualizar</button></Link>
        <button className="deleteButton"
          onClick={() => handleDelete(item.id)}
        >Excluir</button>
      </div>

      <div className="itemDescriptions">
        <div className="itemDescription">
          <p>Categoria: {item.categoria}</p>
        </div>
        <div className="itemDescription">
          <p>Quantidade em estoque: {item.quantidade}</p>
        </div>
        <div className="itemDescription">
          <p>Preço: R$ {item.preco}</p>
        </div>
      </div>

      <div className="descriptionItem">
        <p>{item.descricao}</p>
      </div>

      <div className="dataItem">
        <div className="itemRegistrationDate">
          <p>Cadastradado em: {item.criadoEm}</p>
        </div>

        <div className="itemUpdateDate">
          <p>Atualizado em: {item.atualizadoEm}</p>
        </div>
      </div>
      <footer>Feito com React Router!</footer>
    </div>
  )
}
