import React from "react";
import data from './Component/Card1/Amazon/Arry';
import Make_table4 from "./Component/Card1/Table/Make_table4";





function Local_storage() {

    const name = localStorage.getItem('love');

    if (name) {


        console.log('Name exists');
    } else {


        console.log('Name is not found');

        JSON.stringify(data);

        localStorage.setItem("love", JSON.stringify(data));
    }


    var retrievedData = localStorage.getItem("love");
    var movies2 = JSON.parse(retrievedData);
    console.log(movies2)



    return (
        <div>
            <Make_table4 data={movies2} name='love' />



        </div>

    );
}
export default Local_storage;