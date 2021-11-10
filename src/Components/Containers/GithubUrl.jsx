import React, { useState, useEffect } from 'react';
import github_icon from '../../images/Octocat.png';
import { Container, Img, Name, MyTooltip } from '../styles';

function GithubUrl(props) {
    const [project, setProject] = useState(props.project);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        setProject(props.project);
    }, [props.project])

    return (
        <Container
            mobile={window.innerWidth<400}
            onDoubleClick={()=>window.open(project.url, '_blank')}
            onMouseOver={()=>setShowTooltip(true)}
            onMouseOut={()=>setShowTooltip(false)}
            preview={props.preview}>
            <Img 
                preview={props.preview}
                src={github_icon}
            />
            <Name preview={props.preview}>
                {project.name}
            </Name>
            {showTooltip &&
                <MyTooltip>
                    Double-click to open
                </MyTooltip>
            }
        </Container>
    )
}

export default GithubUrl;