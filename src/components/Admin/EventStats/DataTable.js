import React,{useState} from 'react';
import DetailView from './DetailView';
const DataTable = (props) => {
    const [selected,setSelected] = useState({});
    const [open,setOpen] = useState(false);
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
            <table className="data-table">
                <tr>{props.fields.map(key => (<th key={key}>{key}</th>))}</tr>
                <tbody>{data.map((data,index) => returnRow(data,index))}</tbody>
            </table>
        )
    }
    return (
        <>
            {dataTable(props.data)}
            <DetailView open={open}
                        toggle={() => toggle()}
                        data={selected}/>
        </>
    );
};

export default DataTable;