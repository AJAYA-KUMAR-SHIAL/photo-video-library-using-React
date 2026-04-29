import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

    const collection = useSelector(state =>state.collection.items)
const dispatch = useDispatch()

const clearCollectionData =() =>{
    dispatch(clearCollection())
}


  return (
    
    <div>
        <div className='bg-(--c1) py-5 flex  justify-between px-5'>
            <h2 className='text-2xl  font-bold'>Your Collection</h2>
            <div className='text-xl flex gap-5'>
               <Link className='bg-(--c2) py-1 px-3 rounded active:scale-95' to="/">Home</Link>
               <Link className='bg-(--c2) py-1 px-3 rounded active:scale-95' to="/collection">Collection</Link>
               
            </div>
            <button className='bg-red-600 py-1 px-2 rounded active:scale-95 font-bold transition cursor-pointer'
               onClick={()=>clearCollectionData()}
               >
                Clear all
                </button>
        </div>

        {collection.length >0 ? <div className='h-auto max-h-screen flex flex-wrap gap-5  mt-5 overflow-auto p-10 justify-center'>
        
        {collection.map((item,idx) =>{
return <div key={idx} >
    <CollectionCard item={item} className='h-130' />
</div>
        })}
    </div> : <div className='text-center text-2xl'>Collection is empty</div>}
    </div>
  )
}

export default CollectionPage