import React, { useState, useEffect } from 'react';
import folder_icon from '../../images/folder.png';
import { Container, Img, Name, MyTooltip } from '../styles';

function Directory(props) {
    const [dir, setDir] = useState(props.dir);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        setDir(props.dir);
    }, [props.dir])

        return (
            <Container
                mobile={window.innerWidth<400}
                onDoubleClick={()=>props.addDir(dir)}
                onMouseOver={()=>setShowTooltip(true)}
                onMouseOut={()=>setShowTooltip(false)}
                preview={props.preview}>
                <Img
                    preview={props.preview}
                    src={folder_icon}
                />
                <Name preview={props.preview}>
                    {dir.name}
                </Name>
                {showTooltip &&
                    <MyTooltip>
                        Double-click to open
                    </MyTooltip>
                }
            </Container>
        )
}

export default Directory;