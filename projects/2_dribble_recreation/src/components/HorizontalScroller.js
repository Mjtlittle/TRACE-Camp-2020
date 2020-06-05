import React from 'react'
import './HorizontalScroller.css'

const HorizontalScroller = (props) => {
    return (
        <div className='HorizontalScroller'>
            {props.children}
        </div>
    )
}

export default HorizontalScroller
