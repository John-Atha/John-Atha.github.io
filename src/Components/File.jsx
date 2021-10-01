import React, { useState, useEffect } from 'react';
import file_icon from '../images/file.png';
import { Container, Img, Name } from './styles';

function File(props) {
    const [file, setFile] = useState(props.file);

    useEffect(() => {
        setFile(props.file);
    }, [props.file])

    return (
        <Container onDoubleClick={()=>props.addDoc(file)} >
            <Img src={file_icon}/>
            <Name>{file.name}</Name>
        </Container>
    )
}

export default File;