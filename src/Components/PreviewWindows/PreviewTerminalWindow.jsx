import React, { useState, useEffect } from 'react';
import {
    PreviewSmallWindow, WindowBar,
    WindowKindImg, WindowKindName,
    TerminalLine, TerminalBody
} from '../styles';
import terminal_icon from '../../images/cmd.png';
import '../../App.css';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

function PreviewTerminalWindow(props) {

    const [logo, setLogo] = useState('');

    useEffect(() => {
        figlet.parseFont('Standard', standard);
        figlet.text('CMD', {
            font: 'Standard',
        }, function(err, data) {
            console.log(data);
            setLogo(data);
        });
    }, [])

    return (
        <PreviewSmallWindow>
            <WindowBar preview={true}>
                <WindowKindImg preview={true} src={terminal_icon} />
                <WindowKindName preview={true}>Terminal</WindowKindName>
            </WindowBar>
            <div style={{'marginTop': '10px'}} />
            <TerminalBody preview={true}>
                <TerminalLine preview={true}>
                    <pre>{logo}</pre>
                </TerminalLine>
            </TerminalBody>
        </PreviewSmallWindow>
    )
}

export default PreviewTerminalWindow;