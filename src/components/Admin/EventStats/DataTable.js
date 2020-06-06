import React,{useState} from 'react';
import DetailView from './DetailView/DetailView';
import Search from './Search';
import {FaSearch} from 'react-icons/fa';
const DataTable = (props) => {
    const [selected,setSelected] = useState({});
    const [open,setOpen] = useState({detail:false,search:false});
    const toggle = (value) =>  setOpen({...open,[value]:!(open[value])});
    

    //Construncts Each row
    const returnRow = (data,index) => {
        return (<tr key={index} onClick={() => {toggle('detail');setSelected(data)}}>
            {props.fields.map(key => <td key={data[key]}>{data[key]}</td>) }
        </tr>)
    }

    //Construncts Registration Table
    const dataTable = (data) => {
        return (
            <>
            <div className="search" onClick={() => toggle('search')}><FaSearch/> search</div>
            <table className="data-table">
                <tr>{props.fields.map(key => (<th key={key}>{key}</th>))}</tr>
                <tbody>{data.map((data,index) => returnRow(data,index))}</tbody>
            </table>
            </>
        )
    }

    //Select result from search and showcases it in DetailView
    const searchSelect = (val) => {
        setSelected(val);
        toggle('search');
        toggle('detail');
    }

    return (
        <>
            {dataTable(props.data)}

            {/* Component Showing complete detail of the selected user */}
            <DetailView open={open.detail}
                        toggle={() => toggle('detail')}
                        data={selected}/>

            {/* Component for searching through registration table */}
            <Search
            open={open.search}
            toggle={() => toggle('search')}
            data = {props.data}
            select = {(data) => searchSelect(data)}
            />
        </>
    );
};

export default DataTable;