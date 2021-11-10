import styled, { css, keyframes } from 'styled-components';

export const ShowFullScreen = keyframes`
    0% {
        position: absolute;
        top: 500px;
        left: 0px;
        width: 0vw;
        height: 0vh;
    }
    100% {
        position: absolute;
        top: 30px;
        left: 0px;
        width: 100%;
        height: 92%;
    }
`

export const ShowNoFullScreen = keyframes`
    0% {
        position: absolute;
        top: 500px;
        left: 0px;
        width: 0vw;
        height: 0vh;
    }
    100% {
        position: absolute;
        top: 40px;
        left: 10px;
        width: 90vw;
        height: 90vh;
    }
`

export const Container = styled.div`
    ${props => props.preview && `
        margin: 1px;
        padding: 1px;
        width: 25px;
    `}
    ${props => !props.preview && `
        margin: 10px;
        padding: 3px;
        width: 120px;    
    `}
    ${props => props.breakLine && css`
        margin-right: auto !important;
    `}
    ${props => props.mobile && css`
        width: 60px !important;
    `}
    text-align: center;
    height: min-content;
    border-radius: 5px;
    &:hover {
        background-color: rgb(184, 122, 68);
    }
    cursor: default;
`

export const ContentsContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    overflow-y: auto;
    max-height: 100%;
    padding-bottom: 60px;
`

export const Name = styled.h6`
    text-align: center;
    color: white;
    margin: 2px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    ${props => props.preview && `
        font-size: 0.3rem;
    `}
    ${props => !props.preview && `
        max-height: 40px;
        font-size: 1rem;
    `}
    overflow-y: hidden;
    &:hover {
        overflow-y: auto;
    }
`

export const Img = styled.img`
    ${props => props.preview && `
        width: 20px;
        height: 25px;
    `}
    ${props => !props.preview && !props.npm && `
        width: 30px;
        height: 40px;    
    `}
    ${props => props.npm &&`
        width: 40px;
        height: 40px;
    `}
`

export const Window = styled.div`
    ${props => props.fullScreen && css`
        width: 99%;
        height: 99%;
        animation-name: ${ShowFullScreen};
        animation-fill-mode: forwards;
        animation-duration: 0.5s;
        animation-delay: 0s;
    `}
    ${props => !props.fullScreen && css`
        width: 80vw;
        height: 80vh !important;
        animation-name: ${ShowNoFullScreen};
        animation-fill-mode: forwards;
        animation-duration: 0.1s;
        animation-delay: 0s;
    `}
    ${props => `
        z-index: ${props.zIndex};
    `}
    ${props => props.case==='music' && !props.showing && css`
        width:  0 !important;
        height: 0 !important;
    `}
    position: absolute;
    overflow-y: hidden;
    overflow-x: hidden;
    border: 1px solid grey;
    border-radius: 7px;
    background-color: black;
    padding-bottom: 60px;
`

export const PreviewSmallWindow = styled.div`
    width: 200px;
    height: 100px;
    overflow-y: hidden;
    overflow-x: hidden;
    border: 1px solid grey;
    border-radius: 7px;
    background-color: black;
    position: absolute;
    top: -90px;
`

export const Error = styled.h6`
    ${props => props.preview && `
        font-size: 0.5rem;
        margin: 20px 2px;
        text-align: left;
    `}
    ${props => !props.preview && `
        margin: 10px;
    `}
    color: red;
`

export const Success = styled.h6`
    ${props => props.preview && `
        font-size: 0.5rem;
        margin: 20px 2px;
        text-align: left;
    `}
    ${props => !props.preview && `
        margin: 10px;
    `}
    color: green;
`

export const WindowBar = styled.div`
    display: flex;
    flex-flow: row wrap;

    ${props => props.preview && `
        height: 4px;
        position: relative;
    `}
    ${props => !props.preview && `
        height: 40px;
        position: absolute;
        top: 0px;
        background-color: grey;
    `}
    width: 100%;
`

export const WindowPill = styled.div`
    ${props=>props.current && `
        background-color: rgb(184, 122, 68);
    `}
    ${props=>!props.current && `
        background-color: inherit;
    `}
    display: flex;
    border-right: 1px solid grey;
    padding: 3px;
    &:hover {
        background-color: black;
    }
    font-size: 0.9rem;
`

export const NoBgButton = styled.button`
    background-color: inherit;
    border: none;
    margin: auto;
    color: white !important;
    width: max-content;
`

export const WindowButtons = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    top: 0px;
    right: -15px;
    height: inherit;
    width: 100px;
`

export const WindowButton = styled.button`
    font-size: 0.8rem;
    margin: auto 0px;
    background-color: inherit;
    border: none;
`

export const ActiveWindows = styled.div`
    display: flex;
    width: 40%;
    overflow-x: auto;
    overflow-y: hidden;
    height: inherit;
    margin-right: 10%;
`

export const WindowKind = styled.div`
    background-color: inherit;
    color: white;
    margin: 3px;
    width: 90px;
    max-height: 100%;
    display: flex;
    border-right: 1px solid white;
    font-size: 0.7rem;
`

export const WindowKindImg = styled.img`
    ${props => props.preview && `
        width: 15px;
        height: 15px;
        margin: 1px;    
    `}
    ${props => !props.preview && `
        width: 20px;
        height: 30px;
        margin: 3px;    
    `}`

export const WindowKindName = styled.div`
    ${props => props.preview && `
        font-size: 0.7rem;
    `}
    height: min-content;
`

export const NavbarImg = styled.img`
    ${props => props.case!=='terminal' && props.case!=='github' && `
        width: 30px;
        height: 35px;
    `}
    ${props => props.case==='terminal' && `
        width: 35px;
        height: 30px;
        border-radius: 5px;
    `}
    ${props => props.case==='github' && `
        width: 45px;
        height: 35px;
    `}
`

export const NavBarEmoji = styled.div`
    font-size: 1.3rem;
`

export const TabsCounterImg = styled.div`
    font-size:0.5rem;
`

export const TabsCounterContainer = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
`

export const MarkdownContainer = styled.div`
    color: white;
    padding: 0px 10px;
    ${props => props.preview && `
        margin-top: 16px;
        font-size: 0.5rem !important;
        &>h1, &>h2, &>h3, &>h4, &>h5, &>h6 {
            font-size: 0.5rem !important;
        }
        text-align: left;
    `}
    ${props => !props.preview && `
        margin-top: 60px;
        overflow-y: auto;
        max-height: 100%;
        padding-bottom: 60px;
    `}
`

export const OneGame = styled.div`
    ${props => props.preview && `
        margin: 1px;
        padding: 1px;
        font-size: 0.5rem;
    `}
    ${props => !props.preview && `
        border: 1px solid grey;
        margin: 5px;
        border-radius: 7px;
        padding: 5px;
    `}
`

export const GameIcon = styled.img`
    ${props => props.preview && `
        height: 30px;
        width: auto;
        margin: 5px;
    `}
    ${props => !props.preview && !props.sample && `
        height: 100px;
        width: auto;
        margin: 10px;
    `}
    ${props => !props.preview && props.sample && `
        height: 10px;
        width: auto;
        margin: 1px;
    `}
`

export const GameContainer = styled.div`
    max-height: 100%;
    max-width: 100%;
    padding: 2px;
    color: white;
    text-align: center;
    align-items: center;
    margin-top: 10px;
`

export const TetrisStats = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    border: 1px solid grey;
    padding: 2px;
    width: 300px;
    margin: auto;
`

export const BoardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: auto;
`

export const WindowBody = styled.div`
    overflow-y: auto;
    color: white;
    max-height: 100%;
    padding-bottom: 100px;
    padding-top: 50px;
`

export const TerminalBody = styled.div`
    background-color: black;
    color: green;
    border-radius: 7px;
    height: 100% !important;
    max-height: 100% !important;
    ${props => !props.preview && css`
        overflow-y: auto;
    `}
    ${props => props.preview && css`
        overflow-y: hide;
    `}
    white-space: pre-wrap;
    position: relative;

`

export const TerminalLine = styled.div`
    margin: 0px 0px;
    display: flex;
    ${props => props.preview && css`
        font-size: 0.8rem;
    `}
`

export const TerminalInput = styled.input`
    background-color: black;
    border: none;
    color: green;
    &:focus {
        outline: none;
    }
    width: 100%;
`

export const MyTooltip = styled.div`
    background-color: rgba(163, 13, 13, 0.1);
    color: white;
    padding: 2px 4px;
    border: none;
    border-radius: 7px;
    position: absolute;
    z-index: 1080;
    opacity: 0.9;
`