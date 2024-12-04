// import { createContext, useEffect, useRef, useState } from "react";
// import { songsData } from "../assets/assets";

// export const PlayerContext = createContext();

// const PlayerContextProvider = (props) => {
//   const audioRef = useRef();
//   const seekBar = useRef();
//   const seekBG = useRef();

//   const [track, seTrack] = useState(songsData[0]);
//   const [playerStatus, setPlayerStatus] = useState(false);
//   const [time, setTime] = useState({
//     currentTime: {
//       second: 0,
//       minute: 0,
//     },
//     Totaltime: {
//       second: 0,
//       minute: 0,
//     },
//   });

//   const play = () => {
//     audioRef.current.play();
//     setPlayerStatus(true);
//   };

//   const pause = () => {
//     audioRef.current.pause();
//     setPlayerStatus(false);
//   };

//   const playwithid = async (id) => {
//     await seTrack(songsData[id]);
//     await audioRef.current.play();
//     setPlayerStatus(true);
//   };

//   const previous = async () => {
//     if (track.id > 0) {
//       await seTrack(songsData[track.id - 1]);
//       await audioRef.current.play();
//       setPlayerStatus(true);
//     }
//   };

//   const next = async () => {
//     if (track.id < songsData.length - 1) {
//       await seTrack(songsData[track.id + 1]);
//       await audioRef.current.play();
//       setPlayerStatus(true);
//     }
//   };
//   const seekSong = (e) => {
//     audioRef.current.currentTime =
//       (e.nativeEvent.offsetX / seekBG.current.offsetWidth) *
//       audioRef.current.duration;
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       audioRef.current.ontimeupdate = () => {
//         seekBar.current.style.width =
//           Math.floor(
//             (audioRef.current.currentTime / audioRef.current.duration) * 100
//           ) + "%";
//         setTime({
//           currentTime: {
//             second: Math.floor(audioRef.current.currentTime % 60),
//             minute: Math.floor(audioRef.current.currentTime / 60),
//           },
//           Totaltime: {
//             second: Math.floor(audioRef.current.duration % 60),
//             minute: Math.floor(audioRef.current.duration / 60),
//           },
//         });
//       };
//     });
//   }, [audioRef]);
//   const contextValue = {
//     audioRef,
//     seekBG,
//     seekBar,
//     track,
//     seTrack,
//     playerStatus,
//     setPlayerStatus,
//     time,
//     setTime,
//     pause,
//     play,
//     playwithid,
//     previous,
//     next,
//     seekSong,
//   };

//   return (
//     <PlayerContext.Provider value={contextValue}>
//       {props.children}
//     </PlayerContext.Provider>
//   );
// };

// export default PlayerContextProvider;







import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBar = useRef();
  const seekBG = useRef();

  const [track, seTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [volume, setVolume] = useState(1); // New state variable for volume control
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    Totaltime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };

  const playwithid = async (id) => {
    await seTrack(songsData[id]);
    await audioRef.current.play();
    setPlayerStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await seTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayerStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await seTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayerStatus(true);
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBG.current.offsetWidth) *
      audioRef.current.duration;
  };

  const changeVolume = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          Totaltime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    });
  }, [audioRef]);




  const [isRepeat, setIsRepeat] = useState('none'); // 'none', 'one', 'all'

const repeatPlay = () => {
  setIsRepeat((prev) => (prev === 'none' ? 'one' : prev === 'one' ? 'all' : 'none'));
};

useEffect(() => {
  const handleEnd = () => {
    if (isRepeat === 'one') {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (isRepeat === 'all' && track.id === songsData.length - 1) {
      playwithid(0);
    } else if (track.id < songsData.length - 1) {
      next();
    }
  };

  audioRef.current.addEventListener('ended', handleEnd);
  return () => {
    audioRef.current.removeEventListener('ended', handleEnd);
  };
}, [isRepeat, track, next]);


  const contextValue = {
    audioRef,
    seekBG,
    seekBar,
    track,
    seTrack,
    playerStatus,
    setPlayerStatus,
    volume, 
    setVolume,
    changeVolume, 
    time,
    setTime,
    pause,
    play,
    playwithid,
    previous,
    next,
    seekSong,
    setIsRepeat,
    isRepeat,
    repeatPlay
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
