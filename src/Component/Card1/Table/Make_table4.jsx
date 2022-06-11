
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../Table/Table3.css';




function Make_table4(props) {
   
// console.log(props)
  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(props.data);
  const [tableFilter, setTableFilter] = useState([]);
  const [order, setOrder] = useState("ASC");
  const[sortime,setSorttime]=useState(0);
  const [dataSource1, setDataSource1] = useState(dataSource);
 
//   console.log(dataSource)
  const sorting = (e) => {
   
    if (order === "ASC") {

      const sorted = [...dataSource1].sort((a, b) => {
        setSorttime(sortime+1);
        if (a.hardness > b.hardness) {
            

          return 1;


        }
        else {
         
          return -1;
        }
      }

      );



    
      if(sortime>=4)
      {
        setDataSource(dataSource);
        setSorttime(0);
       
      }
      else
      setDataSource(sorted);

      setOrder("DSC");
    }

    else if (order === "DSC") {

      const sorted = [...dataSource1].sort((a, b) => {
        setSorttime(sortime+1);
        if (a.hardness < b.hardness) {
         

        return 1;


      }
      else {
        
        return -1;
      }
    }

    );

    if(sortime>=4)
      {
        setDataSource(dataSource);
        setSorttime(0);
      }
      else
      setDataSource(sorted);

      setOrder("ASC");
    }
    console.log(sortime);

  };
  
//   console.log(dataSource);
//   console.log(" kya hua bhai");

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
        String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTableFilter([...filterTable])

    }
    else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  }

  const [color, setColor] = useState("");

  const btn1 = (e) => {
    // console.log(e);S
    // console.log(e.target);
    console.log(e.target.id);
    //alert(e.target.id)

    let newArr = [...dataSource]; // copying the old datas array
    
console.log(newArr)
    for (let i = 0; i < newArr.length; i++) {
    
      if (newArr[i].id == e.target.id && newArr[i].color) {
        newArr[i].color = false;
        console.log(newArr[i])
      }
      else if(newArr[i].id == e.target.id && newArr[i].color == false) {
        newArr[i].color = true;

      }
    }

  
    window.localStorage.setItem("love",JSON.stringify(newArr));
    // console.log(window.localStorage.getItem("love"));
    // console.log(props.name);
    var retrievedData = localStorage.getItem("love");
newArr = JSON.parse(retrievedData);

    setDataSource(newArr);
    console.log(dataSource)
    

  }
  // console.log(dataSource);


  return (
    <div >








      <form action="">
        <input type="search" placeholder="Search here ..." value={value} onChange={filterData}></input>
        {/* <Search  className='fa'> </Search>  */}

      </form>


      <div className='box1'>
        <table class="table  table-bordered" >

          <thead >
            <tr>
              
              <th scope="col">ID</th>
              <th scope="col">Title</th>

              <th scope="col" onClick={sorting} > Difficulty    </th>




              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 ? tableFilter.map((data, index) => {
              return (
                <tr className='bt' style={{ backgroundColor: data.color ? 'green' : '#DBD4CF' }}>

                  <td className='td'>{data.id}</td>
                  <td className='td' ><a href={data.link} target='_blank'>{data.title} </a></td>



                  <td className='td' >{data.hardness}</td>
                  <td>
                    {

                      <button type="button" class="btn btn-success btnm " id={data.id} onClick={btn1} >Success</button>
                    }

                  </td>

                </tr>
              )
            }

            )
              :
              dataSource.map((data, index) => {
                return (
                  <tr className='bt' style={{ backgroundColor: data.color ? 'green' : '#DBD4CF' }}>

                    <td>{data.id}</td>
                    <td><a href={data.link} target='_blank'>{data.title} </a></td>



                    <td>{data.hardness}</td>

                    <td>
                      {



                        <button type="button" class="btn btn-success btnm" id={data.id} onClick={btn1}>Success </button>

                      }

                    </td>
                  </tr>
                )
              }

              )

            }

          </tbody>

        </table>
      </div>

    </div>









  )





};
export default Make_table4;