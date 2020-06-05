import React from 'react';
import './Page.css';

import Showcase from './Showcase';
import ShowcaseImage from './ShowcaseImage'
import Navbar from './Navbar'
import HorizontalScroller from './HorizontalScroller'
import LocationCard from './LocationCard';
import CategoryPill from './CategoryPill';

const Page = () => {
    return (
        <div className='Page'>
            <Showcase brandName='TooTravel'>
                <ShowcaseImage src='https://unsplash.com/photos/v7daTKlZzaw/download?force=true&w=1920'>
                    <h1>The most beautiful places in the world</h1>
                    <p>Plan your vacation on the most beautiful places in the world.</p>
                    <button>Get Started</button>
                </ShowcaseImage>
                <ShowcaseImage src='https://unsplash.com/photos/qoLIbEPuY8U/download?force=true&w=1920'>
                    <h1>Heres another cool mountain</h1>
                    <p>Not sure what you will do there, its just a mountain.</p>
                    <button>Click This</button>
                </ShowcaseImage>
                <ShowcaseImage src='https://unsplash.com/photos/PCCMe3-YQpA/download?force=true&w=1920'>
                    <h1>And another one</h1>
                    <p>There sure are alot of mountains on earth.</p>
                    <button>Theres two of us now</button>
                    <button>Now you have to click</button>
                </ShowcaseImage>
            </Showcase>
            <div className='Page-sidebar'>
                <Navbar>
                    <a href='#gallery'>Gallery</a>
                    <a href='#stories'>Stories</a>
                </Navbar>
                <div className='Page-lower-section'>
                    <h2>Discover</h2>
                    <HorizontalScroller>
                        <LocationCard name='Alaska' mustSeePlaces={52} rating={4.8} src='https://unsplash.com/photos/0x-TlW_QsYk/download?force=true&w=640'/>
                        <LocationCard name='Iceland' mustSeePlaces={28} rating={5.0} src='https://unsplash.com/photos/zNN6ubHmruI/download?force=true&w=640'/>
                        <LocationCard name='Colorado' mustSeePlaces={10} rating={4.7} src='https://unsplash.com/photos/xoYPV4oVQJI/download?force=true&w=640'/>
                    </HorizontalScroller>
                    <h2>Types of Travel</h2>
                    <HorizontalScroller>
                        <CategoryPill icon='🛫' name='All' active/>
                        <CategoryPill icon='👨' name='Solo'/>
                        <CategoryPill icon='⭐' name='Luxury'/>
                        <CategoryPill icon='🦁' name='Safari'/>
                        <CategoryPill icon='🍣' name='Food'/>
                    </HorizontalScroller>
                </div>
            </div>
        </div>
    )
};

export default Page;
