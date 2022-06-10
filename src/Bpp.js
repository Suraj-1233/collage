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
import Arry from './Component/Card1/Amazon/Arry';
import LinkedList from './Component/Card1/Love/Love_data/Link';
import Stack from './Component/Card1/Love/Love_data/Stack';
import Bit from './Component/Card1/Love/Love_data/Bit';
import Dp from './Component/Card1/Love/Love_data/Dp';
import Graph from './Component/Card1/Love/Love_data/Graph';
import Greedy from './Component/Card1/Love/Love_data/Greedy';
import Heap from './Component/Card1/Love/Love_data/Heap';
import Matrix from './Component/Card1/Love/Love_data/Matrix';
import String from './Component/Card1/Love/Love_data/String';
import Backtraking from './Component/Card1/Love/Love_data/Backtraking';
import Bst from './Component/Card1/Love/Love_data/Bst';
import Trie from './Component/Card1/Love/Love_data/Trie';


function Bpp() {

  		
  
 
  return (
    
    <div  className='app1' >
    
   
      <Routes>
        <Route path="/" element={<Card/>}> </Route>
       <Route path="/love_babber" element={<Lovea/>}></Route>
       <Route path="/Striver" element={<Striver1/>}></Route>
         <Route path="/love_babber/Array" element={ <Make_table  data={Arry}/>}/> 
         
         <Route path="/love_babber/LinkedList" element={ <Make_table  data={LinkedList}/>}/> 
         <Route path="/love_babber/Stack" element={ <Make_table  data={Stack}/>}/> 
         <Route path="/love_babber/Queue" element={ <Make_table  data={Stack}/>}/> 
         <Route path="/love_babber/BinaryTree" element={ <Make_table  data={Bst}/>}/> 
         <Route path="/love_babber/BinarySearchTree" element={ <Make_table  data={Bst}/>}/> 
         <Route path="/love_babber/Heap" element={ <Make_table  data={Heap}/>}/> 
         <Route path="/love_babber/Graph" element={ <Make_table  data={Graph}/>}/> 
         <Route path="/love_babber/Greedy" element={ <Make_table  data={Greedy}/>}/> 
         <Route path="/love_babber/Matrix" element={ <Make_table  data={Matrix}/>}/> 
         <Route path="/love_babber/Backtraking" element={ <Make_table  data={Matrix}/>}/> 
         <Route path="/love_babber/dp" element={ <Make_table  data={Dp}/>}/> 
         <Route path="/love_babber/Trie" element={ <Make_table  data={Trie}/>}/> 
         <Route path="/love_babber/Bit" element={ <Make_table  data={Bit}/>}/> 
         <Route path="/love_babber/String" element={ <Make_table  data={String}/>}/> 
       </Routes>
       </div>

  );
}

export default Bpp;
