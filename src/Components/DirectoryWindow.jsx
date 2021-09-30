import React, { useState, useEffect } from 'react';
import Contents from './Contents';
import { Window, WindowBar, WindowName, WindowButtons, ActiveWindows } from './styles';

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
                            <WindowName
                                current={value===dir}
                                key={`${value.type}-${value.id}`}
                                onClick={()=>props.addDir(value)}>
                                {value.name}
                            </WindowName>
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
            <div style={{'marginTop': '40px'}} />
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