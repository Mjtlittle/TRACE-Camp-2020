import React from 'react'
import './MemePanel.css'

const MemePanel = (props) => {
    return (
        <div className='MemePanel'>
            <img src={props.src}/>
        </div>
    )
}

export default MemePanel
