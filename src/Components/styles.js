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