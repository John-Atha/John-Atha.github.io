import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavBarEmoji } from './styles';

function TopNavbar() {
    return(
        <Navbar variant='dark' expand="sm" fixed="top" style={{'padding': '2px 0px', 'height': '30px', 'backgroundColor': 'rgba(163, 13, 13, 0.6)'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{'margin': 'auto'}}>
                    <Nav.Link style={{'color': 'black'}}>
                        {new Date().toString().slice(0, 21)}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default TopNavbar;