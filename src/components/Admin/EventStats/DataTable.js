import React from 'react';

const DataTable = (props) => {
    const returnRow = (data,index) => {
        return (<tr key={index}>
            {Object.keys(data).map(key => <td key={data[key]}>{data[key]}</td>) }
        </tr>)
    }
    const dataTable = (data) => {
        return (
            <table className="data-table">
                <tr>{Object.keys(data[0]).map(key => (<th key={key}>{key}</th>))}</tr>
                <tbody>{data.map((data,index) => returnRow(data,index))}</tbody>
            </table>
        )
    }
    return (
        <>
            {dataTable(props.data)}
        </>
    );
};

export default DataTable;