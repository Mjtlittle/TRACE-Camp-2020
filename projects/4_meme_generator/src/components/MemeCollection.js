import React from 'react'
import './MemeCollection.css'

import MemePanel from './MemePanel';

const MemeCollection = (props) => {
    return (
        <div className='MemeCollection'>
            {props.memes.slice(0).reverse().map((meme) => (
                <MemePanel
                    key={meme.key}
                    meme={meme}
                    deleteCallback={props.deleteCallback}
                />
            ))}
            {props.memes.length === 0 &&
            <i className='text-muted text-center mt-3'>
                There are no memes stored in your collection.
            </i>}
        </div>
    )
}

export default MemeCollection
