import React,{useState} from 'react';
import DetailView from './DetailView/DetailView';
import Search from './Search';
import {FaSearch} from 'react-icons/fa';
const DataTable = (props) => {
    const [selected,setSelected] = useState({});
    const [open,setOpen] = useState(false);
    const [search,setSearch] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    const returnRow = (data,index) => {
        return (<tr key={index} onClick={() => {toggle();setSelected(data)}}>
            {props.fields.map(key => <td key={data[key]}>{data[key]}</td>) }
        </tr>)
    }
    const dataTable = (data) => {
        return (
            <>
            <div className="search" onClick={() => setSearch(!search)}><FaSearch/> search</div>
            <table className="data-table">
                <tr>{props.fields.map(key => (<th key={key}>{key}</th>))}</tr>
                <tbody>{data.map((data,index) => returnRow(data,index))}</tbody>
            </table>
            </>
        )
    }

    const searchSelect = (val) => {
        setSelected(val);
        setSearch(!search);
        setOpen(!open);
    }
    return (
        <>
            {dataTable(props.data)}
            <DetailView open={open}
                        toggle={() => toggle()}
                        data={selected}/>
            <Search
            open={search}
            toggle={() => setSearch(!search)}
            data = {props.data}
            select = {(data) => searchSelect(data)}
            />
        </>
    );
};

export default DataTable;