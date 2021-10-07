import React, { useState, useEffect } from 'react';
import file_icon from '../../images/file.png';
import fav_icon from '../../images/fav.png';
import { Container, Img, Name } from '../styles';

function File(props) {
    const [file, setFile] = useState(props.file);

    useEffect(() => {
        setFile(props.file);
    }, [props.file])

    return (
        <Container
            mobile={window.innerWidth<400}
            onDoubleClick={()=>props.addDoc(file)}
            preview={props.preview}
            breakLine={props.breakLine}>
            <Img 
                preview={props.preview}
                src={file.name==='favourites' ? fav_icon : file_icon}
            />
            <Name preview={props.preview}>
                {file.name}
            </Name>
        </Container>
    )
}

export default File;