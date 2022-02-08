import React, { useEffect, useState } from 'react';
import Popup from 'react-popup';



function MyTables (props){

    const [value, setDefaultValue] = useState(0);
    const [nameOfCustomer, setNameOfCustomer] = useState("");
    const [dateOfReservation, setDateOfReservation] = useState("");

    useEffect(() => {
        console.log("Component Mounted");
        return() =>{
            console.log("Component will Unmount");
        }
    }, [])
    

    const onClickTables = (e) =>{
        
        console.log("Table reserved");
        console.log(e);
        
    }    
    
    return(
        <div className="container">
            <h2 className="MyTexts"> Available Tables</h2>                
            <div className="TablesContainer">
                <div className="TableItem">
                <button className="OneTable"> Table 1</button>
                </div>
                <div className="TableItem">
                <button className="OneTable"> Table 2</button>
                </div>
                <div className="TableItem">
                <button className="OneTable" onClick = {onClickTables}> Table 3</button>
                </div>
                <div className="TableItem">
                <button className="OneTable" onClick = {onClickTables}> Table 4</button>
                </div>
                <div className="TableItem">
                <button className="OneTable"> Table 5</button>
                </div>
                <div className="TableItem">
                <button className="OneTable"> Table 6</button>
                </div>                       
            </div>
        </div>
    );    
}
export default MyTables;