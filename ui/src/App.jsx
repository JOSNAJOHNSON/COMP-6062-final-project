import { useEffect,useState,useuseState } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Initialpage from 'Initialpage';
import Volume from 'Volume';
import Playback from 'Playback';
import Bluetoothscreen from 'Bluetoothscreen';
import Currentsong from 'Currentsong';
import Bluetooth from 'Bluetooth';
const App = () => {
 
useEffect(() => {
  
    axios.get('/api')
      .then((response) => {
      console.log({response});
      })
    
},[])


  return(
    <>
    </>
  )
  
}
export default App;

    
    