import React, { useState, useEffect } from 'react';
import { Window, WindowBar, WindowKind, WindowKindImg, WindowKindName, WindowPill, NoBgButton, WindowButtons, WindowButton, ActiveWindows, MarkdownContainer } from '../styles';
import ReactMarkdown from 'react-markdown';
import file_icon from '../../images/file.png' ;
import '../../App.css';


function DocumentWindow(props) {
    const [doc, setDoc] = useState(props.doc);
    const [fullScreen, setFullScreen] = useState(props.isDocFullScreen);
    const [text, setText] = useState("");
    const [zIndex, setZIndex] = useState(props.zIndex);

    useEffect(() => {
        setDoc(props.doc);
    }, [props.doc])

    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    useEffect(() => {
        setFullScreen(props.isDocFullScreen);
    }, [props.isDocFullScreen]);

    const hide = () => {
        props.removeFromShowingNow('doc');
        props.setShowingDocWindow(false);
    }

    const expand = () => {
        props.addToShowingNow('doc');
        const curr = fullScreen;
        setFullScreen(!curr);
        props.setIsDocFullScreen(!curr);
    }

    useEffect(() => {
        import (`../../documents/${doc.type}${doc.id}.md`)
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
                    <WindowButton onClick={props.closeAllDocs} >
                        &#10060;
                    </WindowButton>
                </WindowButtons>
            </WindowBar>
            <MarkdownContainer>
                <ReactMarkdown children={text} />
            </MarkdownContainer>
        </Window>
    )
}

export default DocumentWindow;