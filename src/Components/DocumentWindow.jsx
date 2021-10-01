import React, { useState, useEffect } from 'react';
import { Window, WindowBar, WindowPill, NoBgButton, WindowButtons, ActiveWindows } from './styles';
import ReactMarkdown from 'react-markdown';
import '../App.css';


function DocumentWindow(props) {
    const [doc, setDoc] = useState(props.doc);
    const [fullScreen, setFullScreen] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        setDoc(props.doc);
    }, [props.doc])

    useEffect(() => {
        import (`../documents/${doc.type}${doc.id}.md`)
        .then(res => { 
            fetch(res.default)
            .then(res => { return res.text() })
            .then(data => { setText(data)} )
        })
    }, [doc])

    return (
        <Window fullScreen={fullScreen}>
            <WindowBar>
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
                    <button onClick={()=>props.setShowingDocWindow(false)}>
                        &#10134;
                    </button>
                    <button onClick={()=>setFullScreen(!fullScreen)}>
                        &#11035;
                    </button>
                    <button onClick={props.closeAllDocs} >
                        &#10060;
                    </button>
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