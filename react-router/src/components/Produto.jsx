import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import Head from './Head'

const Produto = () => {
  const [produto, setProduto] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
      } catch (erro) {
        setError('Um erro ocorreu')
      } finally {
        setLoading(false)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  return loading ? (
    <div className='loading'></div>
  ) : error ? (
    <p>{error}</p>
  ) : produto === null ? null : (
    <section className={styles.produto + ' animeLeft'}>
      <Head
        title={produto.nome}
        description={`Esse é o produto ${produto.nome}`}
      />
      <div>
        {produto.fotos.map(foto => (
          <img
            key={foto.src}
            src={foto.src}
            alt={foto.titulo}
          />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R${produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto
