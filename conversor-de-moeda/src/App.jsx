import { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [info, setInfo] = useState([]);



  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryInformation = data
          .filter(country => country.currencies) // Filtra apenas os países que têm moeda definida
          .map(country => {
            const moedaKey = Object.keys(country.currencies)[0]; // Pega a sigla (ex: USD, BRL)
            const moeda = country.currencies[moedaKey]; // Objeto da moeda

            return {
              nome: moeda.name,
              simbolo: moeda.symbol,
              sigla: moedaKey,
              pais: country.name.common // opcional: nome do país
            };
          });

        setInfo(countryInformation);
      })
      .catch(error => {
        console.error('Erro ao buscar informações do país:', error);
      });
  }, []);






  return (
    <>
      <div className='header'>
        <h1>ConverCoin</h1>
      </div>
      <div className='main'>
        <div className='cardContent'>
          <div className='conversionResult'>

          </div>
          <div className='containerInput'>
            <div className='cardInput'>
              <label htmlFor="quantia">Quantia</label>
              <div className="quantiaWrapper">
                <div className="selectCountry">
                  <select className='listCountry'>
                    {info.map((item, index) => (
                      <option key={index} value={item.sigla}>
                      {item.sigla} {item.simbolo} - {item.nome}
                      </option>
                    ))}
                  </select>
                </div>
                <input type="number" name="quantia" id="quantia" />
              </div>
            </div>


            <div className='conversionSymbol'>
              <div className='imgSetas'>
                <img
                  src="transfer.png"
                  width={'50px'}
                  height={'50px'}
                  alt="setas" />
              </div>
            </div>


            <div className='cardInput'>
              <label htmlFor="conversao">Converter para</label>
              <div className="quantiaWrapper">
                <div className="selectCountry">
                  <select className='listCountry'>
                    {info.map((item, index) => (
                      <option key={index} value={item.sigla}>
                      {item.sigla} {item.simbolo} - {item.nome}
                      </option>
                    ))}
                  </select>
                </div>
                <input type="number" name="quantia" id="quantia" />
              </div>
            </div>
          </div>
          <div className='graficCoin'>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>&copy; DAVID GOMES</p>
      </div>
    </>
  )
}


