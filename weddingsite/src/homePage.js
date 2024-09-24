import React, { useState, useEffect } from 'react';
import oval from './bgAssets/ovalfull.png'
import rect from './bgAssets/rectfull.png'
import landscape from './bgAssets/landscapefull.png'
import border from './bgAssets/borderhalf.png'
const HomePage = () =>{
    function getCountdown(){
        var currentDate = new Date();
        var weddingDate = new Date('December 28, 2024 04:30:00');

        var timeDifference = weddingDate - currentDate
        var totalSeconds = Math.floor(timeDifference / 1000);

// Calculate weeks, days, hours, and remaining seconds
        var weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60));
        var days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
        var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        console.log(weeks)
        console.log(days)
        console.log(hours)
        setCountdown({weeks, days, hours})


    }
    const [countdown, setCountdown] = useState({
        weeks:0,
        days:0,
        hours:0
    })
    useEffect(() => {
        getCountdown()
    }, []); // Runs once on component mount

    console.log(countdown)
    return(
        <div className="section">
            <div className="row home">

            </div>
            <div className="row divider bg_border">
                {/*<img src={border} className="border_frame"/>*/}
                <div className="d-flex flex-column justify-content-center align-items-center pt-5">
                    <div className="row dateHeader light_text address_text">
                        December 28th, 2024
                    </div>
                    <div className="row address_sub light_text">
                        500 W Streetsboro St
                    </div>
                    <div className="row address_sub light_text">
                        Peninsula, OH 44264
                    </div>
                </div>
            </div>
            <div className="row justify-content-center parrots middle-panel">
                <div className="d-flex flex-column justify-content-center align-items-center ">

                    <div className="row col-md-12 justify-content-center">
                        <div className="col-md-9  justify-content-center align-items-center">
                            {/*test*/}
                                <div className="row time_card_container">
                                    <div className="col-md-3 time_card">
                                        {/*<div className="row">*/}
                                        {/*    <div className="date_text">*/}
                                        {/*        {countdown['weeks']}*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="row">*/}
                                        {/*    <div className="card_text">*/}
                                        {/*        Weeks*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        <div className="frame-container">
                                            <img src={landscape} alt="Picture Frame" className="frame-image"/>
                                            <div className="content">
                                                <div className="row">
                                                    <div className="date_text ">
                                                        {countdown['weeks']}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="card_text">
                                                        Weeks
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 time_card">
                                        {/*<div className="row">*/}
                                        {/*    <div className="date_text">*/}
                                        {/*        {countdown['days']}*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="row">*/}
                                        {/*    <div className="card_text">*/}
                                        {/*        Days*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="frame-container">
                                            <img src={oval} alt="Picture Frame" className="frame-image"/>
                                            <div className="content">
                                                <div className="row">
                                                    <div className="date_text">
                                                        {countdown['days']}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="card_text">
                                                        Days
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 time_card">
                                        {/*<div className="row">*/}
                                        {/*    <div className="date_text">*/}
                                        {/*        {countdown['hours']}*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="row">*/}
                                        {/*    <div className="card_text">*/}
                                        {/*        Hours*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="frame-container">
                                            <img src={rect} alt="Picture Frame" className="frame-image"/>

                                            <div className="content">
                                                <div className="row">
                                                    <div className="date_text">
                                                        {countdown['hours']}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="card_text">
                                                        Hours
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="row">

            </div>




        </div>


    )

}
export default HomePage