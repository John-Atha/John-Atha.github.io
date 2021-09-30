import React, { useState, useEffect } from 'react';
import { Error } from './styles.js';
import Directory from './Directory.jsx';
import File from './File.jsx';

function Contents(props) {
    const [contents, setContents] = useState(props.contents);

    useEffect(() => {
        setContents(props.contents);
    }, [props.contents])

    if (contents.length) {
        return (
            <div style={{'padding': '10px'}}>
                {contents.map((value, index) => {
                    if (value.type==='directory') {
                        return (
                            <Directory dir={value} key={index} open={props.setCurrentDir} setShowingWindow={props.setShowingWindow} />
                        )
                    }
                    else if (value.type==='file') {
                        return (
                            <File file={value} key={index} />
                        )
                    }
                    else {
                        return (
                            null
                        )
                    }
                })}
            </div>
        )
    }
    else {
        return (
            <Error>This directory is empty.</Error>
        )
    }
}

export default Contents;