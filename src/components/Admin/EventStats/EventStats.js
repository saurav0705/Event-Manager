import React from 'react';
import './EventStats.scss';
import DataTable from './DataTable';
import Chart from './Chart';
import Loading from '../../Utilities/Loading/Loading';
const EventStats = (props) => {
    return (
        <div className="event-stats">
            {props.data ? <>
            <div className="heading">{props.select}</div>
            <div className="charts">
            {props.data.length > 0 ?<Chart data={props.data} select={props.select}/>:null}
            </div>
            <div className="table">
            {props.data.length >0 ? <DataTable data={props.data} fields={props.fields}/>:null}
            </div>
            </>:<Loading/>}
            
        </div>
    );
};

export default EventStats;