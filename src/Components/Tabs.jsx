import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    const tabs = ['photos','videos']
  return (
    <div className='flex gap-10 p-5 justify-center'>
        {tabs.map((tab,idx)=>{
            return <button key={idx} className={`${activeTab == tab? 'bg-green-700' : 'bg-green-500'} transition text-black font-bold px-5 py-2 rounded cursor-pointer active:scale-95 active:bg-green-900`}
            onClick={()=>{
                dispatch(setActiveTabs(tab))
               
                
            }}
            >{tab}</button>
        })}
    </div>
  )
}

export default Tabs