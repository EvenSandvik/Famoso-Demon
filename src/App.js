import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton';

function App() {

  return (
    //TODO: find a font
    <div className="App" className="backgroundGradient">
      <p style={{textAlign: "center"}}>Brought to you by El Famoso Demon</p>

      <div id="soundButtons">
      <SoundButton text="Rain" sound="./Rain.mp3" color="fill1"></SoundButton>
      <SoundButton text="Ocean" sound="./Ocean.mp3" color="fill2"></SoundButton>
      <SoundButton text="Cafe" sound="./Cafe.mp3" color="fill3"></SoundButton>
      <SoundButton text="Birds" sound="./Birds.mp3" color="fill4"></SoundButton>
      <SoundButton text="Lo-fi" sound="./Lofi.mp3" color="fill1"></SoundButton>
      <SoundButton text="Inspirational" sound="./Inspiration.mp3" color="fill2"></SoundButton>
      <SoundButton text="Cat" sound="./Cat.mp3" color="fill3"></SoundButton>
      <SoundButton text="Uplifting" sound="./UpliftingSong.mp3" color="fill4"></SoundButton>
      </div>
    </div>
  );
}

export default App;
