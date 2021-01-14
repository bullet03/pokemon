import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PokemonContainer from '../PokemonContainer'

const Pokemon = () => {
  const { id } = useParams()
  const [ pokemon, setPokemon ] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setPokemon(response.data)
    })
  }, [])

  return pokemon ? <PokemonContainer {...pokemon} /> : 'Loading...'


}

export default Pokemon;