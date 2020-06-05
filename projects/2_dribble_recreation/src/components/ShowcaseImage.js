import React from 'react'
import './ShowcaseImage.css';

const ShowcaseImage = (props) => {
    return (
        <div className='ShowcaseImage'>
            <img className='ShowcaseImage-background' src={props.src} alt=''/>
            <div className='ShowcaseImage-content'>
                {props.children}
            </div>
        </div>
    )
}

export default ShowcaseImage
