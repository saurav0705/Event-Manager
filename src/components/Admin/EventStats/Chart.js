import React, { useEffect, useState } from 'react';
import { Pie,Bar } from 'react-chartjs-2';

const COLORS = [
    "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
    "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
    "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
    "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
    "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
    "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
    "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
    "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
    "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
    "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
    "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
    "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158"]
const Chart = (props) => {
    const [events,setEvents] = useState({});
    const [chart,setChart] = useState('Bar');
    const [data,setData] = useState( {
        self:0,
        corporate:0,
        others:0,
        group:0

    });

    
    useEffect(()=>{
        let obj = {self:0,
            corporate:0,
            group:0,
            others:0};
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
    function shuffle(array) {
        return  array.sort(() => Math.random() - 0.5);
       }
    const dataSet={
        labels: Object.keys(data),
        datasets: [{
            label: 'Registrations',
            data: Object.keys(data).map(key => data[key]),
            backgroundColor: shuffle(COLORS),
            borderWidth: 1
        }],
        
    }
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