import React,{useState} from 'react';
import './EventStats.scss';
import DataTable from './DataTable';
import Chart from './Chart';
import Loading from '../../Utilities/Loading/Loading';
const EventStats = (props) => {
    const [select,setSelect] = useState('graph');

    //Function that toggle between data-table component and graph component
    const show = (value) => {
            switch(value){
                case 'graph': {return (<div className="charts">{props.data.length > 0 ?<Chart data={props.data} select={props.select}/>:null}</div>)}
                case 'table': {return ( <div className="table">{props.data.length >0 ? <DataTable data={props.data} fields={props.fields}/>:null}</div>)} 
            
            default : return null;
            }
    }
    return (
        <div className="event-stats">
            {props.data ? <>
            <div className="select-options">
                <div className={select === 'graph' ? "option active":"option"} onClick={() => setSelect('graph')}>Graph</div>
                <div className={select === 'table' ? "option active":"option"} onClick={() => setSelect('table')}>Registration table</div>
            </div>
            {show(select)}
            </>:<Loading/>}
            
        </div>
    );
};

export default EventStats;