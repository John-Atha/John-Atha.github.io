import React, { useState, useEffect } from 'react';
import '../App.css';
import {
    Window, WindowBar, WindowKind, WindowKindName,
    ActiveWindows, WindowPill, WindowButtons,
    WindowButton, NoBgButton, OneGame, GameIcon,
    GameContainer, TetrisStats, BoardsContainer,
    Error, Success, WindowBody } from './styles';
import { Button } from 'react-bootstrap';
import Snake from 'snake-game-react';
import Tetris from 'react-tetris';
import Minesweeper from 'react-minesweeper';
import "react-minesweeper/lib/minesweeper.css";
import snake_icon from '../images/snake.png';
import tetris_icon from '../images/tetris.png';
import minesweeper_icon from '../images/minesweeper.png';

function GameWindow(props) {
    const [game, setGame] = useState(props.game);
    const [fullScreen, setFullScreen] = useState(props.isGameFullScreen);
    const [zIndex, setZIndex] = useState(props.zIndex);
    const [minesweeperWon, setMinesweeperWon] = useState(false);
    const [minesweeperLost, setMinesweeperLost] = useState(false);

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
        setZIndex(props.zIndex);
    }, [props.zIndex])

    useEffect(() => {
        setFullScreen(props.isGameFullScreen);
    }, [props.isGameFullScreen])

    const hide = () => {
        props.removeFromShowingNow('game');
        props.setShowingGameWindow(false);
    }

    const expand = () => {
        props.addToShowingNow('game');
        const curr = fullScreen;
        setFullScreen(!curr);
        props.setIsGameFullScreen(!curr)
    }

    const restartGame = (game_name) => {
        if (game_name==='minesweeper') {
            setMinesweeperWon(false);
            setMinesweeperLost(null);    
        }
        const new_game = games.filter(value => {return value.name===game_name});
        const another_game = games.filter(value => {return value.name!==game_name});
        setGame(another_game[0]);
        setTimeout(() => {setGame(new_game[0]);}, 500);
    }

    return (
        <Window fullScreen={fullScreen} zIndex={zIndex}>
            <WindowBar>
                <WindowKind>
                    <div style={{'fontSize': '1.3rem'}}>&#127923;</div>
                    <WindowKindName>Game player</WindowKindName>
                </WindowKind>
                {game &&
                    <ActiveWindows>
                        <WindowPill
                            current={true}
                            key={`${game.name}`}>
                                <NoBgButton>
                                    {game.name}
                                </NoBgButton>
                                <NoBgButton onClick={()=>{setGame(null);props.setGame(null)}}>
                                    &#10006;
                                </NoBgButton>
                        </WindowPill>
                    </ActiveWindows>
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
            <WindowBody>
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
                                    <Button variant='success' onClick={()=>{setGame(value);props.setGame(value);props.setPlaying(true);}}>Play</Button>
                                </OneGame>
                            )
                        })}
                    </div>
                }
                {game && game.name==='snake' &&
                    <Snake 
                        color1="#248ec2"
                        color2="#1d355e"
                        backgroundColor="#ebebeb"
                    />              
                }
                {game && game.name==='tetris' &&
                    <Tetris>
                        {({ Gameboard, PieceQueue, points, linesCleared }) => {
                        return (
                            <GameContainer>
                                <TetrisStats>
                                    <div style={{'margin': '5px'}}>Points: {points}</div>
                                    <div style={{'margin': '5px'}}>Lines Cleared: {linesCleared}</div>
                                </TetrisStats>
                                <BoardsContainer>
                                    <Gameboard />
                                    <PieceQueue />
                                </BoardsContainer>
                            </GameContainer>
                        );
                        }}
                    </Tetris>
                }
                {game && game.name==='minesweeper' &&
                    <div>
                        <div style={{'display': 'flex', 'flexFlow': 'row wrap', 'marginBottom': '10px'}}>
                            {minesweeperWon &&
                                <Success>Congratulations, you won!!</Success>
                            }
                            {minesweeperLost &&
                                <Error>Sorry, you lost...</Error>
                            }
                            {(minesweeperWon || minesweeperLost) &&
                                <Button style={{'margin': 0}} variant='primary'onClick={()=>restartGame('minesweeper')} >Play again</Button>
                            }
                        </div>
                        <Minesweeper
                            onWin={() => setMinesweeperWon(true)}
                            onLose={() => setMinesweeperLost(true)}
                            bombChance={0.15}
                            width={10}
                            height={10}
                        />
                    </div>
                }
            </WindowBody>
        </Window>
    )
}

export default GameWindow;