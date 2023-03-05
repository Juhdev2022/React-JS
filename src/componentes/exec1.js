import React, { useState } from 'react'

const carros = [
  { categoria: "Esporte", preco: "110000", modelo: "Golf GTI" },
  { categoria: "Esporte", preco: "120000", modelo: "Camaro" },
  { categoria: "SUV", preco: "85000", modelo: "HRV" },
  { categoria: "SUV", preco: "83000", modelo: "T-Cross" },
  { categoria: "Utilitario", preco: "125000", modelo: "Hillux" },
  { categoria: "Utilitario", preco: "90000", modelo: "Ranger" }
]

function TabelaCarros({ categoria }) {
  const carrosFiltrados = carros.filter((carro) =>
    carro.categoria.toUpperCase().includes(categoria.toUpperCase())
  )
  const linhas = carrosFiltrados.map((carro) =>
    <tr key={carro.modelo}>
      <td>{carro.categoria}</td>
      <td>{carro.preco}</td>
      <td>{carro.modelo}</td>
    </tr>
  )
  return (
    <table border='1' style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Categoria</th> <th>Preço</th> <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas}
      </tbody>
    </table>
  )
}

function CampoDePesquisa({ categoria, setCategoria }) {
  return (
    <div>
      <label>Digite uma categoria</label>
      <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
    </div>
  )
}

export default function App() {
  const [categoria, setCategoria] = useState('')
  return (
    <>
      <CampoDePesquisa categoria={categoria} setCategoria={setCategoria} />
      <br />
      <TabelaCarros categoria={categoria} />
    </>
  )
}
