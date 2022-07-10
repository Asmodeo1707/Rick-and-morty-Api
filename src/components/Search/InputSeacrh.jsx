import React from 'react'
import './style/InputSearch.css'

const InputSearch = ({setInputSearch}) => {

  const submit = e => {
    e.preventDefault()
    setInputSearch(e.target.firstChild.value)
  }

  return (
    <form className='form' onSubmit={submit}>
      <input className='Input__form' type="text" />
      <button className='bth__input'>Search Location</button>
    </form>
  )
}

export default InputSearch