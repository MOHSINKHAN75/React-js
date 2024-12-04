import { useContext, useState } from "react";
import SideBar from "./Components/SideBar";
import Player from "./Components/Player";
import Display from "./Components/Display";
import { PlayerContext } from "./Context/Context";

function App() {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <>
      <div className=" h-screen bg-black">
        <div className=" flex h-[90%]">
          <SideBar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;








// // otp genrator
// import React from 'react'
// // import Otp from './OTP/Otp'
// // import Star from "./OTP/Star";
// import Map from './Weather/Map'

// function App() {
//   return (
//     <div>
//       <Map/>
//       {/* <Otp/>
//       <Star/> */}
//     </div>
//   )
// }

// export default App






// // revises 

// import React from 'react'
// import SideBar from './Revises/SideBar'
// import Player from './Revises/Player'
// // import DisplayHome from './Revises/DisplayHome'
// import Display from './Revises/Display'

// function App() {
//   return (
//     <div className=' h-screen bg-black'>
//       <div className='flex h-[90%]'>

//       <SideBar/>
//     <Display/>
//       </div>
//       <Player/>
//     </div>
//   )
// }

// export default App
