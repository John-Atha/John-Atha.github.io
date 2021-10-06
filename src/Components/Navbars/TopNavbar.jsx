import React, { useState }from 'react';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import logout_icon from '../../images/logout.png';

function TopNavbar() {
    const [showingModal, setShowingModal] = useState(false);

    const restart = () => {
        sessionStorage.removeItem('visited');
        window.location.reload();
    }

    return(
        <Navbar variant='dark' fixed="top" style={{'padding': '2px 0px', 'height': '30px', 'backgroundColor': 'rgba(163, 13, 13, 0.6)'}}>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{'margin': 'auto'}}>
                    <Nav.Link style={{'color': 'white'}}>
                        {new Date().toString().slice(0, 21)}
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link style={{'padding': '0px 3px', 'marginTop': '-5px'}} onClick={()=>setShowingModal(true)}>
                        <img style={{'width': '20px', 'height': 'auto'}} src={logout_icon} alt='logout' />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {showingModal &&
                <Modal.Dialog style={{'position': 'fixed', 'top': '10vh', 'left': '50%', 'marginLeft': '-180px', 'width': '360px'}}>
                    <Modal.Header>
                        <Modal.Title>Turn off</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p style={{'fontSize': '0.9rem', 'marginBottom': '0px'}}>Are you sure you want to turn off your computer?</p>
                        <p style={{'fontSize': '0.9rem', 'marginBottom': '0px'}}>You will lose all of your unsaved work.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setShowingModal(false)}>No, do not turn off</Button>
                        <Button variant="danger" onClick={restart}>Yes, turn off</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            }
        </Navbar>
    );

}

export default TopNavbar;