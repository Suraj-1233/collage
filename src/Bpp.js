import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Component/Card1/Card';
//import { Route, Switch } from "react-router";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datastr from './Component/Card1/Data_str/Datastr';
import Lovea from './Component/Card1/Love/Lovea';
import Make_table from './Component/Card1/Table/Make_table';
import Striver1 from './Component/Card1/Love/Striver';
import data from './Component/Card1/Amazon/Data';

function Bpp() {

  		
  
 
  return (
    
    <div  className='app1' >
    
   
      <Routes>
        <Route path="/" element={<Card/>}> </Route>
       <Route path="/love_babber" element={<Lovea/>}></Route>
       <Route path="/Striver" element={<Striver1/>}></Route>
         <Route path="/love_babber/Array" element={ <Make_table data={data}/>}></Route>  
       </Routes>
       </div>

  );
}

export default Bpp;
