import React, { useState, useEffect } from 'react';
import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavbarImg, TabsCounterImg, TabsCounterContainer, NavBarEmoji } from './styles';
import PreviewDirectoryWindow from './PreviewDirectoryWindow';
import PreviewDocumentWindow from './PreviewDocumentWindow';
import PreviewGameWindow from './PreviewGameWindow';
import PreviewTerminalWindow from './PreviewTerminalWindow';
import dir_icon from '../images/folder.png';
import file_icon from '../images/file.png';
import cmd_icon from '../images/cmd.png';
import github_icon from '../images/Octocat.png';
import '../App.css';

function MyNavbar(props) {
    const [openDirectories, setOpenDirectories] = useState(props.openDirectories);
    const [openDocs, setOpenDocs] = useState(props.openDocs);
    
    const [currentDirectory, setCurrentDirectory] = useState(props.currentDirectory);
    const [showingDirPreviewTab, setShowingDirPreviewTab] = useState(false);


    const [currentDoc, setCurrentDoc] = useState(props.currentDoc);
    const [showingDocPreviewTab, setShowingDocPreviewTab] = useState(false);

    const [game, setGame] = useState(props.game);
    const [showingGamePreviewTab, setShowingGamePreviewTab] = useState(false);

    const [showingTerminalPreviewTab, setShowingTerminalPreviewTab] = useState(false);

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

    useEffect(() => {
        setGame(props.game);
    }, [props.game])

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
                if (props.showingDocWindow  && !props.showingDirWindow && !props.showingGameWindow && !props.showingTerminalWindow) {
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
                if (props.showingDirWindow && !props.showingDocWindow && !props.showingGameWindow && !props.showingTerminalWindow) {
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
                    if (props.showingGameWindow && !props.showingDocWindow && !props.showingDirWindow && !props.showingTerminalWindow) {
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

    const updateTerminal = () => {
        if (!props.isTerminalRunning) {
            props.addToShowingNow('terminal');
            props.setShowingTerminalWindow(true);
            props.setIsTerminalRunning(true);
        }
        else {
            if (props.showingNow.length) {
                const curr = props.showingNow[props.showingNow.length-1];
                if (curr==='terminal') {
                    if (props.showingTerminalWindow) {
                        props.setShowingTerminalWindow(false);
                        props.removeFromShowingNow('terminal');
                    }
                    else {
                        props.setShowingTerminalWindow(true);
                    }
                }
                else {
                    if (props.showingTerminalWindow && !props.showingDirWindow && !props.showingDocWindow && !props.showingGameWindow) {
                        props.removeFromShowingNow('terminal');
                        props.setShowingTerminalWindow(false);
                    }
                    else {
                        props.addToShowingNow('terminal');
                        props.setShowingTerminalWindow(true);
                    }
                }
            }
            else {
                props.addToShowingNow('terminal');
                props.setShowingTerminalWindow(true);
            }
        }
    }

    return(
        <Navbar variant='dark' fixed="bottom" className='my-bottom-navbar'>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{'margin': 'auto'}}>
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

                    {!props.isTerminalRunning &&
                        <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip>
                                    <b>Terminal</b>
                                </Tooltip>
                            }
                        >
                            <Nav.Link href="#" onClick={updateTerminal} >
                                <NavbarImg case={'terminal'} src={cmd_icon} />
                            </Nav.Link>
                        </OverlayTrigger>
                    }

                    {props.isTerminalRunning &&
                        <Nav.Link 
                            onClick={updateTerminal}
                            onMouseOver={()=>setShowingTerminalPreviewTab(true)}
                            onMouseLeave={()=>setShowingTerminalPreviewTab(false)}
                        >
                            <NavbarImg case={'terminal'} src={cmd_icon} />
                            {showingTerminalPreviewTab &&
                                <PreviewTerminalWindow
                                    currDir={props.currDir}    
                                />
                            }
                            <TabsCounterContainer>
                                <TabsCounterImg>&#128310;</TabsCounterImg>
                            </TabsCounterContainer>

                        </Nav.Link>
                    }

                    {!props.playing &&
                        <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip>
                                    <b>Game machine</b>
                                </Tooltip>
                            }
                        >
                            <Nav.Link href="#" onClick={updatePlaying}>
                                <NavBarEmoji>&#127923;</NavBarEmoji>
                            </Nav.Link>
                        </OverlayTrigger>                    
                    }

                    {props.playing &&
                        <Nav.Link 
                            onClick={updatePlaying}
                            onMouseOver={()=>setShowingGamePreviewTab(true)}
                            onMouseLeave={()=>setShowingGamePreviewTab(false)}
                        >
                            <NavBarEmoji>&#127923;</NavBarEmoji>
                            {showingGamePreviewTab &&
                                <PreviewGameWindow
                                    game={game}
                                />
                            }
                            <TabsCounterContainer>
                                {props.playing && 
                                    <TabsCounterImg>&#128310;</TabsCounterImg>
                                }
                            </TabsCounterContainer>
                        </Nav.Link>                    
                    }

                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip>
                                <b>Github profile</b>
                            </Tooltip>
                        }
                    >
                        <Nav.Link href="https://www.github.com/John-Atha" target="_blank" rel='noopener noreferrer'>
                            <NavbarImg case={'github'} src={github_icon} />
                        </Nav.Link>
                    </OverlayTrigger>
                    



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;