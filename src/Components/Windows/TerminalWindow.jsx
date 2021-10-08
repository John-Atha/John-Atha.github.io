import React, { useState, useEffect } from 'react';
import {
    Window, WindowBar, WindowKind,
    WindowKindImg, WindowKindName,
    WindowButtons, WindowButton, TerminalBody,
    TerminalLine, TerminalInput
} from '../styles';
import terminal_icon from '../../images/cmd.png';
import '../../App.css';
import { parent } from '../../data';

import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

function TerminalWindow(props) {
    const [fullScreen, setFullScreen] = useState(props.isTerminalFullScreen);
    const [zIndex, setZIndex] = useState(props.zIndex);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [logo, setLogo] = useState('');
    const [showMsg, setShowMsg] = useState(true);

    const list = () => {
        const result = [];
        props.currentDir.contents.forEach((child) => {
            result.push(`   * ${child.name} <${child.type}>`);
        })
        return(result.join('\n') );
    }

    const clear = () => {
        console.log(`I am clearing...`)
        props.setHistory([]);
        setHistoryIndex(0);
    }

    const get_command_body = (command) => {
        const command_parts = command.split('>');
        const command_body = command_parts.slice(1).join(' ').trim();
        return command_body;
    }

    const help = () => {
        const result = [];
        Object.entries(unary_commands).forEach((command) => {
            result.push(`   * ${descriptions[command[0]]}`);
        })
        Object.entries(binary_commands).forEach((command) => {
            result.push(`   * ${descriptions[command[0]]}`);
        })
        return result.join('\n')
    }

    const open = (smth) => {
        if (smth==='.') {
            props.addDir(props.currentDir)
            return;
        }
        if (smth==='..') {
            if (parent[`dir${props.currentDir.id-1}`]!==null) {
                props.addDir(parent[`dir${props.currentDir.id-1}`]);
                return;
            }
            return `Access denied.`;
        }
        
        let obj = null;

        props.currentDir.contents.forEach(value => {
            if (value.name===smth) {
                obj = value;
            }
        })

        if (obj) {
            if (obj.type==='directory') {
                props.addDir(obj);
                return;
            }
            else if (obj.type==='file') {
                props.addDoc(obj);
                return;
            }
            else if (obj.type==='github-url' || obj.type==='deployment-url') {
                window.open(obj.url, '_blank');
                return;
            }
        }
        else {
            return `'${smth}' was not found in the current directory.`
        }
    }

    const play = () => {
        if (!props.playing) {
            props.setPlaying(true);
        }
        props.addToShowingNow('game');
        props.setShowingGameWindow(true);
        return;        
    }

    const music = () => {
        if (!props.isMusicPlaying) {
            props.setIsMusicPlaying(true);
        }
        props.addToShowingNow('music');
        props.setShowingMusicWindow(true);
    }
  
    const binary_commands = {
        cd: (smth) => { return goto(smth) },
        open: (smth) => { return open(smth) },
    };

    const unary_commands = {
        ls: () => { return list() },
        clear: () => { return clear() },
        help: () => { return help() },
        exit: () => { return props.closeTerminal() },
        play: () => { return play() },
        music: () => { return music() }
    }

    const descriptions = {
        'cd':    `cd <dir_name>  : changes the current directory`,
        'open':  `open <name>    : opens the specified directory / file / github url / deployment url`,
        'ls':    `ls                            : lists the contents of the current directory`,
        'clear': `clear                      : clears the terminal`,
        'help':  `help                       : lists the available commands`,
        'exit':  `exit                        : exits the terminal`,
        'play':  `play                       : opens the gaming machine`,
        'music':  `music                    : opens the music player`,
    }

    const goto = (dir_name) => {
        console.log(`I will go to '${dir_name}'`)
        if (dir_name==='.') return;
        if (dir_name==='..') {
            console.log('Going up')
            if (parent[`dir${props.currentDir.id-1}`]!==null) {
                console.log(`I am at the dir${props.currentDir.id-1}:`)
                console.log(props.currentDir)
                console.log('All the parents:')
                console.log(parent);
                console.log(`I have the parent:`);
                console.log(parent[`dir${props.currentDir.id-1}`]);
                props.setCurrentDir(parent[`dir${props.currentDir.id-1}`]);
                return;
            }
            return `Access denied.`;
        }
        let directory_obj = null;

        props.currentDir.contents.forEach(value => {
            if (value.name===dir_name) {
                directory_obj = value;
            }
        })
        if (!directory_obj) return `Could not find '${dir_name}'`
        if (directory_obj.type!=='directory') {
            return `'${dir_name}' is not a directory.`
        }
        console.log(directory_obj);
        props.setCurrentDir(directory_obj);
    }

    const msg='> You can:\n   * navigate through my files   * open my projects   * play games\n> Type \'help\' to see a detailed list of the available commands.';

    const handleCommand = (event) => {
        event.preventDefault();
        const result = executeCommand(props.currentCommand);
        if (get_command_body(props.currentCommand)!=='clear') {
            props.setHistory(props.history.concat({ 
                command: get_command_body(props.currentCommand),
                result,
                directory: props.currentDir,
            }));
            props.setCommandsHistory(props.commandsHistory.concat(get_command_body(props.currentCommand)));
        }
        props.setCurrentCommand('');
        if (get_command_body(props.currentCommand)!=='exit') {
            setTimeout(() => {
                const el = document.getElementById('term-body');
                console.log(el.scrollTop = el.scrollHeight);    
            }, 200);
        }
    }

    const executeCommand = (command) => {
        setShowMsg(false);
        console.log(props.currentCommand);
        const command_body = get_command_body(command);
        const parts = command_body.split(' ');
        console.log(parts);
        if (parts.length===1 && !parts[0]) {
            props.setHistory(props.history.concat({ 
                command: '',
                result: '',
                directory: props.currentDir,
            }))
            return;
        }
        else if (!parts.length) {
            return(`Invalid command: ${command_body}`);
        }
        else if (parts.length===1) {
            const method = parts[0];
            console.log(parts);
            if (unary_commands[method]) {
                console.log(unary_commands[method])
                return unary_commands[method]();
            }
            else {
                return(`Invalid command: ${method}`);
            }
        }
        else {
            const method = parts[0];
            const smth = parts.slice(1).join(" ");
            if (binary_commands[method]) {
                return binary_commands[method](smth);
            }
            else {
                return(`Invalid command: ${method}`);
            }
        }
    }

    const checkArrows = (event) => {
        event.preventDefault();
        if (!props.commandsHistory.length) return;
        let code = null;
        if (event.key) code = event.key;
        console.log(code);
        if (code==="ArrowUp" && Math.abs(historyIndex)<props.commandsHistory.length) {
            setHistoryIndex(historyIndex-1);
        }
        else if (code==="ArrowDown" && historyIndex<=-1) {
            setHistoryIndex(historyIndex+1);
        }
    }

    useEffect(() => {
        if (props.commandsHistory.length && historyIndex<0) {
            props.setCurrentCommand(`> ${props.commandsHistory[props.commandsHistory.length+historyIndex]}`);
            console.log(`I am going to '> ${props.commandsHistory[props.commandsHistory.length+historyIndex]}'`)
        }
        else if (historyIndex===0) {
            props.setCurrentCommand('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [historyIndex])


    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    useEffect(() => {
        setFullScreen(props.isTerminalFullScreen);
    }, [props.isTerminalFullScreen])

    useEffect(() => {
        figlet.parseFont('Standard', standard);
        figlet.text('Hello World !!', {
            font: 'Standard',
        }, function(err, data) {
            console.log(data);
            setLogo(data);
        });
        clear();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const hide = () => {
        props.removeFromShowingNow('terminal');
        props.setShowingTerminalWindow(false);
    }

    const expand = () => {
        props.addToShowingNow('terminal');
        const curr = fullScreen;
        setFullScreen(!curr);
        props.setIsTerminalFullScreen(!curr)
    }

      return (
        <Window fullScreen={fullScreen} zIndex={zIndex} terminal={true}>

            <WindowBar>
                <WindowKind>
                    <WindowKindImg src={terminal_icon} />
                    <WindowKindName>Terminal</WindowKindName>
                </WindowKind>
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
                    <WindowButton onClick={props.closeTerminal} >
                        &#10006;
                    </WindowButton>
                </WindowButtons>
            </WindowBar>
            <div style={{'marginTop': '45px'}} />
            <TerminalBody id='term-body'>
                    {showMsg &&
                        <TerminalLine><pre>{logo}</pre></TerminalLine>
                    } 
                    {showMsg &&
                        <TerminalLine>{msg}</TerminalLine>
                    }
                    {props.history.map((value, index) => {
                        return (
                            <div>
                                <TerminalLine key={`command-${index}`}>
                                    {`${value.directory.name}> ${value.command}`}
                                </TerminalLine>
                                <TerminalLine key={`result-${index}`}>
                                    {value.result}
                                </TerminalLine>
                            </div>
                        )
                    })}
                    <TerminalLine>
                        <form 
                            onSubmit={handleCommand} style={{'width': '100%'}}>
                        <TerminalInput
                            autoFocus
                            value={`${props.currentDir.name}> ${props.currentCommand.split('>').slice(1).join(' ').slice(1)}`}
                            onChange={(event)=>{props.setCurrentCommand(event.target.value)}}
                            onKeyUp={checkArrows}
                            />
                        </form>
                    </TerminalLine>
            
            </TerminalBody>

        </Window>
      );
}

export default TerminalWindow;