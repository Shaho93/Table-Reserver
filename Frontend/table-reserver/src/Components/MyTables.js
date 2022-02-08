import React from 'react';
import Popup from 'react-popup';



class MyTables extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            value: this.props.defaultValue,
            nameOfCustomer: "",
            dateOfReservation: ""
        }

        this.clickReserveTable = this.onClickTables.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.value !== this.state.value){
            this.props.onClickTables(this.state.value);
        }
    }

    onClickTables(e){
        console.log("Table reserved");
        console.log(e);
        
    }

    render(){
    
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
                    <button className="OneTable" onClick = {this.clickReserveTable}> Table 3</button>
                    </div>
                    <div className="TableItem">
                    <button className="OneTable" onClick = {this.clickReserveTable}> Table 4</button>
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

    
}
export default MyTables;