import React from 'react'
import './LocationCard.css'

import RatingCircle from './RatingCircle'

const LocationCard = (props) => {


    const style = {
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
    }

    return (
        <div className='LocationCard shadow hover-grow' style={style}>
            <RatingCircle rating={props.rating} className='LocationCard-rating'/>
            <div className='LocationCard-description'>
                <h3 className='LocationCard-name'>{props.name}</h3>
                <p className='LocationCard-mustseeplaces'>{props.mustSeePlaces} must see places</p>
            </div>
        </div>
    )
}

LocationCard.defaultProps = {
    rating: 4.8,
    name: 'Alaska',
    mustSeePlaces: 52,
    src: 'https://unsplash.com/photos/W4o1oWx0k0g/download?force=true&w=640',
}

export default LocationCard
