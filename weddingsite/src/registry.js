import React, { useState, useEffect } from 'react';
import bannerPhoto from './bgAssets/bannerimage.png'
const Registry = () => {


    function openLinkInNewTab(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className="gallery-container d-flex col-md-8 justify-content-center flex-column">
            <div className="row">
                <button className="sub_button" onClick={() => openLinkInNewTab('https://www.amazon.com/wedding/share/duboiswedding2024')}>
                    Amazon Registry
                </button>
            </div>
            <div className="row">
                <button className="sub_button" onClick={() => openLinkInNewTab('https://www.target.com/gift-registry/gift-giver?registryId=2ba2da80-4aaf-11ef-b3fe-fba0fb2939d8&type=WEDDING')}>
                    Target Registry
                </button>
            </div>
            <div className="row">
                <button className="sub_button" onClick={() => openLinkInNewTab('https://www.crateandbarrel.com/gift-registry/fiona-macke-and-jacob-dubois/r7155305')}>
                    Crate and Barrel
                </button>
            </div>
            <div className="row">
                <img className="registry_banner" src = {bannerPhoto}/>
            </div>



        </div>
    );
};

export default Registry;
