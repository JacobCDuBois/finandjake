import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Test from "./test";
import Faq from "./faq";
import Registry from "./registry";
import NavMenu from "./navMenu";
import Gallery from "./gallery";
import RSVP from "./rsvp";
import HomePage from "./homePage";
import QuizPage from "./quizPage";
function Home() {
    return (

        // <div className="section home">
        // </div>
        <HomePage/>
    );
}

function RSVPTab() {
    return (

        <div className="section" >

            <div className="pageContent pt-5">
                <RSVP/>
            </div>

        </div>
    );
}

function FAQ() {
    return (
        <div className="section d-flex justify-content-center mt-5 mb-5" >

            <Faq/>
        </div>
    );
}

function Wishlist() {
    return (
        <div className="registry_section" >

            <Registry></Registry>
        </div>
    );
}
function Quiz(){
    return(
        <div className="section" >
            <QuizPage></QuizPage>

        </div>
    )
}

function Timeline() {
    return (
        <div className="section">

            <Gallery></Gallery>
        </div>
    );
}

function App() {
    return (
        <Router >
            <div className="App bg_main">
                <NavMenu/>
                <div className="App-body">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rsvp" element={<RSVPTab />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/quiz" element={<Quiz />} />
                    </Routes>
                </div>
                {/*<RSVP/>*/}
            </div>
        </Router>
    );
}

export default App;
