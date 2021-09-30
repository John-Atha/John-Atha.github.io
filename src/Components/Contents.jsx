import React, { useState, useEffect } from 'react';
import { } from './styles.js';
import Directory from './Directory.jsx';
import File from './File.jsx';

function Contents(props) {
    const [contents, setContents] = useState(props.contents);

    useEffect(() => {
        setContents(props.contents);
    }, [props.contents])

    return (
        <div>
            {contents.map((value, index) => {
                if (value.type==='directory') {
                    return (
                        <Directory dir={value} key={index} />
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

export default Contents;