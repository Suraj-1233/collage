import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Component/Card1/Card';

import './App.css'
import { Route, Router } from 'react-router-dom';
 import R from './Component/Card1/Routers/Router_l'
function App() {

 
  return (
    
    <div  className='app1' >
       <Card></Card> 
     {/* <R title='love_babber'></R> */}
     
    
   </div>
  
  );
}

export default App;
