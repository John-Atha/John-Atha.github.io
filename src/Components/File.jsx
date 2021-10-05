import React, { useState, useEffect } from 'react';
import file_icon from '../images/file.png';
import { Container, Img, Name } from './styles';

function File(props) {
    const [file, setFile] = useState(props.file);

    useEffect(() => {
        setFile(props.file);
    }, [props.file])

    return (
        <Container
            onDoubleClick={()=>props.addDoc(file)}
            preview={props.preview}
            breakLine={props.breakLine}>
            <Img 
                preview={props.preview}
                src={file_icon}
            />
            <Name preview={props.preview}>
                {file.name}
            </Name>
        </Container>
    )
}

export default File;