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
                {contents.map((value, index) => {
                    if (value.type==='directory') {
                        return (
                            <Directory
                                dir={value}
                                key={`${value.type}-${value.id}`}
                                addDir={props.addDir}
                                setShowingWindow={props.setShowingWindow}
                            />
                        )
                    }
                    else if (value.type==='file') {
                        return (
                            <File
                                file={value}
                                key={`${value.type}-${value.id}`}
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
            <Error>This directory is empty.</Error>
        )
    }
}

export default Contents;