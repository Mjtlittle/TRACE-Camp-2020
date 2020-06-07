import React from 'react'

import './CategoryPill.css'

const CategoryPill = (props) => {

    const [active, setActive] = React.useState(props.active);

    
    const toggle_active = () => {
        setActive(!active);
    }

    return (
        <div className={'CategoryPill shadow hover-grow ' + (active ? 'CategoryPill-active' : '')} onClick={toggle_active}>
            <div className='CategoryPill-icon inset-shadow'>
                <p>{props.icon}</p>
            </div>
            <p>{props.label}</p>
        </div>
    )
}

CategoryPill.defaultProps = {
    icon: '🥙',
    label: 'Salad',
}

export default CategoryPill
