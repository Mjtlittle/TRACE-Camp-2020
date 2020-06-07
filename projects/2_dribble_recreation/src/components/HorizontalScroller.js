import React from 'react'
import './HorizontalScroller.css'

const HorizontalScroller = (props) => {
    
    const myRef = React.createRef();

    const on_scroll = event => {
        myRef.current.scrollBy(event.deltaY, 0);
    }

    return (
        <div className='HorizontalScroller' onWheel={on_scroll} ref={myRef}>
            {props.children}
        </div>
    )
}

export default HorizontalScroller
