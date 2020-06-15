import React, { useRef } from 'react'
import './MemePanel.css'
import Meme from './Meme';

import { BsFillTrashFill, BsDownload } from "react-icons/bs";

import html2canvas from 'html2canvas';
import download from 'downloadjs';

const MemePanel = (props) => {
    
    const meme = props.meme;

    const memeRef = useRef(null);
    const downloadMeme = () => {
        html2canvas(memeRef.current, {
            useCORS: true,
        }).then((canvas) => {
            const data = canvas.toDataURL('image/png');
            download(data, 'mymeme.png');
        });
    }

    const deleteThisMeme = () => {
        props.deleteCallback(meme.key);
    }

    // figure out image host
    let hostName;
    try {
        hostName = new URL(meme.src).hostname;
    } catch {
        hostName = 'unknown source';
    }

    // render
    return (
        <div className='MemePanel'>
            <Meme {...meme} memeRef={memeRef} />

            <div className='MemePanel-overlay'>
                <div className='MemePanel-actions'>
                    <BsDownload className='MemePanel-download' size='2em' onClick={downloadMeme}/>
                    <BsFillTrashFill className='MemePanel-delete' size='2em' onClick={deleteThisMeme}/>
                </div>
                <div className='MemePanel-src'>{hostName}</div>
            </div>
        </div>
    )
}

export default MemePanel
