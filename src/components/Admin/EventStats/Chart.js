import React, { useEffect, useState } from 'react';
import { Pie,Bar } from 'react-chartjs-2';
import {COLORS,shuffle} from '../../../utilities/randomColor';

const preData = {
    self:0,
    corporate:0,
    others:0,
    group:0

}


const Chart = (props) => {
    const [events,setEvents] = useState({});
    const [chart,setChart] = useState('Bar');
    const [data,setData] = useState( {...preData});

    
    useEffect(()=>{
        let obj = {...preData};
        if(!events[props.select]){
        props.data.forEach(element => {
            obj[element.type] = obj[element.type] + element['no_of_tickets']
        });
        setEvents({...events,...{[props.select]:obj}})
        setData(obj);
        }else{
            setData(events[props.select]);
        }
       
    },[props.data])
   
    //Dataset providing function for graphs
    const dataSet={
        labels: Object.keys(data),
        datasets: [{
            label: 'Registrations',
            data: Object.keys(data).map(key => data[key]),
            backgroundColor: shuffle(COLORS),
            borderWidth: 1
        }],
        
    }

    //function for which chart should be shown
    const showChart = (val) => {
        switch(val){
            case 'Pie': {return <Pie
                        data={dataSet}
                        width={100}
                        height={45}
                        options={{responsive:true}}
                    />}
            case 'Bar' : {return <Bar
                data={dataSet}
                width={100}
                height={50}
                options={{responsive:true}}
            />

            }
            default: return null;
        }

    }

    //Function generating table for type fo tickets
    const generateDataTable = (data) => {
        let x = (Object.keys(data).map(key => {
        return (<tr key={"data-table-"+key}><td>{key}</td><td>{data[key]}</td></tr>)
        }))

        return (<><tr><th>Registration type</th><th>tickets</th></tr>{x}</>)

    }
    return (
        <div className="chart">
        <div className="button">
            <div className={chart === 'Bar' ?"tile active":"tile"} onClick={() => setChart('Bar')}>Bar</div>
            <div className={chart === 'Pie' ?"tile active":"tile"} onClick={() => setChart('Pie')}>Pie</div>
        </div>
        <div className="show">
        <div className="graph">{showChart(chart)}</div>
        <div className="data-table">{generateDataTable(data)}</div>
        </div>
        </div>
    );
};

export default Chart;