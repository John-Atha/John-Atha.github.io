import React, { useState, useEffect } from 'react';
import '../App.css';
import {
    PreviewSmallWindow, WindowBar, WindowKind, WindowKindName,
    ActiveWindows, WindowPill, WindowButtons,
    WindowButton, NoBgButton, OneGame, GameIcon,
    GameContainer, TetrisStats, BoardsContainer,
    Error, Success } from './styles';
import { Button } from 'react-bootstrap';
import Snake from 'snake-game-react';
import Tetris from 'react-tetris';
import Minesweeper from 'react-minesweeper';
import "react-minesweeper/lib/minesweeper.css";
import snake_icon from '../images/snake.png';
import tetris_icon from '../images/tetris.png';
import minesweeper_icon from '../images/minesweeper.png';

function PreviewGameWindow(props) {
    const [game, setGame] = useState(props.game);
    const [image, setImage] = useState("");

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
        },
        {
            name: 'minesweeper',
            description: 'The classic minesweeper game.',
            image: minesweeper_icon,
        },
    ]

    useEffect(() => {
        setGame(props.game);
    }, [props.game])

    useEffect(() => {
        if (game) {
            const obj = games.filter(value => { return value.name===game.name });
            if (obj.length) setImage(obj[0].image);
        }
    }, [game])

    return (
        <PreviewSmallWindow>
            <WindowBar preview={true}>
                <div style={{'fontSize': '1rem'}}>&#127923;</div>
                <WindowKindName>Game player</WindowKindName>
            </WindowBar>                
            <div style={{'marginTop': '26px'}} />
            {!game && 
                <div style={{'color': 'white'}}>
                    {games.map(value => {
                        return(
                            <OneGame preview={true} key={value.name}>
                                <div style={{'display': 'flex', 'flexFlow': 'row wrap'}}>
                                    <div>{value.name}</div>
                                    <GameIcon sample={true} src={value.image} alt={value.name} />
                                </div>
                            </OneGame>
                        )
                    })}
                </div>
            }
            {game &&
                <Success>
                    {game.name}
                </Success>
            }
            {game && 
                <GameIcon
                    preview={true}
                    src={image}
                />            
            }
        </PreviewSmallWindow>
    )
}

export default PreviewGameWindow;