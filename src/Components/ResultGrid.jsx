import React, { useEffect } from 'react'
import { fetchPhotos,fetchVideos } from '../api/mediaApi'
import { setQuery,setLoading,setError,setResults } from '../redux/features/searchSlice'
import { useDispatch,useSelector } from 'react-redux'
import ResultCard from './ResultCard'


const ResultGrid = () => {

    const dispatch = useDispatch()
    const {query,activeTab,results,loading,error} = useSelector((store) => store.search)

    

       useEffect(()=>{
        if(!query) return 
        const getData =async () =>{
       try {
        dispatch(setLoading())
         let data;
         if(activeTab == 'photos'){
          let response = await fetchPhotos(query)  
          data = response.results.map((item) =>({
             id:item.id,
             type:'photo',
             title:item.alt_description ,
             thumbnail:item.urls.small ,
             src:item.urls.full,
             url:item.links.download
 
          }))
         }
         if(activeTab == 'videos'){
          let response = await fetchVideos(query)  
          data = response.videos.map((item) =>({
             id:item.id,
             type:'video',
             title:item.user.name,
             thumbnail:item.image,
             src:item.video_files[0].link,
             url:item.url
          }))
         }
       dispatch(setResults(data))
       } catch (err) {
        dispatch(setError(err.message))
       }
       
        
    }
    getData()
       },[query,activeTab])

if(error) return <h1>Error</h1>
if(loading) return <h1>Loading...</h1>

  return (
    <div className='flex flex-wrap gap-5 h-130 mt-5 overflow-auto p-10 justify-center'>
      {results.map((item,idx)=>{
        return <div key={idx}>
          <ResultCard item={item} />
        </div>
      })}
    </div>
  )
}

export default ResultGrid