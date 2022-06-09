import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import MainCard from './MainCard';
import './Card.css';
import love from './image_header/complain_1_0.jpg';
import Striver from './image_header/resouce.jpg';
import Amazon from './image_header/chat1.jpg';
function Card() {
  return (
    <div className="wrapper">
      <MainCard
        img={love}
        title="love_babber "
        description=""
      />

      <MainCard
       img={Striver}
        title="Striver"
        description=""
      />

      <MainCard
        img={Amazon}
       
        title="Amozon"
        description="I"
      />
       <MainCard
        img={Amazon}
       
        title="CP"
        description="I"
      />
       <MainCard
        img={Amazon}
       
        title="subject"
        description="I"
      />
      <MainCard
        img={Amazon}
       
        title="Amozon"
        description="I"
      />
    </div>
  );
}

export default Card;