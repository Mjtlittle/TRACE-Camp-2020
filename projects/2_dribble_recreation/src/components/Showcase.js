import React from 'react'
import './Showcase.css';

const Showcase = (props) => {

    const [currentPage, setCurrentPage] = React.useState(0);

    const pageCount = React.Children.count(props.children);

    const zero_pad = (number, digits) => {
        return `000${number}`.slice(-2);
    }

    const next_page = () => {
        setCurrentPage((currentPage + 1) % pageCount);
    }

    // setup auto change
    React.useEffect(() => {
        const interval = setInterval(next_page, 6000);
        return () => clearInterval(interval);
    })

    return (
        <div className='Showcase'>
            
            {/* Images */}
            {React.Children.map(props.children, (child, index) => (
                <div className={'ShowcaseImage-' + (index === currentPage ? 'active' : 'hidden')}>
                    {child}
                </div>
            ))}

            {/* Brand Name (top left) */}
            <div className='Showcase-brandname'>{ props.brandName }</div>
            
            {/* Current Page Controls */}
            <div className='Showcase-progress'>
                01
                {React.Children.map(props.children, (child, index) => (
                    <div className='Showcase-segment-hitbox' onClick={() => setCurrentPage(index)}>
                        <div className='Showcase-segment' style={{opacity: (index === currentPage ? 1.0 : 0.5 ) }}/>
                    </div>
                ))}
                {zero_pad(pageCount)}
            </div>
        </div>
    )
}

Showcase.defaultProps = {
    images: null,
    brandName: 'Bing Bong Inc.'
}

export default Showcase
