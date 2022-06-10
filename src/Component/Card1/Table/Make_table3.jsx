import { Link, Sort } from '@material-ui/icons'
import  React ,{useState , useEffect} from 'react';

import '../Table/Table.css'





function Make_table3(props) 
{
 return(


<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      
      <th scope="col">Diffelcallty</th>
    </tr>
  </thead>
  <tbody>
     {props.data.map((data) => {
         return(
<tr>

          <td>{data.id}</td> 
           <td><a href={data.link} target='_blank'>{data.title} </a></td> 

            
           
            <td>{data.hardness}</td> 
        
            </tr>
         )
     }
      
    )

     }
      
  </tbody>
</table>











 )
   

     
   
  
};
export default Make_table3;