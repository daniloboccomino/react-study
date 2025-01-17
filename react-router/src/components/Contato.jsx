import React from 'react'
import styles from './Contato.module.css'
import img from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head
        title='Contato'
        description='Página de contato'
      />
      <img
        src={img}
        alt='Máquina de escrever'
      />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>contato@daniloboccomino.com.br</li>
          <li>+55 11 99605 8044</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
