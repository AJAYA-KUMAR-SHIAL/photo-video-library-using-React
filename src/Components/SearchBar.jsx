import { useState } from "react"
import {useDispatch} from 'react-redux'
import { setQuery } from "../redux/features/searchSlice"


const SearchBar = () => {

  const [text, setText] = useState('')
  
  const dispatch = useDispatch()

const handleSearch = (e) =>{
  e.preventDefault()

  dispatch(setQuery(text))
 
  setText('')
  
}

  return (
    <div>
      <form onSubmit={(e) =>{ handleSearch(e)}} className="flex gap-5 p-10 lg:px-20 ">
        <input 
        className="border-2 border-(--c2) rounded py-2 px-5 w-full"
        type="text"
        required
         placeholder="Search....."
         value={text}
         onChange={(e) => setText(e.target.value)}
          />
        <button className="bg-(--c2) text-black font-bold px-5 py-2 rounded cursor-pointer active:scale-95 active:bg-(--c1)">Search</button>
      </form>
    </div>
  )
}

export default SearchBar