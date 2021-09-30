import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px;
    padding: 3px;
    width: 100px;
    text-align: center;
    height: min-content;
    border-radius: 5px;
    &:hover {
        background-color: rgb(184, 122, 68);
    }
    cursor: default;
`
export const Name = styled.h4`
    text-align: center;
    color: white;
    margin: 2px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
    height: 40px;
    overflow-y: hidden;
    &:hover {
        overflow-y: auto;
    }
`
export const Img = styled.img`
    width: 50px;
    height: 60px;
`

export const Window = styled.div`
    ${props => props.fullScreen && `
        width: 99%;
        height: 99%;
        top: 0px;
        left: 0px;
    `}
    ${props => !props.fullScreen && `
        width: 90vw;
        height: 90vh;
        top: 10px;
        left: 10px;
    `}
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid grey;
    border-radius: 7px;
    position: absolute;
    background-color: rgb(48, 47, 46);
`

export const Error = styled.h4`
    color: red;
    margin: 10px;
`

export const WindowBar = styled.div`
    display: flex;
    background-color: grey;
    flex-flow: row wrap;
    position: absolute;
    top: 0px;
    height: 30px;
    width: 100%;
`

export const WindowName = styled.div`
    ${props=>props.current && `
        background-color: rgb(184, 122, 68);
    `}
    ${props=>!props.current && `
        background-color: inherit;
    `}
    border-right: 1px solid grey;
    padding: 3px;
`

export const WindowButtons = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    top: 0px;
    right: 0px;
`