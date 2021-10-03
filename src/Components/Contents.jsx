import React, { useState, useEffect } from 'react';
import { ContentsContainer, Error } from './styles.js';
import Directory from './Directory.jsx';
import File from './File.jsx';

function Contents(props) {
    const [contents, setContents] = useState(props.contents);

    useEffect(() => {
        setContents(props.contents);
    }, [props.contents])

    if (contents && contents.length) {
        return (
            <ContentsContainer>
                {contents.map(value => {
                    if (value.type==='directory') {
                        return (
                            <Directory
                                preview={props.preview}
                                dir={value}
                                key={`${value.type}-${value.id}`}
                                addDir={props.addDir}
                                setShowingDirWindow={props.setShowingDirWindow}
                            />
                        )
                    }
                    else if (value.type==='file') {
                        return (
                            <File
                                preview={props.preview}
                                file={value}
                                key={`${value.type}-${value.id}`}
                                addDoc={props.addDoc}
                            />
                        )
                    }
                    else {
                        return (
                            null
                        )
                    }
                })}
            </ContentsContainer>
        )
    }
    else {
        return (
            <Error preview={props.preview}>This directory is empty.</Error>
        )
    }
}

export default Contents;