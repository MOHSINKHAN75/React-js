import React, { useContext } from 'react'
import { PlayerContext } from '../Context/Context'

function SongsItem({name, image, id, desc}) {
  const {playwithid}= useContext(PlayerContext)
  return (
    <div onClick={()=>playwithid(id)}  className=' min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p className=' font-bold mt-2mb-1'>{name}</p>
      <p className=' text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongsItem
