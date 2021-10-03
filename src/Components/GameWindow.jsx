import React, { useState, useEffect } from 'react';
import '../App.css';
import { Window, WindowBar, WindowKind, WindowKindName, WindowPill, WindowButtons, WindowButton, NoBgButton, OneGame, GameIcon } from './styles';
import { Button } from 'react-bootstrap';
import snake_icon from '../images/snake.png';
import tetris_icon from '../images/tetris.png';


function GameWindow(props) {
    const [game, setGame] = useState(null);
    const [fullScreen, setFullScreen] = useState(props.isGameFullScreen);
    const [zIndex, setZIndex] = useState(props.zIndex);

    const games = [
        {
            name: 'snake',
            description: 'The classic snake game.',
            image: snake_icon,
        },
        {
            name: 'tetris',
            description: 'The classic tetris game.',
            image: tetris_icon,
        }
    ]

    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    useEffect(() => {
        setFullScreen(props.isGameFullScreen);
    }, [props.isGameFullScreen])

    const hide = () => {
        //props.setShowingNow('doc');
        props.setShowingGameWindow(false);
    }

    const expand = () => {
        props.setShowingNow('game');
        const curr = fullScreen;
        setFullScreen(!curr);
        props.setIsGameFullScreen(!curr)
    }

    return (
        <Window fullScreen={fullScreen} zIndex={zIndex}>
            <WindowBar>
                <WindowKind>
                    <div style={{'fontSize': '1.3rem'}}>&#127923;</div>
                    <WindowKindName>Game player</WindowKindName>
                </WindowKind>
                {game &&
                    <WindowPill
                        current={true}
                        key={`${game.name}`}>
                            <NoBgButton>
                                {game.name}
                            </NoBgButton>
                            <NoBgButton onClick={()=>setGame(null)}>
                                &#10006;
                            </NoBgButton>
                    </WindowPill>
                }
                <WindowButtons>
                    <WindowButton onClick={hide}>
                        &#10134;
                    </WindowButton>
                    {fullScreen &&
                        <WindowButton onClick={expand}>
                            ☐
                        </WindowButton>
                    }
                    {!fullScreen &&
                        <WindowButton onClick={expand}>
                            &#11035;
                        </WindowButton>
                    }
                    <WindowButton onClick={props.stopPlaying} >
                        &#10060;
                    </WindowButton>
                </WindowButtons>
            </WindowBar>                
            <div style={{'marginTop': '60px'}} />
            {!game && 
                <div style={{'color': 'white'}}>
                    <h2>Games</h2>
                    {games.map(value => {
                        return(
                            <OneGame key={value.name}>
                                <div style={{'display': 'flex', 'flexFlow': 'row wrap'}}>
                                    <div>
                                        <h5>{value.name}</h5>
                                        <hr/>
                                        <div><i>{value.description}</i></div>
                                    </div>
                                    <div>
                                        <GameIcon src={value.image} alt={value.name} />
                                    </div>
                                </div>
                                <Button variant='success' onClick={()=>setGame(value)}>Play</Button>
                            </OneGame>
                        )
                    })}
                </div>
            }
        </Window>
    )
}

export default GameWindow;