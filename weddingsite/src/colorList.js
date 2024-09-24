import React, { useState, useEffect } from 'react';

const ColorList = () =>{
    const colorDict = {

    }
    const [index, setIndex] = useState(0);
    const changeColor = (i) =>{
        setIndex(i)
    }
    return(
        <div className="color_tool">
            <div className="row d-flex">
                <div className="circle_div" style={{backgroundColor: '#3E6633'}}>

                </div>
                <div className="circle_div" style={{backgroundColor: '#9D1717'}}>

                </div>
                <div className="circle_div" style={{backgroundColor: '#161782'}}>

                </div>
                <div className="circle_div" style={{backgroundColor: '#BF5D03'}}>

                </div>
                <div className="circle_div" style={{backgroundColor: '#E4C25E'}}>

                </div>
                <div className="circle_div" style={{backgroundColor: '#66334F'}}>

                </div>
            </div>
        </div>
    );
}
export default ColorList