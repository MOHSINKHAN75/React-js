import React, { useEffect, useRef } from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Displayhome from './Displayhome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
function Display() {
  const DisplayRef =useRef()
  const location = useLocation()
  // console.log(location)
  const isAlbum = location.pathname.includes("album")
  const albumid = isAlbum ? location.pathname.slice(-1): "";
  const bgcolor = albumsData[Number(albumid)].bgColor;

  useEffect(()=>{
    if(isAlbum){
      DisplayRef.current.style.background = `linear-gradient(${bgcolor}, #121212)`

    }else{
      DisplayRef.current.style.background = `#121212`

    }
  })
  return (
    <div ref={DisplayRef} className=' w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>

        <Route path='/' element={<Displayhome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display
