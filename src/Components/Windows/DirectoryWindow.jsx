import React, { useState, useEffect } from 'react';
import Contents from '../Containers/Contents';
import { Window, WindowBar, WindowKind, WindowKindImg, WindowKindName, WindowPill, NoBgButton, WindowButtons, WindowButton, ActiveWindows } from '../styles';
import dir_icon from '../../images/folder.png';
import '../../App.css';

function DirectoryWindow(props) {
    const [dir, setDir] = useState(props.dir);
    const [fullScreen, setFullScreen] = useState(props.isDirFullScreen);
    const [zIndex, setZIndex] = useState(props.zIndex);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    useEffect(() => {
        setFullScreen(props.isDirFullScreen);
    }, [props.isDirFullScreen])

    const hide = () => {
        props.removeFromShowingNow('dir');
        props.setShowingDirWindow(false);
    }

    const expand = () => {
        props.addToShowingNow('dir');
        const curr = fullScreen;
        setFullScreen(!curr);
        props.setIsDirFullScreen(!curr)
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
                    {fullScreen &&
                        <WindowButton onClick={expand}>
                            ☐
                        </WindowButton>
                    }
                    {!fullScreen &&
                        <WindowButton onClick={expand}>
                            &#11035;
                        </WindowButton>
                    }
                    <WindowButton onClick={props.closeAllDirs} >
                        &#10006;
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