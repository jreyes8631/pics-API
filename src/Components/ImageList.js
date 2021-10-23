import React from 'react'
import './imageList.css'

const imageList = (props) => {
    const images = props.images.map((image) => {
       return <img src={image.urls.regular} alt="backup"/> 
    });

    return <div className="image-list">{images}</div>
};

export default imageList;