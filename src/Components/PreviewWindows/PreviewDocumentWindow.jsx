import React, { useState, useEffect } from 'react';
import { PreviewSmallWindow, WindowBar, WindowKindImg, WindowKindName, MarkdownContainer } from '../styles';
import ReactMarkdown from 'react-markdown';
import file_icon from '../../images/file.png' ;
import '../../App.css';


function PreviewDocumentWindow(props) {
    const [doc, setDoc] = useState(props.doc);
    const [text, setText] = useState("");

    useEffect(() => {
        setDoc(props.doc);
    }, [props.doc])

    useEffect(() => {
        import (`../../documents/${doc.type}${doc.id}.md`)
        .then(res => { 
            fetch(res.default)
            .then(res => { return res.text() })
            .then(data => { setText(data)} )
        })
    }, [doc])

    return (
        <PreviewSmallWindow>
            <WindowBar preview={true}>
                    <WindowKindImg preview={true} src={file_icon} />
                    <WindowKindName preview={true}>
                        Files manager
                    </WindowKindName>
            </WindowBar>
            <MarkdownContainer preview={true}>
                <ReactMarkdown children={text} />
            </MarkdownContainer>
        </PreviewSmallWindow>
    )
}

export default PreviewDocumentWindow;