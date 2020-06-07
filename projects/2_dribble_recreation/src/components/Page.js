import React from 'react';
import './Page.css';

import Showcase from './Showcase';
import ShowcaseImage from './ShowcaseImage'
import Navbar from './Navbar'
import HorizontalScroller from './HorizontalScroller'
import LocationCard from './LocationCard';
import CategoryPill from './CategoryPill';
import SectionCollection from './SectionCollection';
import Section from './Section';

const Page = () => {

    const rickRoll = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    return (
        <div className='Page'>
            <Showcase brandName='TooTravel'>
                <ShowcaseImage src='https://unsplash.com/photos/v7daTKlZzaw/download?force=true&w=1920'>
                    <h1>The most beautiful places in the world</h1>
                    <p>Plan your vacation on the most beautiful places in the world.</p>
                    <button onClick={rickRoll}>Get Started</button>
                </ShowcaseImage>
                <ShowcaseImage src='https://unsplash.com/photos/qoLIbEPuY8U/download?force=true&w=1920'>
                    <h1>Heres another cool mountain</h1>
                    <p>Not sure what you will do there, its just a mountain.</p>
                    <button onClick={rickRoll}>Click This</button>
                </ShowcaseImage>
                <ShowcaseImage src='https://unsplash.com/photos/PCCMe3-YQpA/download?force=true&w=1920'>
                    <h1>And another one</h1>
                    <p>There sure are alot of mountains on earth. How different can they be? Like whats at one mountain but not the other.</p>
                    <button onClick={rickRoll}>Theres two of us now</button>
                    <button onClick={rickRoll}>Now you have to click</button>
                </ShowcaseImage>
            </Showcase>
            <div className='Page-sidebar'>
                <Navbar>
                    <a href='#gallery'>Gallery</a>
                    <a href='#stories'>Stories</a>
                </Navbar>
                <div className='Page-lower-section'>
                    <h2>Discover</h2>
                    <SectionCollection>
                        <Section name='Popular'>
                            <HorizontalScroller>
                                <LocationCard name='Alaska' mustSeePlaces={52} rating={3.8} src='https://unsplash.com/photos/0x-TlW_QsYk/download?force=true&w=640'/>
                                <LocationCard name='Iceland' mustSeePlaces={28} rating={5.0} src='https://unsplash.com/photos/zNN6ubHmruI/download?force=true&w=640'/>
                                <LocationCard name='Colorado' mustSeePlaces={10} rating={2.7} src='https://unsplash.com/photos/xoYPV4oVQJI/download?force=true&w=640'/>
                                <div className='Page-whitespace' />
                            </HorizontalScroller>
                        </Section>
                        <Section name='Adventure'>
                            <HorizontalScroller>
                                <LocationCard name='Middle-Earth' mustSeePlaces={49} rating={4.2} src='https://unsplash.com/photos/LyWdmJT1b20/download?force=true&w=640'/>
                                <LocationCard name='Westeros' mustSeePlaces={32} rating={3.0} src='https://unsplash.com/photos/Ipv_MNTzcQI/download?force=true&w=640'/>
                                <LocationCard name='Narnia' mustSeePlaces={29} rating={4.6} src='https://unsplash.com/photos/H3FBy3i9Q7E/download?force=true&w=640'/>
                                <div className='Page-whitespace' />
                            </HorizontalScroller>
                        </Section>
                        <Section name='Tour'>
                            <HorizontalScroller>
                                <LocationCard name='Stool' mustSeePlaces={0} rating={3.2} src='https://unsplash.com/photos/4kTbAMRAHtQ/download?force=true&w=640'/>
                                <LocationCard name='Refridgerator' mustSeePlaces={1} rating={4.7} src='https://unsplash.com/photos/Eb6hMEhGlKY/download?force=true&w=640'/>
                                <LocationCard name='Bendy Floor Lamp' mustSeePlaces={5} rating={5} src='https://unsplash.com/photos/SVuSA9HJQ8s/download?force=true&w=640'/>
                                <div className='Page-whitespace' />
                            </HorizontalScroller>
                        </Section>
                    </SectionCollection>

                    <h2>Types of Travel</h2>
                    <HorizontalScroller>
                        <CategoryPill icon='🛫' label='All' active/>
                        <CategoryPill icon='👨' label='Solo'/>
                        <CategoryPill icon='⭐' label='Luxury'/>
                        <CategoryPill icon='🦁' label='Safari'/>
                        <CategoryPill icon='🍣' label='Food'/>

                        <CategoryPill icon='🎣' label='Fishing'/>
                        <CategoryPill icon='🦽' label='Ramps'/>
                        <CategoryPill icon='🌵' label='Cactuses'/>
                        <CategoryPill icon='🧅' label='Onion?'/>
                        <div className='Page-whitespace' />
                    </HorizontalScroller>
                </div>
            </div>
        </div>
    )
};

export default Page;
