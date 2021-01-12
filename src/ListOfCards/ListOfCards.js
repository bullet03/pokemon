import { useState, useEffect } from 'react'
import styles from './ListOfCards.module.css'
import Card from "../Card"
import axios from 'axios'

function ListOfCards () {

  const [cardsArray, setCardsArray] = useState ([])
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        setCardsArray(response.data.results)
      })
  }, [])

  return (
    <div className={styles.cardsContainer}>
      {cardsArray.map((card, index) => {
        return (
          <div key={card.name}><Card name={card.name} id={index+1}/></div>
        )
      })}
    </div>
  );
}

export default ListOfCards