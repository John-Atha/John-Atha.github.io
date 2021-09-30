import React, { useState, useEffect } from 'react';
import Contents from './Contents';
import { Window, WindowBar, WindowName, WindowButtons } from './styles';

function DirectoryWindow(props) {
    const [dir, setDir] = useState(props.dir);
    const [fullScreen, setFullScreen] = useState(false);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

    return (
        <Window fullScreen={fullScreen}>
            <WindowBar>
                <WindowName current={true}>{dir.name}</WindowName>
                <WindowButtons>
                    <button onClick={()=>props.setShowingWindow(false)}>
                        &#10134;
                    </button>
                    <button onClick={()=>setFullScreen(true)}>
                        &#11035;
                    </button>
                    <button onClick={()=>{props.setShowingWindow(false);props.setCurrentDir(null);}} >
                        &#10060;
                    </button>
                </WindowButtons>
            </WindowBar>
            <div style={{'marginTop': '40px'}} />
            <Contents contents={dir.contents} setCurrentDir={props.setCurrentDir}  setShowingWindow={props.setShowingWindow}/>
        </Window>
    )
}

export default DirectoryWindow;