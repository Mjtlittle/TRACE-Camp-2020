import React, { cloneElement } from 'react'

const Section = (props) => {
    
    const newStyle = props.hidden ? { display: 'none' } : {};
    
    return (
        <React.Fragment>
            {React.Children.map(props.children, (child) => {
                return cloneElement(child, {style: newStyle});
            })}
        </React.Fragment>
    )
}

Section.defaultProps = {
    name: 'Example',
    hidden: false,
}

export default Section
