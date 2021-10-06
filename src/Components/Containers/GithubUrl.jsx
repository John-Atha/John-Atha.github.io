import React, { useState, useEffect } from 'react';
import github_icon from '../../images/Octocat.png';
import { Container, Img, Name } from '../styles';

function GithubUrl(props) {
    const [project, setProject] = useState(props.project);

    useEffect(() => {
        setProject(props.project);
    }, [props.project])

    return (
        <Container
            onDoubleClick={()=>window.open(project.url, '_blank')}
            preview={props.preview}>
            <Img 
                preview={props.preview}
                src={github_icon}
            />
            <Name preview={props.preview}>
                {project.name}
            </Name>
        </Container>
    )
}

export default GithubUrl;