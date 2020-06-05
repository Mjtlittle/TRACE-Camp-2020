import React from 'react'

import './CategoryPill.css'

const CategoryPill = (props) => {
    return (
        <div className={'CategoryPill shadow hover-grow ' + (props.active ? 'CategoryPill-active' : '')}>
            <div className='CategoryPill-icon inset-shadow'>
                <p>{props.icon}</p>
            </div>
        </div>
    )
}

CategoryPill.defaultProps = {
    icon: '🥙',
    label: 'Test',
}

export default CategoryPill
