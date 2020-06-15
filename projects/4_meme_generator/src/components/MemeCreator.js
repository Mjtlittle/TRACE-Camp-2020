import React, { useState, useRef, useEffect } from 'react'

import './MemeCreator.css'

import Meme from './Meme';

import { Form, Button, Modal} from 'react-bootstrap';

import { v4 as uuid } from 'uuid';

import axios from 'axios';

const MemeCreator = (props) => {

    const defaultMeme = {
        topCaption: '',
        bottomCaption: '',
        src: 'https://i.pinimg.com/236x/69/df/48/69df48923f5e1d3c3fb022150d977345.jpg',
        key: uuid(),
        overlayCaptions: false,
    };

    const [ currentMeme, setCurrentMeme ] = useState(defaultMeme);
    const [ pullingImage, setPullingImage ] = useState(false);

    const resetMeme = () => {
        setCurrentMeme(defaultMeme)
    }
    useEffect(resetMeme, []);

    // handle form change
    const handleFormChange = e => {
        const target = e.target;
        const name = target.name;
        const value = name === 'overlayCaptions' ? target.checked : target.value;

        setCurrentMeme({
          ...currentMeme,
          [name]: value
        });
    };

    // handle reference to invisible file input
    const fileFormRef = useRef(null);
    const openUploadPrompt = e => {
        fileFormRef.current.click();
    }

    const handleImageChange = e => {

        setPullingImage(true);

        let reader = new FileReader();
        reader.addEventListener('load', () => {
            setCurrentMeme({
                ...currentMeme,
                src: reader.result,
            });

            setPullingImage(false);
        })
        
        const file = e.target.files[0];
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    // url manipulation/generation
    const randomSrc = () => {

        setPullingImage(true);

        axios.get('https://source.unsplash.com/640x480/?funny').then((response) => {
            
            const image_url = response.request.responseURL;

            setCurrentMeme({
                ...currentMeme,
                src: image_url,
            });

        }).finally(() => {
            setPullingImage(false);
        })
    }

    const clearSrc = () => {
        setCurrentMeme({
            ...currentMeme,
            src: '',
        });
    }

    // call save meme callback
    const saveMeme = () => {
        props.onSaveMeme(currentMeme)
        resetMeme();
        props.handleClose();
    };

    return (
        <Modal
            size='lg'
            show={props.show}
            onHide={props.handleClose}
            animated='true'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Meme Editor
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='MemeCreator-content'>
                <div className='MemeCreator-form'>
                    <Form.Group>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter URL Here'
                            
                            name='src'
                            value={currentMeme.src}
                            onChange={handleFormChange}
                        />
                        <Form.File ref={fileFormRef} style={{display: 'none'}} onChange={handleImageChange} />
                        <div className='MemeCreator-buttonlist mt-2'>
                            <Button className='' onClick={openUploadPrompt} disabled={pullingImage}>Upload Image</Button>
                            <Button className='' variant='warning' onClick={randomSrc} disabled={pullingImage}>Random Image</Button>
                            <Button className='' variant='danger' onClick={clearSrc}>Clear URL</Button>
                        </div>
                    </Form.Group>

                    <hr />
                    
                    <Form.Group>
                        <Form.Label>Top Caption</Form.Label>
                        <Form.Control
                            as='textarea'
                            placeholder='Top Text Here' 

                            name='topCaption'
                            value={currentMeme.topCaption}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Bottom Caption</Form.Label>
                        <Form.Control
                            as='textarea'
                            placeholder='Bottom Text Here' 

                            name='bottomCaption'
                            value={currentMeme.bottomCaption}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check 
                            type='checkbox'
                            label='Overlay Captions on Image'
                            
                            name='overlayCaptions'
                            checked={currentMeme.overlayCaptions}
                            onChange={handleFormChange} />
                    </Form.Group>
                </div>
                <div className='MemeCreator-preview'>
                    <Meme {...currentMeme} />
                </div>
            </Modal.Body>
            <Modal.Footer className='MemeCreator-buttonlist'>
                <Button variant='info' onClick={saveMeme}>Save to Collection</Button>
                <Button variant='danger' onClick={resetMeme}>Clear Meme</Button>
            </Modal.Footer>
        </Modal>
    )
}

MemeCreator.defaultProps = {
    onMemeSave: (m) => {},
}

export default MemeCreator
