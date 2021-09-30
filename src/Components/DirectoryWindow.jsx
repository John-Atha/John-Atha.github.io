import React, { useState, useEffect } from 'react';
import Contents from './Contents';
import { Window, WindowBar, WindowPill, NoBgButton, WindowButtons, ActiveWindows } from './styles';
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
                    <button onClick={()=>props.setShowingWindow(false)}>
                        &#10134;
                    </button>
                    <button onClick={()=>setFullScreen(true)}>
                        &#11035;
                    </button>
                    <button onClick={props.closeAll} >
                        &#10060;
                    </button>
                </WindowButtons>
            </WindowBar>
            <div style={{'marginTop': '60px'}} />
            <Contents
                contents={dir.contents}
                setShowingWindow={props.setShowingWindow}
                addDir={props.addDir}
                removeDir={props.removeDir}
                openDirectories={props.openDirectories}
                currentDirectory={props.currentDirectory} />
        </Window>
    )
}

export default DirectoryWindow;