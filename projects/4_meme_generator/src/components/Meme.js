import React from 'react'

import './Meme.css';

const Meme = (props) => {
    
    const captionClass = 'Meme-caption' + (props.overlayCaptions ? '-overlay' : '');
    
    return (
        <div className='Meme' ref={props.memeRef}>
            <div className={captionClass}>{props.topCaption}</div>
            <img src={props.src} alt='invalid url'/>
            <div className={captionClass}>{props.bottomCaption}</div>
        </div>
    )
}

Meme.defaultProps = {
    topCaption: '',
    bottomCaption: '',
    src: '',
    overlayCaptions: false,
}

export default Meme
