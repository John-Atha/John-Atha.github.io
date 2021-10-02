import React, { useState, useEffect } from 'react';
import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavbarImg, TabsCounterImg, TabsCounterContainer, NavBarEmoji } from './styles';
import dir_icon from '../images/folder.png';
import file_icon from '../images/file.png';
import '../App.css';

function MyNavbar(props) {
    const [openDirectories, setOpenDirectories] = useState(props.openDirectories);
    const [openDocs, setOpenDocs] = useState(props.openDocs);

    useEffect(() => {
        setOpenDirectories(props.openDirectories);
    }, [props.openDirectories])

    useEffect(() => {
        setOpenDocs(props.openDocs);
    }, [props.openDocs])

    const updateDocsVisibility = () => {
        if (props.showingNow==='doc') {
            if (props.showingDocWindow) {
                props.setShowingDocWindow(false);
            }
            else {
                props.setShowingDocWindow(true);
            }
        }
        else {
            if (!props.showingDocWindow) {
                props.setShowingNow('doc');
                props.setShowingDocWindow(true);    
            }
            else {
                props.setShowingNow('dir');
                props.setShowingDocWindow(false);    
            }
        }
    }

    const updateDirsVisibility = () => {
        if (props.showingNow==='dir') {
            if (props.showingDirWindow) {
                props.setShowingDirWindow(false);
            }
            else {
                props.setShowingDirWindow(true);
            }
        }
        else {
            if (!props.showingDirWindow) {
                props.setShowingNow('dir');
                props.setShowingDirWindow(true);    
            }
            else {
                props.setShowingDirWindow(false);
            }
        }
    }

    return(
        <Navbar variant='dark' expand="sm" fixed="bottom" style={{'padding': '0px 3px', 'height': '50px', 'backgroundColor': 'rgb(48, 47, 46)'}}>
            <Navbar.Brand href="#home">Th3_Order_Of_th3_pHOenix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {openDirectories.length!==0 &&
                    <OverlayTrigger
                        placement='top'
                        overlay={
                          <Tooltip>
                            <b>Directories</b> manager
                          </Tooltip>
                        }
                    >
                        <Nav.Link onClick={updateDirsVisibility} tooltip='Directories manager'>
                            <NavbarImg src={dir_icon} />
                            <TabsCounterContainer>
                                {openDirectories.map((value) => {
                                    return (
                                        <TabsCounterImg key={value.id}>&#128310;</TabsCounterImg>
                                    )
                                })}                    
                            </TabsCounterContainer>
                        </Nav.Link>
                    </OverlayTrigger>
                }
                {openDocs.length!==0 &&
                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip>
                                <b>Documents</b> manager
                            </Tooltip>
                        }
                    >
                        <Nav.Link onClick={updateDocsVisibility}>
                            <NavbarImg src={file_icon} />
                            <TabsCounterContainer>
                                {openDocs.map((value) => {
                                    return (
                                        <TabsCounterImg key={value.id}>&#128310;</TabsCounterImg>
                                    )
                                })}                    
                            </TabsCounterContainer>
                        </Nav.Link>
                    </OverlayTrigger>
                }
                <OverlayTrigger
                    placement='top'
                    overlay={
                        <Tooltip>
                            <b>Music</b> player
                        </Tooltip>
                    }
                >
                    <Nav.Link href="#">
                        <NavBarEmoji>&#127911;</NavBarEmoji>
                    </Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                    placement='top'
                    overlay={
                        <Tooltip>
                            <b>Game</b> player
                        </Tooltip>
                    }
                >
                    <Nav.Link href="#">
                        <NavBarEmoji>&#127923;</NavBarEmoji>
                    </Nav.Link>
                </OverlayTrigger>
            </Nav>
            <Nav>
                <Nav.Link href="#">
                    <NavBarEmoji>&#128266;</NavBarEmoji>
                </Nav.Link>
                <Nav.Link>
                    {new Date().toString().slice(0, 21)}
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;