import React, { useState, useEffect } from 'react';
import GalleryData from './galleryData';
const images = require.context('./imageAssets', true)
console.log(images)
const Gallery = () => {
    function getGallery(){
        const imgArray = []
        for(const i in GalleryData){
            const item = GalleryData[i]
            const tempImage = <div className="image-container">
                <img className={item.className} src={item.imgURL}/>
                <div className="image-overlay">
                    <p className="image-description">{item.text}</p>
                </div>
            </div>
            imgArray.push(tempImage)

        }
        return imgArray
    }

    return (
        <div className="gallery-container mt-5">
            {getGallery()}
        </div>
        // <div>
        //     {importedImages.map((image, index) => (
        //         <img key={index} src={image} alt={GalleryData[index].text} />
        //     ))}
        // </div>
    );
};

export default Gallery;
