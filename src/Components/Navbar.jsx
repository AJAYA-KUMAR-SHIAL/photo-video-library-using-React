import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
        <div className=' p-5 md:py-8 bg-(--c1) flex justify-between items-center  ' >
            <Link className=' text-2xl font-bold ' to="/">Media search</Link>
            <div className='text-xl flex gap-5'>
                <Link className='bg-(--c2) py-1 px-3 rounded active:scale-95' to="/search">Search</Link>
                <Link className='bg-(--c2) py-1 px-3 rounded active:scale-95' to="/collection">Collection</Link>
            </div>
        </div>
        </div>
  )
}

export default Navbar