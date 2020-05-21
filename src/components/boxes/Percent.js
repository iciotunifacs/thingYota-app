import React from 'react';

export default function Percent(props) {
    return (
        <div style={percentStyle}>
         {/* {percent(props.percent);}*/}
        </div>
    )
}

const percent = (args) => {

}

const percentStyle = {
    width: '100px',
    height: '100px',
    background: 'white',
    border:'2px solid blue',
    borderRadius: '8px'
}