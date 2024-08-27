import React, { useState } from 'react';

const RSVP = () => {
    const [name, setName] = useState('')
    const [isInvited, setIsInvited] = useState(false)
    const [isAttending, setIsAttending] = useState(false);
    const [diet,setDiet] = useState('')
    const [notes, setNotes] = useState('')
    const [guests, setGuests] = useState('')
    const [invite, setInvite] = useState('')
    const [stanford, setStanford] = useState(false)
    const [attending, setAttending] = useState(false)
    // const [guestName, setGuestName] = useState('')
    const [choices, setChoices] = useState([])
    const [finalSubmit, setFinalSubmit] = useState(false)
    const submitNotes = async () => {
        console.log(finalSubmit);
        const timestamp = new Date().toISOString().replace('T', ' ').replace('Z', '');

        // Iterate over guests using a for...of loop
        for (const guest of guests) {
            try {
                // Prepare the entry data for the current guest
                const entryData = {
                    index:guest.index,
                    name: guest.name,
                    invite: guest.invite,
                    diet: diet,
                    notes: notes,
                    coming: guest.coming,
                    stanford: guest.stanford,
                    timestamp: timestamp
                };

                // Make the fetch request to add an entry
                const response = await fetch('http://localhost:3001/add-entry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(entryData)
                });

                if (response.ok) {
                    console.log('Entry created successfully');
                } else {
                    console.error('Error creating entry');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        // Set finalSubmit to true after processing all entries
        setFinalSubmit(true);
    };
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
    function handleAttendence() {
        var temp_frame = guests
        var one_att = false
        var will_stay = false
        if (stanford){
            var willStay = document.querySelector(`input[name="stanford"]:checked`);
            if(willStay.value === 'true'){
                will_stay = true
            }

        }
        guests.forEach((guest, index) => {
            var willAttend = document.querySelector(`input[name="${guest.name}"]:checked`);
            if(willAttend.value === 'true'){
                one_att = true
                temp_frame[index]['coming'] = true
            }
            else{
                temp_frame[index]['coming'] = false
            }
            temp_frame[index]['stanford'] = will_stay

        })

        console.log(temp_frame)
        setIsAttending(one_att); // Convert to boolean
        setGuests(temp_frame)
        setAttending(true)
        if (!one_att) {
            console.log('here?');
            setFinalSubmit(true);
            submitNotes()
        }

    }
    function makeChoice (guest){
        const inv = guest.invite
        setIsInvited(true);
        setInvite(inv)
        setName(guest.name)
        console.log(inv)
        getInvite(inv)
    }
    const getInvite = async (inviteValue) => {
        console.log(name)
        try {
            const responseStanford = await fetch('http://localhost:3001/get-stanford', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name}),
            });

            const dataStanford = await responseStanford.json();
            console.log(await dataStanford)
            if (dataStanford.invite === 1) {
                // If invited, move to the next step
                setStanford(true)
            }
        } catch (error) {
            console.error('Error checking invite list:', error);
        }

        try {
            const response = await fetch('http://localhost:3001/get-invite', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({inviteValue}),
            });

            const data = await response.json();
            console.log(data.exists)
            if (data.exists.length > 0) {
                // If invited, move to the next step
                setGuests((data.exists))

            }        }
        catch (error) {
            console.error('Error checking invite list:', error);
        }
    }
    const handleNameSubmit = async () => {
        console.log(name)
        // Make a request to check if the name is in the invite list (invitelist.json)
        // // You can use fetch or any HTTP library for this purpose
        try {
            const response = await fetch('http://localhost:3001/check-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name }),
            });

            const data = await response.json();
            console.log(data.exists.length)
            if (data.exists.length > 0) {
                // If invited, move to the next step
                if(data.exists.length == 1){
                    console.log('in here')

                    setName(data.exists[0].name)
                    setIsInvited(true);
                    console.log(data.exists[0])
                    setInvite(data.exists[0].invite)
                    console.log(invite)
                    getInvite(data.exists[0].invite)

                }
                else if(data.exists.length >1){
                    setChoices(data.exists)
                }
                else{
                    alert("Sorry, you are not on the invite list. Make sure that your full name is spelled correctly or contact one of us to make sure we didn't mess up the list");
                }
            }
        } catch (error) {
            console.error('Error checking invite list:', error);
        }
    };
    console.log(guests)
    return (
        <div className="d-flex flex-column col-md-8 ">
            <div>
                <img src='dance.png' className="rsvp_img"/>
            </div>
            <div className="row justify-content-center">
                {!isInvited && choices.length<1 &&(
                    <div className="col-md-7">
                        <div className="row justify-content-center">
                            <label htmlFor="name" className="rsvpHeader">Your Name:</label>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 ">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-100"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-3">
                                <button className="sub_button" onClick={handleNameSubmit}>submit</button>

                            </div>

                        </div>


                    </div>
                )}
                {!isInvited && choices.length > 0 && (
                    <div className="col-md-7">
                        <div className="row justify-content-center">
                            <label htmlFor="name" className="rsvpHeader">Did You Mean:</label>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 ">

                                {choices.map((guest, index) => (
                                    <div className="row">

                                        <button className="sub_button" key={index} onClick={() => makeChoice(guest)}>
                                            {guest.name}
                                        </button>
                                    </div>
                                ))}

                            </div>

                        </div>


                    </div>
                )}
                {isInvited && guests.length > 0 && !isAttending && (

                    <div className="col-12 justify-content-center">
                        <div className="row">
                            <h1 className="row dateHeader">
                                {capitalizeWords(name)}
                            </h1>

                            <form className="form-check">
                                {guests.map((guest, index) => (
                                    <div className='radio-section' key={index}>
                                        <div className="row justify-content-center radio-item red-bg">
                                            <input type="radio" id={`not-attending-${index}`} className="form-check-input" name={guest.name} value={false} />
                                            <label htmlFor={`not-attending-${index}`}>
                                                {capitalizeWords(guest.name)} will not be attending
                                            </label>
                                        </div>
                                        <div className="row justify-content-center radio-item green-bg">
                                            <input type="radio" id={`attending-${index}`} className="form-check-input" name={guest.name} value={true} />
                                            <label htmlFor={`attending-${index}`}>
                                                {capitalizeWords(guest.name)} will be attending
                                            </label>
                                        </div>
                                    </div>
                                ))}
                                {stanford && (
                                    <div>
                                        <div className="row justify-content-center radio-item red-bg">
                                            <input type="radio" id="not-staying-stanford" className="form-check-input" name='stanford' value={false} />
                                            <label htmlFor="not-staying-stanford">
                                                Will not be staying at the Stanford House
                                            </label>
                                        </div>
                                        <div className="row justify-content-center radio-item green-bg">
                                            <input type="radio" id="staying-stanford" className="form-check-input" name='stanford' value={true} />
                                            <label htmlFor="staying-stanford">
                                                Will be staying at the Stanford House
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>




                        <div className=" mt-5 justify-content-center align-items-center">
                            <button type="submit" className="sub_button" onClick={handleAttendence}>Submit</button>

                        </div>
                    </div>

                )}
                {isAttending && !finalSubmit &&(
                    <div className="col-12">
                        <div className="row">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <label htmlFor="name">Dietary Restrictions:</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <input
                                            type="text"
                                            id="diet"
                                            name="diet"
                                            value={diet}
                                            onChange={(e) => setDiet(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>



                        </div>
                        <div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <label htmlFor="name">Additional notes for the couple:</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">

                                        <input
                                            type="text"
                                            id="notes"
                                            name="notes"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <button onClick={submitNotes}>submit</button>

                    </div>

                )}
                {finalSubmit && (
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="row justify-content-center">
                                <h1 className="text-center">
                                    thank you for submitting!
                                </h1>
                                <h5 className="text-center">
                                    We look forward to sharing our special day with you.
                                </h5>
                            </div>
                        </div>


                    </div>
                )}
            </div>


        </div>
    )
};

export default RSVP;
