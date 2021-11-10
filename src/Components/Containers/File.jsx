import React, { useState, useEffect } from 'react';
import file_icon from '../../images/file.png';
import fav_icon from '../../images/fav.png';
import { Container, Img, Name, MyTooltip } from '../styles';

function File(props) {
    const [file, setFile] = useState(props.file);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        setFile(props.file);
    }, [props.file])

    return (
        <Container
            mobile={window.innerWidth<400}
            onDoubleClick={()=>props.addDoc(file)}
            onMouseOver={()=>setShowTooltip(true)}
            onMouseOut={()=>setShowTooltip(false)}
            preview={props.preview}
            breakLine={props.breakLine}>
            <Img 
                preview={props.preview}
                src={file.name==='favourites' ? fav_icon : file_icon}
            />
            <Name preview={props.preview}>
                {file.name}
            </Name>
            {showTooltip &&
                <MyTooltip>
                    Double-click to open
                </MyTooltip>
            }
        </Container>
    )
}

export default File;