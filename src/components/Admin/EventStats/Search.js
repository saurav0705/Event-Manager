import React, { useState, useEffect } from 'react';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.scss';
const Search= (props) => {
    const [filtered,setFiltered] = useState([]);
    const [param,setParam] = useState('registration_number');

    //Returns results on each keypress
    const changeHandler = (val) => {
        if(val.length === 0){setFiltered([]); return;}
        let obj = JSON.parse(JSON.stringify(props.data));
        obj = obj.filter(dat => dat[param].toString().toLowerCase().includes(val.toLowerCase()));
        setFiltered([...obj]);

    }

    //Constructs option from filtered results
    const show = () => {
    return (filtered.map(data => (<tr onClick={() => {props.select(data);setFiltered([])}}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.registration_number}</td>
        </tr>)))

    }
    return (
        
             <Modal isOpen={props.open} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Search Registration</ModalHeader>
        <ModalBody style={{margin:0}}>
            <div className="search-view">
                <div className="drop-down">

                        <select name="param" onChange={(event) => setParam(event.target.value)}>
                        <option value="registration_number">Registration Number</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        </select>
                </div>
                <div className="search">
                    <input placeholder="Enter Search ..." onChange={(event) => changeHandler(event.target.value)}/>
                </div>
                <div className="results">
                    {show()}
                </div>

            </div>
        </ModalBody>
      </Modal>
            
        
    );
};

export default Search;