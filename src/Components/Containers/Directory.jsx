import React, { useState, useEffect } from 'react';
import folder_icon from '../../images/folder.png';
import { Container, Img, Name } from '../styles';


function Directory(props) {
    const [dir, setDir] = useState(props.dir);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

        return (
            <Container
                mobile={window.innerWidth<400}
                onDoubleClick={()=>props.addDir(dir)}
                preview={props.preview}>
                <Img
                    preview={props.preview}
                    src={folder_icon}
                />
                <Name preview={props.preview}>
                    {dir.name}
                </Name>
            </Container>
        )
}

export default Directory;