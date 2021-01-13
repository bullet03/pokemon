import { Route } from 'react-router-dom'
import {useState, useEffect } from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import Pokemon from '../Pokemon/Pokemon'
import axios from 'axios'

function Card (props) {

  const [pokemonId, setPokemonId] = useState([])
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then(response => {
        setPokemonId(response.data)
      })
  }, [])

  return (
    <div className={styles.card}>
      <Link to={`/${props.id}`}>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
        />
        {props.name}
        {/* <Pokemon info={pokemonId} /> */}
      </Link>
      {/* <Route path="/:id" component={Pokemon}></Route> */}
    </div>
  );
}

export default Card