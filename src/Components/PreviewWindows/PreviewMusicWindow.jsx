import React from 'react';
import { PreviewSmallWindow, WindowBar, WindowKindName } from '../styles';
import '../../App.css';

function PreviewMusicWindow(props) {

    return (
        <PreviewSmallWindow>
            <WindowBar preview={true}>
                <div style={{'fontSize': '1rem'}}>&#127911;</div>
                <WindowKindName preview={true}>Music Player</WindowKindName>
            </WindowBar>
            <div style={{'marginTop': '26px'}} />
            <div>Lofi hip hop</div>
        </PreviewSmallWindow>
    )
}

export default PreviewMusicWindow;