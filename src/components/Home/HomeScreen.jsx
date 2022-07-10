import React from 'react'
import { useState } from 'react'
import useLocation from '../../hooks/useLocationApi'
import ResidentCard from '../Card/ResidentCard'
import InputSearch from '../Search/InputSeacrh'
import HeaderScreen from '../Shared/HeaderScreen'
import Pagination from './Pagination'
import './style/HomeScreen.css'

export const HomeScreen = () => {

  const [inputSearch, setInputSearch] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const location = useLocation(inputSearch)

  let arrayResidents = []
  const residentPerPage = 10
  if(location?.residents.length < residentPerPage){
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentPerPage
    arrayResidents = location?.residents.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentPerPage) 
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock) 

  if(currentBlock * pagesPerBlock >= quantityPages){

    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
      arrayPages.push(i)
    }
  } else {

    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
      arrayPages.push(i)
    }
  }
  return (
    <div className="App">
    <HeaderScreen />
    <h1 className='Title__Page'>Lawnmower Dog Wiki</h1>
    <h2 className='Location__Now'>Located now: #{location?.id}</h2>
    <InputSearch
      setInputSearch={setInputSearch}
    />
    <Pagination
      arrayPages={arrayPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      quantityPages={quantityPages}
    />
    <div className='card-container'>
      {
        arrayResidents?.map(url => (
          <ResidentCard
            key={url}
            url={url}
          />
        ))
      }
    </div>
    <Pagination
      arrayPages={arrayPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      quantityPages={quantityPages}
    />
  </div>
  )
}
