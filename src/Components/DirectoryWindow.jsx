import React, { useState, useEffect } from 'react';
import Contents from './Contents';
import { Window, WindowBar, WindowKind, WindowKindImg, WindowPill, NoBgButton, WindowButtons, ActiveWindows } from './styles';
import dir_icon from '../images/folder.png';
import '../App.css';

function DirectoryWindow(props) {
    const [dir, setDir] = useState(props.dir);
    const [fullScreen, setFullScreen] = useState(false);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

    return (
        <Window fullScreen={fullScreen}>
            <WindowBar>
                <WindowKind>
                    <WindowKindImg src={dir_icon} />
                    <div>Directories manager</div>
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
                    <button onClick={()=>props.setShowingDirWindow(false)}>
                        &#10134;
                    </button>
                    <button onClick={()=>setFullScreen(!fullScreen)}>
                        &#11035;
                    </button>
                    <button onClick={props.closeAllDirs} >
                        &#10060;
                    </button>
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