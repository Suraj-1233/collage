import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import MainCard from '../MainCard'
import '../Card.css'
import love from '../image_header/complain_1_0.jpg';
import Striver from '../image_header/resouce.jpg';
import Amazon from '../image_header/chat1.jpg';
function Lovea() {
  return (
    <div className="wrapper">
      <MainCard
        img={love}
        title="Array "
        description=""
      />

      <MainCard
       img={Striver}
        title="LinkedList"
        description=""
      />

      <MainCard
        img={Amazon}
       
        title="Stack"
        description="I"
      />
       <MainCard
        img={Amazon}
       
        title="Queue"
        description="I"
      />
       <MainCard
        img={Amazon}
       
        title="BinaryTree"
        description="I"
      />
      <MainCard
        img={Amazon}
       
        title="BinarySearchTree"
        description="I"
      />
       <MainCard
        img={Amazon}
       
        title="Heap"
        description="I"
      />
       <MainCard
        img={Amazon}
       
        title="Hashing"
        description="I"
      />
      <MainCard
        img={Amazon}
       
        title="Graph"
        description="I"
      />
       <MainCard
        img={Amazon}
       
        title="Matrix"
        description="I"
      />


    </div>
  );
}

export default   Lovea;