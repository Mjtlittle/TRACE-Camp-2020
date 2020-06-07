import React, { cloneElement } from 'react'
import './SectionCollection.css'

const SectionCollection = (props) => {
    
    const [ currentSection, setCurrentSection ] = React.useState(0);
    
    return (
        <React.Fragment>
            <div className='SectionCollection'>
                {React.Children.map(props.children, (child, index) => {
                    const otherClassName = (index === currentSection ? 'SectionCollection-menuitem-active':'');
                    return <div className={'SectionCollection-menuitem ' + otherClassName} onClick={() => setCurrentSection(index)}>
                            {child.props.name}
                        </div>;
                })}
            </div>

            {React.Children.map(props.children, (child, index) => {
                const newChild = cloneElement(child, {hidden: index !== currentSection});
                return newChild;
            })}

        </React.Fragment>
    )
}

export default SectionCollection
