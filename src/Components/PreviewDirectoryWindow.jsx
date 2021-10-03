import React, { useState, useEffect } from 'react';
import Contents from './Contents';
import { PreviewSmallWindow, WindowBar, WindowKindImg, WindowKindName } from './styles';
import dir_icon from '../images/folder.png';
import '../App.css';

function PreviewDirectoryWindow(props) {
    const [dir, setDir] = useState(props.dir);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

    return (
        <PreviewSmallWindow>
            <WindowBar preview={true}>
                <WindowKindImg preview={true} src={dir_icon} />
                <WindowKindName preview={true}>Directories manager</WindowKindName>
            </WindowBar>
            <div style={{'marginTop': '6px'}} />
            <Contents
                preview={true}
                contents={dir.contents}
                openDirectories={props.openDirectories}
                currentDirectory={dir}
            />
        </PreviewSmallWindow>
    )
}

export default PreviewDirectoryWindow;