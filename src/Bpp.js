import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Component/Card1/Card';
//import { Route, Switch } from "react-router";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datastr from './Component/Card1/Data_str/Datastr';
import Lovea from './Component/Card1/Love/Lovea';

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
import Make_table3 from './Component/Card1/Table/Make_table3';
import Make_table4 from './Component/Card1/Table/Make_table4';

function Bpp() {

  const name = localStorage.getItem('Arry');

    if (!name) {


        JSON.stringify(Arry);

        localStorage.setItem("Arry", JSON.stringify(Arry));
    }

    const name0 = localStorage.getItem('LinkedList');

    if (!name) {


       

        localStorage.setItem("LinkedList", JSON.stringify(LinkedList));
    }

  
    const name1 = localStorage.getItem('Dp');

    if (!name1) {


        

        localStorage.setItem("Dp", JSON.stringify(Dp));
    }

  
    const name3 = localStorage.getItem('Stack');

    if (!name3) {


        

        localStorage.setItem("Stack", JSON.stringify(Stack));
    }
    const name4 = localStorage.getItem('String');

    if (!name4) {


        

        localStorage.setItem("String", JSON.stringify(String));
    }

      var name5 = localStorage.getItem('Heap');

    if (!name5) {


        

        localStorage.setItem("Heap", JSON.stringify(Heap));
    }

    var name6 = localStorage.getItem('Bst');

    if (!name6) {


        

        localStorage.setItem("Bst", JSON.stringify(Bst));
    }
    var name7 = localStorage.getItem('Backtraking');

    if (!name7) {


        

        localStorage.setItem("Backtraking", JSON.stringify(Backtraking));
    }

    var name8 = localStorage.getItem('Trie');

    if (!name8) {


        

        localStorage.setItem("Trie", JSON.stringify(Trie));
    }
    var name8 = localStorage.getItem('Graph');

    if (!name8) {


        

        localStorage.setItem("Graph", JSON.stringify(Graph));
    }
    var name9 = localStorage.getItem('Greedy');

    if (!name9) {


        

        localStorage.setItem("Greedy", JSON.stringify(Greedy));
    }
    var name10= localStorage.getItem('Bit');

    if (!name10) {


        

        localStorage.setItem("Bit", JSON.stringify(Bit));
    }

    var name11= localStorage.getItem('Matrix');

    if (!name11) {


        

        localStorage.setItem("Matrix", JSON.stringify(Matrix));
    }




     
    
 


  
  		
  
 
  return (
    
    <div  className='app1' >
    
   
      <Routes>
        <Route path="/" element={<Card/>}> </Route>
       <Route path="/love_babber" element={<Lovea/>}></Route>
       <Route path="/Striver" element={<Striver1/>}></Route>
         <Route path="/love_babber/Array" element={ <Make_table4 name='Arry'  data={Arry}/>}/> 
         
         <Route path="/love_babber/LinkedList" element={ <Make_table4 name='LinkedList'   data={LinkedList}/>}/> 
         <Route path="/love_babber/Stack" element={ <Make_table4  name='Stack' data={Stack}/>}/> 
         <Route path="/love_babber/Queue" element={ <Make_table4  name='Stack' data={Stack}/>}/> 
         <Route path="/love_babber/BinaryTree" element={ <Make_table4  name='Bst' data={Bst}/>}/> 
         <Route path="/love_babber/BinarySearchTree" element={ <Make_table4  name='Bst' data={Bst}/>}/> 
         <Route path="/love_babber/Heap" element={ <Make_table4  name='Heap' data={Heap}/>}/> 
         <Route path="/love_babber/Graph" element={ <Make_table4  name='Graph' data={Graph}/>}/> 
         <Route path="/love_babber/Greedy" element={ <Make_table4  name='Greedy' data={Greedy}/>}/> 
         <Route path="/love_babber/Matrix" element={ <Make_table4  name='Matrix' data={Matrix}/>}/> 
         <Route path="/love_babber/Backtraking" element={ <Make_table4  name='Backtraking' data={Backtraking}/>}/> 
         <Route path="/love_babber/dp" element={ <Make_table4  name='Dp' data={Dp}/>}/> 
         <Route path="/love_babber/Trie" element={ <Make_table4  name='Trie' data={Trie}/>}/> 
         <Route path="/love_babber/Bit" element={ <Make_table4 name='Bit'  data={Bit}/>}/> 
         <Route path="/love_babber/String" element={ <Make_table4  name='String' data={String}/>}/> 
       </Routes>
       </div>

  );
}

export default Bpp;
