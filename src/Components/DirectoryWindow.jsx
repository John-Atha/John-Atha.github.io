import React, { useState, useEffect } from 'react';
import Contents from './Contents';
import { Window, WindowBar, WindowKind, WindowKindImg, WindowKindName, WindowPill, NoBgButton, WindowButtons, WindowButton, ActiveWindows } from './styles';
import dir_icon from '../images/folder.png';
import '../App.css';

function DirectoryWindow(props) {
    const [dir, setDir] = useState(props.dir);
    const [fullScreen, setFullScreen] = useState(false);
    const [zIndex, setZIndex] = useState(props.zIndex);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    const hide = () => {
        props.setShowingNow('doc');
        props.setShowingDirWindow(false);
    }

    const expand = () => {
        props.setShowingNow('dir');
        setFullScreen(!fullScreen);
    }

    return (
        <Window fullScreen={fullScreen} zIndex={zIndex}>
            <WindowBar>
                <WindowKind>
                    <WindowKindImg src={dir_icon} />
                    <WindowKindName>Directories manager</WindowKindName>
                </WindowKind>
                <ActiveWindows>
                    {props.openDirectories.map((value) => {
                        return(
                            <WindowPill
                                current={value===dir}
                                key={`${value.type}-${value.id}`}>
                                    <NoBgButton onClick={()=>props.addDir(value)}>
                                        {value.name}
                                    </NoBgButton>
                                    <NoBgButton onClick={()=>props.removeDir(value)} >
                                        &#10006;
                                    </NoBgButton>

                            </WindowPill>
                        )
                    })}
                </ActiveWindows>
                <WindowButtons>
                    <WindowButton onClick={hide}>
                        &#10134;
                    </WindowButton>
                    <WindowButton onClick={expand}>
                        &#11035;
                    </WindowButton>
                    <WindowButton onClick={props.closeAllDirs} >
                        &#10060;
                    </WindowButton>
                </WindowButtons>
            </WindowBar>
            <div style={{'marginTop': '60px'}} />
            <Contents
                contents={dir.contents}
                setShowingDirWindow={props.setShowingDirWindow}
                addDir={props.addDir}
                removeDir={props.removeDir}
                openDirectories={props.openDirectories}
                currentDirectory={props.currentDirectory}
                addDoc={props.addDoc} />
        </Window>
    )
}

export default DirectoryWindow;