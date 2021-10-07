import React, { useState, useEffect } from 'react';
import { ContentsContainer, Error } from '../styles.js';
import Directory from './Directory.jsx';
import File from './File.jsx';
import GithubUrl from './GithubUrl';
import DeploymentUrl from './DeploymentUrl';

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
                                breakLine={props.case==='desktop' && window.innerWidth>400 && value.name==='about_me'}
                            />
                        )
                    }
                    else if (value.type==='github-url') {
                        return (
                            <GithubUrl
                                preview={props.preview}
                                project={value}
                                key={value.url}
                            />
                        )
                    }
                    else if (value.type==='deployment-url') {
                        return (
                            <DeploymentUrl
                                preview={props.preview}
                                project={value}
                                key={value.url}    
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
            <Error preview={props.preview}>
                This directory is empty.
            </Error>
        )
    }
}

export default Contents;