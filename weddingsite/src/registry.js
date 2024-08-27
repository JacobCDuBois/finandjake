import React, { useState, useEffect } from 'react';
import RegistryData from "./registryData";
import data from "./registryList.json"
const Registry = () => {
    function handleClick(url) {
        window.open(url);
    }
    const handleName  = async (id) => {

    };

    function getRegistry() {

        return (<div>test</div>)
    }
    return (
        <div className="gallery-container mt-5">
            {getRegistry()}
        </div>
    );
};

export default Registry;
