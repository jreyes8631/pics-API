import React from 'react'

const imageList = (props) => {
    const images = props.images.map((image) => {
       return <img src={image.urls.regular} alt="backup"/> 
    });

    return <div>{images}</div>
};

export default imageList;