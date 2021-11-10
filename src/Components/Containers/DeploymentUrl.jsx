import React, { useState, useEffect } from 'react';
import poston_icon from '../../images/poston.png';
import ask_icon from '../../images/ask.png';
import football_icon from '../../images/football.png';
import earth_icon from '../../images/earth.png';
import maths_icon from '../../images/math.png';
import npm_icon from '../../images/npm.png';
import cooking_icon from '../../images/greek-cooking.png';

import { Container, Img, Name, MyTooltip } from '../styles';

function DeploymentUrl(props) {
    const [project, setProject] = useState(props.project);
    const [showTooltip, setShowTooltip] = useState(false);

    const icons = {
        'PostOn': poston_icon,
        'AskMe Anything': ask_icon,
        'FootLand': football_icon,
        'Url Formatter': npm_icon,
        'Country Explorer': earth_icon,
        'Maths Game': maths_icon,
        'Greek Cooking': cooking_icon,
    }

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
                src={icons[project.name]}
                npm={true}
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

export default DeploymentUrl;