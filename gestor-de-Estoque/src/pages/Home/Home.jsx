import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function Home() {
  const [itemsRecentes, setItemsRecentes] = useState([]);
  const [itemsAcabando, setItemsAcabando] = useState([])

  const differentItems = () => {
    const itensSalvos = JSON.parse(localStorage.getItem('itens')) || []

    const itensDiferentes = new Set();

    itensSalvos.forEach(item => {
      itensDiferentes.add(`${item.nome}-${item.categoria}`)
    });
    return itensDiferentes.size
  }

  const totalItems = () => {
    const itensSalvos = JSON.parse(localStorage.getItem('itens')) || []

    return itensSalvos.reduce((total, item) => {
      return total + Number(item.quantidade);
    }, 0)

  }

  const recentItems = () => {
    const itemSalvos = JSON.parse(localStorage.getItem('itens')) || []

    const dezDiasAtras = new Date();
    dezDiasAtras.setDate(dezDiasAtras.getDate() - 10);

    // está dentro dos últimos 10 dias
    return itemSalvos.reduce((total, item) => {
      const dataItem = new Date(item.criadoEm)
      return dataItem >= dezDiasAtras ? total + 1 : total;
    }, 0)
  }

  const listRecentItems = () => {
    const itemSalvos = JSON.parse(localStorage.getItem('itens')) || []

    const dezDiasAtras = new Date();
    dezDiasAtras.setDate(dezDiasAtras.getDate() - 10);

    return itemSalvos.filter(item => {
      const dataItem = new Date(item.criadoEm)
      return dataItem >= dezDiasAtras
    })
  }

  useEffect(() => {
    setItemsRecentes(listRecentItems());
  }, []);


  const littleItems = () => {
    const itemSalvos = JSON.parse(localStorage.getItem('itens')) || []

    return itemSalvos.filter(item => Number(item.quantidade) < 10).length;
  }

  const listLittleItems = () => {
    const itemSalvos = JSON.parse(localStorage.getItem('itens')) || []

    return itemSalvos.filter(item => Number(item.quantidade) < 10);
  }

  useEffect(() => {
  setItemsAcabando(listLittleItems());
}, [])

  return (
    <div className="app">
      <div id="header">
        <h3>REACT STOCK</h3>
        <ul>
          <li>Início</li>
          <Link to="/StockItems" className="linkTo"><li>Items</li></Link>
        </ul>
      </div>
      <h1>Dashboard</h1>
      <div id="card-container">
        <div className="cards">
          <p>Diversidade de itens</p>
          <div className="content-card">
            {differentItems()}
          </div>
        </div>
        <div className="cards">
          <p>Inventário total</p>
          <div className="content-card">
            {totalItems()}
          </div>
        </div>
        <div className="cards">
          <p>Itens recentes</p>
          <div className="content-card">
            {recentItems()}
          </div>
        </div>
        <div className="cards">
          <p>Itens acabando</p>
          <div className="content-card">
            {littleItems()}
          </div>
        </div>
      </div>
      <div className="items-container">
        <div id="recentItems">
          <table>
            <thead>
              <tr>
                <th>Itens Recentes</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {itemsRecentes.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>
                    <span className="button">
                      <Link to="/ItemProfile" state={{ item }} className="linkTo"><button className="viewButton">Ver</button></Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id="low-stock-items">
          <table>
            <thead>
              <tr>
                <th>Itens Acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {itemsAcabando.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.quantidade}</td>
                  <td>
                    <span className="button">
                      <Link to="/ItemProfile" state={{ item }} className="linkTo"><button className="viewButton">Ver</button></Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer>Feito com React Router!</footer>
    </div>
  )
}