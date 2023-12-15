import React, { useEffect, useState } from 'react'

const Apifetch = () => {
  const [newsdata, setNewsdata]=useState([])
  const [category,setCategory]=useState()

  function getapi(){
   fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=964479de95ac4ea296a25afbf1cdb086`)
   .then(response => response.json())
   .then(data=>{
    console.log(data);
    setNewsdata(data.articles)
   })
  }



  useEffect(()=>{
    getapi()
  },[category])



  return (
    <div>
      <button onClick={()=>setCategory('movie')}>movie</button>
      <button onClick={()=>setCategory('bitcoin')}>bitcoin</button>
      <button onClick={()=>setCategory('sports')}>sports</button>

     {

      newsdata.map((val)=>(<p>{val.title}</p>))
    
     }

    </div>
  )
}

export default Apifetch