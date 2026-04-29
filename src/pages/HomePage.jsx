import React from 'react'
import ResultGrid from "../Components/ResultGrid"
import SearchBar from "../Components/SearchBar"
import Tabs from "../Components/Tabs"
import { useSelector } from 'react-redux'
import { store } from '../redux/store'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomePage = () => {

    const {query} = useSelector((state) => state.search)
  return (
    <div className='h-auto min-h-screen'>
       <Navbar />
 <SearchBar />
{query != '' ? <div> 
    <Tabs />
<ResultGrid />
    </ div>:''}
    </div>
  )
}

export default HomePage