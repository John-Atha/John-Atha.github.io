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

export const Slide1 = keyframes`
    0% {
        position: absolute;
        top: 200px;
        right: 50vw;
        opacity: 0;
    }
    100% {
        position: absolute;
        top: 200px;
        right: 10px;
        opacity: 1;
    }
`

export const Slide2 = keyframes`
    0% {
        position: absolute;
        top: 250px;
        right: 50vw;
        opacity: 0;
    }
    100% {
        position: absolute;
        top: 250px;
        right: 10px;
        opacity: 1;
    }
`

export const Show = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const ShortBio = styled.div`
    color: white;
    z-index: -1;
`

export const BioHeader = styled.h1`
    animation-name: ${Slide1};
    animation-fill-mode: forwards;
    animation-duration: 2s;
    font-style: italic;
`

export const BioDescription = styled.h3`
    animation-name: ${Slide2};
    animation-fill-mode: forwards;
    animation-duration: 4s;
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
        width: 100px;    
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
        height: 40px;
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
    position: absolute;
    overflow-y: hidden;
    overflow-x: hidden;
    border: 1px solid grey;
    border-radius: 7px;
    background-color: lightgrey;
    padding-bottom: 60px;
`

export const PreviewSmallWindow = styled.div`
    width: 200px;
    height: 100px;
    overflow-y: hidden;
    overflow-x: hidden;
    border: 1px solid grey;
    border-radius: 7px;
    background-color: lightgrey;
    position: absolute;
    top: -100px;
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
        background-color: white;
    }
    font-size: 0.9rem;
`

export const NoBgButton = styled.button`
    background-color: inherit;
    border: none;
    margin: auto;
`

export const WindowButtons = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    top: 0px;
    right: 0px;
    height: inherit;
`

export const WindowButton = styled.button`
    font-size: 0.8rem;
    margin: auto;
`

export const ActiveWindows = styled.div`
    display: flex;
    width: 70%;
    overflow-x: auto;
    overflow-y: hidden;
    height: inherit;
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
    overflow-y: auto;
    white-space: pre-wrap;
    position: relative;
`

export const TerminalLine = styled.div`
    margin: 5px 0px;
    display: flex;
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