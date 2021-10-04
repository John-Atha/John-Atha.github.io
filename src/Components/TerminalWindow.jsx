import React, { useState, useEffect } from 'react';
import {
    Window, WindowBar, WindowKind,
    WindowKindImg, WindowKindName,
    WindowButtons, WindowButton, TerminalBody,
    TerminalLine, TerminalInput
} from './styles';
import terminal_icon from '../images/cmd.png';
import '../App.css';
import { parent } from '../data';

function TerminalWindow(props) {
    const [fullScreen, setFullScreen] = useState(props.isTerminalFullScreen);
    const [zIndex, setZIndex] = useState(props.zIndex);
    const [commandsHistory, setCommandsHistory] = useState([]);
    const [resultsHistory, setResultsHistory] = useState([]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [historyIndex, setHistoryIndex] = useState(0);

    const list = () => {
        const result = [];
        props.currentDir.contents.forEach((child) => {
            result.push(`   * ${child.name} <${child.type}>`);
        })
        return(result.join('\n') );
    }

    const clear = () => {
        console.log(`I am clearing...`)
        setCommandsHistory([]);
        setResultsHistory([]);
        setHistoryIndex(0);
    }

    const help = () => {
        const result = [];
        Object.entries(unary_commands).forEach((command) => {
            result.push(`   * ${command[0]}`);
        })
        Object.entries(binary_commands).forEach((command) => {
            result.push(`   * ${command[0]} <var>`);
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
  
        
    const binary_commands = {
        cd: (smth) => { return goto(smth) },
        open: (smth) => { return open(smth) },
    };

    const unary_commands = {
        ls: () => { return list() },
        clear: () => { return clear() },
        help: () => { return help() },
        exit: () => { return props.closeTerminal() },
        play: () => { return play() }
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


    const msg='> Hello!\n> You can use the classical Unix-based commands to\n   * navigate through my files\n   * open my projects\n   * play games\n> Type \'help\' to see a detailed list of the available commands.';


    const handleCommand = (event) => {
        event.preventDefault();
        const result = executeCommand(currentCommand);
        if (currentCommand!=='clear') {
            setResultsHistory(resultsHistory.concat(result));
            setCommandsHistory(commandsHistory.concat(currentCommand));
        }
        setCurrentCommand('');
    }

    const executeCommand = (command) => {
        console.log(currentCommand);
        const parts = command.split(' ');
        console.log(parts);
        if (!parts.length) {
            return(`Invalid command: ${command}`);
        }
        else if (parts.length===1) {
            const method = parts[0];
            console.log(parts);
            if (unary_commands[method]) {
                console.log(unary_commands[method])
                return unary_commands[method]();
            }
            else {
                return(`Invalid command: ${command}`);
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
        if (!commandsHistory.length) return;
        let code = null;
        if (event.key) code = event.key;
        console.log(code);
        if (code=="ArrowUp" && Math.abs(historyIndex)<commandsHistory.length) {
            setHistoryIndex(historyIndex-1);
        }
        else if (code=="ArrowDown" && historyIndex<-1) {
            setHistoryIndex(historyIndex+1);
        }
    }

    useEffect(() => {
        if (commandsHistory.length) {
            setCurrentCommand(commandsHistory[commandsHistory.length+historyIndex]);
        }
    }, [historyIndex])


    useEffect(() => {
        setZIndex(props.zIndex);
    }, [props.zIndex])

    useEffect(() => {
        setFullScreen(props.isTerminalFullScreen);
    }, [props.isTerminalFullScreen])

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
                        &#10060;
                    </WindowButton>
                </WindowButtons>
            </WindowBar>
            <div style={{'marginTop': '45px'}} />
            <TerminalBody>
                    {!commandsHistory.length &&
                        <TerminalLine>{msg}</TerminalLine>
                    }
                    {commandsHistory.map((value, index) => {
                        return (
                            <div style={{'border': '1px solid grey'}}>
                                <TerminalLine key={`command-${index}`}>
                                    {`${props.currentDir.name}> ${value}`}
                                </TerminalLine>
                                <TerminalLine key={`result-${index}`}>
                                    {resultsHistory[index]}
                                </TerminalLine>
                            </div>
                        )
                    })}
                    <TerminalLine>
                        <div style={{'display': 'inline-table'}}>{`${props.currentDir.name}> `}</div>
                        <form onSubmit={handleCommand} style={{'width': '100%'}}>
                        <TerminalInput
                            value={currentCommand}
                            onChange={(event)=>{setCurrentCommand(event.target.value)}}
                            onKeyUp={checkArrows}
                            />
                        </form>
                    </TerminalLine>
            
            </TerminalBody>

        </Window>
      );
}

export default TerminalWindow;