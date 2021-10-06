import React, { useState, useEffect } from 'react';
import {
    Window, WindowBar, WindowKind, WindowBody,
    WindowKindName, WindowButtons, WindowButton,
} from '../styles';
import '../../App.css';
import ReactPlayer from 'react-player';

function MusicWindow(props) {
    const [fullScreen, setFullScreen] = useState(props.isDirFullScreen);
    const [zIndex, setZIndex] = useState(props.zIndex);

    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    useEffect(() => {
        setFullScreen(props.isDirFullScreen);
    }, [props.isDirFullScreen])

    const hide = () => {
        props.removeFromShowingNow('music');
        props.setShowingMusicWindow(false);
    }

    const expand = () => {
        props.addToShowingNow('music');
        const curr = fullScreen;
        setFullScreen(!curr);
        props.setIsMusicFullScreen(!curr)
    }

    return (
        <Window fullScreen={fullScreen} zIndex={zIndex} case='music' showing={props.showingMusicWindow}>
            <WindowBar>
                <WindowKind>
                    <div style={{'fontSize': '1.3rem'}}>&#127911;</div>
                    <WindowKindName>Music Player</WindowKindName>
                </WindowKind>

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
                    <WindowButton onClick={props.closeMusic} >
                        &#10060;
                    </WindowButton>
                </WindowButtons>

            </WindowBar>

            <WindowBody>
                <h3  style={{'text-align': 'center'}}>lofi hip hop radio - beats to relax/study to</h3>
                <div style={{'text-align': 'center'}}>src: https://www.youtube.com/watch?v=5qap5aO4i9A</div>
                <div style={{'marginTop': '10px'}} />
                <ReactPlayer style={{'margin': 'auto'}} url='https://www.youtube.com/watch?v=5qap5aO4i9A' />
            </WindowBody>
            

        </Window>
    )
}

export default MusicWindow;