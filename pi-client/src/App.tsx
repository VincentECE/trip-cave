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

  // const goFullScreenOnElement = useStore((state) => state.goFullScreenOnElement);
  const { goFullScreenOnElement, playVideo } = useStore((state) => ({
    goFullScreenOnElement: state.goFullScreenOnElement,
    playVideo: state.playVideo,
  }));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="poop" className="logo" alt="Vite logo" />
        <button onClick={()=> {goFullScreenOnElement('video')}}>FullScreen</button>
         <VideoPlayer/>
      </header>
    </div>
  );
}

export default App


//video player.pause is not a function inside visualControlSlice