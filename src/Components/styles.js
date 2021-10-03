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
        top: 0px;
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
        top: 10px;
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
`

export const Name = styled.h6`
    text-align: center;
    color: white;
    margin: 2px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
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
    ${props => !props.preview && `
        width: 30px;
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
        width: 90vw;
        height: 90vh;
        animation-name: ${ShowNoFullScreen};
        animation-fill-mode: forwards;
        animation-duration: 0.1s;
        animation-delay: 0s;
    `}
    ${props => `
        z-index: ${props.zIndex};
    `}
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid grey;
    border-radius: 7px;
    background-color: rgb(48, 47, 46);
`

export const PreviewSmallWindow = styled.div`
    width: 200px;
    height: 100px;
    overflow-y: hidden;
    overflow-x: hidden;
    border: 1px solid grey;
    border-radius: 7px;
    background-color: rgb(48, 47, 46);
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
`

export const WindowButtons = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    top: 0px;
    right: 0px;
`

export const WindowButton = styled.button`
    font-size: 0.8rem;
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
    width: 25px;
    height: 30px;
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
    `}
`