import React from 'react'

import './RatingCircle.css'


const RatingCircle = (props) => {
    
    const onesPlace = Math.floor(props.rating % 10);
    const tenthsPlace = Math.floor(props.rating * 10 % 10);
    const ratingString = `${onesPlace}.${tenthsPlace}`;
    
    // refered to: https://css-tricks.com/building-progress-ring-quickly/
    const percent = props.rating / 5.0;
    const radius = 1; // em
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - percent * circumference;
    const strokeWeight = 1; // px

    return (
        <div>
            <svg
                className={'RatingCircle ' + props.className}
                height={`${radius * 2}em`}
                width={`${radius * 2}em`}
            >   
                <circle
                    className='RatingCircle-circle'
                    
                    strokeDasharray = {`${circumference}em ${circumference}em`}
                    strokeDashoffset = {`${offset}em`}
                    strokeWidth={`${strokeWeight}px`}

                    r={`calc(${radius}em - ${strokeWeight}px)`}
                    cx={`${-radius}em`}
                    cy={`${radius}em`}
                />
                <text className='RatingCircle-rating' x={`${radius / 2 + 0.2}em`} y={`${radius / 2 + 1.2}em`}>
                    {ratingString}
                </text>
            </svg>
        </div>

        
    )
}

RatingCircle.defaultProps = {
    rating: 4.5,
    className: '',
}

export default RatingCircle
