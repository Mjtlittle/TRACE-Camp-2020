import React from 'react'

import './RatingCircle.css'

const RatingCircle = (props) => {
    return (
        <div className={'RatingCircle ' + props.className}>
            <div className='RatingCircle-rating'>{props.rating}</div>
        </div>
    )
}

RatingCircle.defaultProps = {
    rating: 4.5,
    className: '',
}

export default RatingCircle
