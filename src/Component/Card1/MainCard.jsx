
import React from "react";
import { ReactDOM } from "react";
import Datastr from "./Data_str/Datastr";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function MainCard(props) {

  		
  

    

    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>

             
        <Link to={props.title}>
        <button className="card__btn btn-lg active"   >View  More</button>
        </Link>
       

        
        

        

      </div>
    );
  }
  export default MainCard;
  