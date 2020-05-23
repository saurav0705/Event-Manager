import React from 'react';
import './EventStats.scss';
import DataTable from './DataTable';
import PieChart from './PieChart';
const EventStats = (props) => {
    return (
        <div className="event-stats">
            <div className="charts">
                <PieChart data={props.data}/>
            </div>
            <div className="table">
            {props.data.length >0 ? <DataTable data={props.data}/>:null}
            </div>
            
        </div>
    );
};

export default EventStats;