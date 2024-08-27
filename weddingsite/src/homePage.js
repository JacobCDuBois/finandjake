import React, { useState, useEffect } from 'react';
const HomePage = () =>{
    function getCountdown(){
        var currentDate = new Date();
        var weddingDate = new Date('December 28, 2024 04:30:00');

        var timeDifference = currentDate - weddingDate


        var weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
        var days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

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
            <div className="row justify-content-center middle-panel">
                <div className="d-flex flex-column justify-content-center align-items-center pb-5">
                    <div className="row dateHeader">
                        December 28th, 2024
                    </div>
                    <div className="row address_sub">
                        500 W Streetsboro St
                    </div>
                    <div className="row address_sub">
                        Peninsula, OH 44264
                    </div>
                    <div className="row pt-2 col-md-12 justify-content-center">
                        <div className="col-md-6  justify-content-center align-items-center">
                            {/*test*/}
                                <div className="row">
                                    <div className="col-md-4">
1
                                    </div>
                                    <div className="col-md-4">
2
                                    </div>
                                    <div className="col-md-4">
3
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