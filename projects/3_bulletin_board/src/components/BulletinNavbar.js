import React from 'react'

import { Navbar, Nav } from 'react-bootstrap';

const BulletinNavbar = (props) => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {props.names.map((name) => {
                        return <Nav.Link href={'#'+name}>{name}</Nav.Link>
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BulletinNavbar
