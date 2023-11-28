import { useEffect,useState,useuseState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
const[message , setMessage] = useState('');
useEffect(() => {
  //http://localhost:5001 (absolute path) , api (another path)
    axios.get('/api')
      .then((response) => {
      console.log({response});
      })
},[]);
  return (
    <>
      "hello"
    </>
  )
}

export default App
