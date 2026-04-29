import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

 const dispatch = useDispatch()

const removeFromCollection = (item) =>{
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
}

  return (
    <div >
        <div className='relative lg:w-80 lg:h-80 md:w-60 md:h-60 w-40 h-50 bg-white rounded'>
        <a target='_blank' href={item.url} className='h-full w-full'>
 {item.type == 'photo' ? <img src={item.thumbnail} alt={item.title} className='w-full h-full object-cover object-center hover:scale-105  rounded' />:''}

        {item.type == 'video' ? <video autoPlay loop muted src={item.src} className='w-full h-full object-cover object-center hover:scale-95 rounded' controls />:''}
        </a>
      
        <div className='text-white absolute bottom-0 left-0 right-0 bg-opacity-70 font-bold text-lg lg:text-xl px-2 py-3 lg:px-4 lg:py-5 capitalize'>
            <h1 className='h-14 overflow-hidden'>{item.title}</h1>
            <button 
            className='bg-green-500 bg- text-white rounded px-4 py-1 font-medium cursor-pointer active:scale-95 hover:scale-105 '
            onClick={() => removeFromCollection(item)}
            >
            Remove
            </button>
        </div>
        
    </div>
    </div>
  )
}

export default CollectionCard