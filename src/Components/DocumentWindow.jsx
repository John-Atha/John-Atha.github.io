import React, { useState, useEffect } from 'react';
import { Window, WindowBar, WindowKind, WindowKindImg, WindowKindName, WindowPill, NoBgButton, WindowButtons, WindowButton, ActiveWindows } from './styles';
import ReactMarkdown from 'react-markdown';
import file_icon from '../images/file.png' ;
import '../App.css';


function DocumentWindow(props) {
    const [doc, setDoc] = useState(props.doc);
    const [fullScreen, setFullScreen] = useState(false);
    const [text, setText] = useState("");
    const [zIndex, setZIndex] = useState(props.zIndex);

    useEffect(() => {
        setDoc(props.doc);
    }, [props.doc])

    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    const hide = () => {
        props.setShowingNow('dir');
        props.setShowingDocWindow(false);
    }

    const expand = () => {
        props.setShowingNow('doc');
        setFullScreen(!fullScreen);
    }

    useEffect(() => {
        import (`../documents/${doc.type}${doc.id}.md`)
        .then(res => { 
            fetch(res.default)
            .then(res => { return res.text() })
            .then(data => { setText(data)} )
        })
    }, [doc])

    return (
        <Window fullScreen={fullScreen} zIndex={zIndex}>
            <WindowBar>
                <WindowKind>
                    <WindowKindImg src={file_icon} />
                    <WindowKindName>Files <div className='break' /> manager</WindowKindName>
                </WindowKind>
                <ActiveWindows>
                    {props.openDocs.map((value) => {
                        return(
                            <WindowPill
                                current={value===doc}
                                key={`${value.type}-${value.id}`}>
                                    <NoBgButton onClick={()=>props.addDoc(value)}>
                                        {value.name}
                                    </NoBgButton>
                                    <NoBgButton onClick={()=>props.removeDoc(value)} >
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
                    <WindowButton onClick={props.closeAllDocs} >
                        &#10060;
                    </WindowButton>
                </WindowButtons>
            </WindowBar>
            <div style={{'marginTop': '60px'}} />
            <div style={{'color': 'white', 'padding': '0px 10px'}}>
                <ReactMarkdown children={text} />
            </div>
        </Window>
    )
}

export default DocumentWindow;