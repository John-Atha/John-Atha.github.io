import React, { useState, useEffect } from 'react';
import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavbarImg, TabsCounterImg, TabsCounterContainer, NavBarEmoji } from './styles';
import PreviewDirectoryWindow from './PreviewDirectoryWindow';
import PreviewDocumentWindow from './PreviewDocumentWindow';
import dir_icon from '../images/folder.png';
import file_icon from '../images/file.png';
import '../App.css';

function MyNavbar(props) {
    const [openDirectories, setOpenDirectories] = useState(props.openDirectories);
    const [openDocs, setOpenDocs] = useState(props.openDocs);
    
    const [currentDirectory, setCurrentDirectory] = useState(props.currentDirectory);
    const [showingDirPreviewTab, setShowingDirPreviewTab] = useState(false);


    const [currentDoc, setCurrentDoc] = useState(props.currentDoc);
    const [showingDocPreviewTab, setShowingDocPreviewTab] = useState(false);

    useEffect(() => {
        setOpenDirectories(props.openDirectories);
    }, [props.openDirectories])

    useEffect(() => {
        setOpenDocs(props.openDocs);
    }, [props.openDocs])

    useEffect(() => {
        setCurrentDirectory(props.currentDirectory);
    }, [props.currentDirectory])

    useEffect(() => {
        setCurrentDoc(props.currentDoc);
    }, [props.currentDoc])

    const updateDocsVisibility = () => {
        // if showing something
        if (props.showingNow.length) {
            const curr = props.showingNow[props.showingNow.length-1];
            // if I have the priority, alternate my showing state
            if (curr==='doc') {
                if (props.showingDocWindow) {
                    props.setShowingDocWindow(false);
                    props.removeFromShowingNow('doc');
                }
                else {
                    props.setShowingDocWindow(true);
                }
            }
            // if I do not have the priority
            else {
                // remove my priority and hide me if I was the only one showing
                if (props.showingDocWindow  && !props.showingDirWindow && !props.showingGameWindow) {
                    props.removeFromShowingNow('doc');
                    props.setShowingDocWindow(false);
                }
                // give me the priority and show me if others are shown too
                else {
                    props.addToShowingNow('doc');
                    props.setShowingDocWindow(true);
                }
            }
        }
        // else give me the priority and show me
        else {
            props.addToShowingNow('doc');
            props.setShowingDocWindow(true);
        }
    }

    const updateDirsVisibility = () => {
        // if showing something
        if (props.showingNow.length) {
            const curr = props.showingNow[props.showingNow.length-1];
            // if I have the priority, alternate my showing state
            if (curr==='dir') {
                if (props.showingDirWindow) {
                    props.setShowingDirWindow(false);
                    props.removeFromShowingNow('dir');
                }
                else {
                    props.setShowingDirWindow(true);
                }
            }
            // if I do not have the priority
            else {
                // remove my priority and hide me if I was the only one showing
                if (props.showingDirWindow && !props.showingDocWindow && !props.showingGameWindow) {
                    props.removeFromShowingNow('dir');
                    props.setShowingDirWindow(false);
                }
                // give me the priority and show me if others are shown too
                else {
                    props.addToShowingNow('dir');
                    props.setShowingDirWindow(true);
                }
            }
        }
        // else give me the priority and show me
        else {
            props.addToShowingNow('dir');
            props.setShowingDirWindow(true);
        }
    }

    const updatePlaying = () => {
        // activate me (priority + showing) if I was deactivated
        if (!props.playing) {
            props.addToShowingNow('game');
            props.setShowingGameWindow(true);
            props.setPlaying(true);
        }
        // if I was already active
        else {
            // if showing something
            if (props.showingNow.length) {
                const curr = props.showingNow[props.showingNow.length-1];
                // if I have the priority, alternate my showing state
                if (curr==='game') {
                    if (props.showingGameWindow) {
                        props.setShowingGameWindow(false);
                        props.removeFromShowingNow('game');
                    }
                    else {
                        props.setShowingGameWindow(true);
                    }
                }
                // if I do not have the priority
                else {
                    // remove my priority and hide me if I was the only one showing
                    if (props.showingGameWindow && !props.showingDocWindow && !props.showingDirWindow) {
                        props.removeFromShowingNow('game');
                        props.setShowingGameWindow(false);
                    }
                    // give me the priority and show me if others are shown too
                    else {
                        props.addToShowingNow('game');
                        props.setShowingGameWindow(true);
                    }
                }
            }
            // else give me the priority and show me
            else {
                props.addToShowingNow('game');
                props.setShowingGameWindow(true);
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
                    <Nav.Link 
                        onClick={updateDirsVisibility}
                        onMouseOver={()=>setShowingDirPreviewTab(true)}
                        onMouseLeave={()=>setShowingDirPreviewTab(false)}
                    >
                        {showingDirPreviewTab &&
                            <PreviewDirectoryWindow
                                openDirectories={openDirectories}
                                dir={currentDirectory}
                            />
                        }
                        <NavbarImg src={dir_icon} />
                        <TabsCounterContainer>
                            {openDirectories.map((value) => {
                                return (
                                    <TabsCounterImg key={value.id}>&#128310;</TabsCounterImg>
                                )
                            })}                    
                        </TabsCounterContainer>
                    </Nav.Link>
                }
                {openDocs.length!==0 &&
                    <Nav.Link
                        onClick={updateDocsVisibility}
                        onMouseOver={()=>setShowingDocPreviewTab(true)}
                        onMouseLeave={()=>setShowingDocPreviewTab(false)}
                    >
                        {showingDocPreviewTab && 
                            <PreviewDocumentWindow
                                doc={currentDoc}
                            />
                        }
                        <NavbarImg src={file_icon} />
                        <TabsCounterContainer>
                            {openDocs.map((value) => {
                                return (
                                    <TabsCounterImg key={value.id}>&#128310;</TabsCounterImg>
                                )
                            })}                    
                        </TabsCounterContainer>
                    </Nav.Link>
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


                <Nav.Link href="#" onClick={updatePlaying} >
                    <NavBarEmoji>&#127923;</NavBarEmoji>
                    <TabsCounterContainer>
                        {props.playing && 
                            <TabsCounterImg>&#128310;</TabsCounterImg>
                        }
                    </TabsCounterContainer>
                </Nav.Link>


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