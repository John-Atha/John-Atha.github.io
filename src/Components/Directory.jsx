import React, { useState, useEffect } from 'react';
import folder_icon from '../images/folder.png';
import { Container, Img, Name } from './styles';


function Directory(props) {
    const [dir, setDir] = useState(props.dir);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

    const open = () => {
        props.open(dir);
        props.setShowingWindow(true);
    }

    return (
        <Container onDoubleClick={open}>
            <Img src={folder_icon}/>
            <Name>{dir.name}</Name>
        </Container>
    )
}

export default Directory;