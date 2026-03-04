import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [produtos, setProdutos] = useState([])
  const [erro, setErro] = useState(null)

  useEffect(() => {
    buscarProdutos()
  }, [])

  const buscarProdutos = async () => {
    try {
      const resposta = await axios.get('http://127.0.0.1:8000/api/produtos/')
      setProdutos(resposta.data)
      setErro(null)
    } catch (error) {
      console.error(error)
      setErro("Erro ao conectar com o Backend")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          💻 Loja TCC <span className="text-blue-600">Tailwind</span>
        </h1>
        
        {erro && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p>{erro}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map(p => (
            <div key={p.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
              {/* Espaço para imagem (simulado com cor por enquanto) */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {p.foto ? (
                    <img 
                    src={p.foto} 
                    alt={p.nome} 
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" 
                />
                ) : (
                <span className="text-gray-400 text-4xl">📷</span>
                )}
                </div>
                          
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{p.nome}</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Descrição incrível do produto com Tailwind CSS...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    R$ {p.preco}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App