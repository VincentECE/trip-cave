import logo from './assets/react.svg'
import './App.css'
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { VideoPlayer } from "./components"
import { useStore } from "./store";
import { VisualControlType } from './store/createVisualControlSlice';

const App = (): JSX.Element =>  {
 // const [counter, setCounter] = useState<number>(10);
  // const videoRef = useRef(null);

  const goFullScreenOnElement = useStore((state) => state.goFullScreenOnElement);

  const handlePlayButton = () => {
    // const video = document.getElementById('video') as HTMLVideoElement | null;
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video != null) {
            video.play();
            console.log('should be playing')
    }
  }

  // useEffect(() => {
  //   const video = document.getElementById('video') as HTMLVideoElement | null;

  //   setTimeout(function (video: { play: () => void; } | null) {
  //     console.log('setimeout')
  //     if (video != null) {
  //       video.play();
  //       console.log('should be playing')
  //     }
  //   }, 1000 )
  // })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="poop" className="logo" alt="Vite logo" />
        <button onClick={()=> {goFullScreenOnElement('video')}}>FullScreen</button>
        <button onClick={()=> {handlePlayButton()}}>Play</button>
         <VideoPlayer/>
      </header>
    </div>
  );
}

export default App
