import styled, { keyframes } from 'styled-components';


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

export const Slide3 = keyframes`
    0% {
        position: absolute;
        top: 300px;
        right: 50vw;
        opacity: 0;
    }
    100% {
        position: absolute;
        top: 300px;
        right: 10px;
        opacity: 1;
    }
`

export const LoginSlide = keyframes`
0% {
    position: relative;
    opacity: 0;
    margin-left: -300px;
}
100% {
    position: relative;
    right: 10px;
    opacity: 1;
}`

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
animation-duration: 3s;
`

export const BioDetail = styled.h4`
animation-name: ${Slide3};
animation-fill-mode: forwards;
animation-duration: 4s;
`

export const Account = styled.button`
    border: none;
    border-radius: 7px;
    background-color: rgba(163, 13, 13, 0.3);
    width: 200px;
    height: 50px;
    margin: auto;
    margin-top: 30px;
    display: flex;
    &:hover {
        background-color: rgba(163, 13, 13, 0.5);
    }
`

export const AccountImg = styled.img`
    height: 50px;
    width: 50px;
`

export const UnLockButton = styled.button`
    background-color: inherit;
    border: none;
    color: white;
    font-size: 1.3rem;
    opacity: 0.6;
    &:hover {
        opacity: 1;
    }
`

export const LoginContainer = styled.div`
    margin-top: 20vh;
    text-align: center;
    animation-name: ${LoginSlide};
    animation-fill-mode: forwards;
    animation-duration: 1s;
`