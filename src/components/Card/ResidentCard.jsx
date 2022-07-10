import React from 'react'
import useCharacterApi from '../../hooks/useCharacterApi'
import './style/ResidentCard.css'

const ResidentCard = ({url}) => {

  const character = useCharacterApi(url)

  console.log(character)

  return (
    <article className='card'>
      <img src={character?.image} alt="" />
      <p>Name: <b>{character?.name}</b></p>
      <p>Status: <b>{character?.status} - {character?.species}</b></p>
      <p>Birthplace: <b>{character?.origin.name}</b></p>
      <p>Gender: <b>{character?.gender}</b></p>
      <p>Number of episodes where it appears: <b>{character?.episode.length}</b></p>
    </article>
  )
}

export default ResidentCard