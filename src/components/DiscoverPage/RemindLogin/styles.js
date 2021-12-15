import styled from 'styled-components';

export const Drawer = styled.div`
    opacity: 0;
    transition: opacity 0.2s linear;
    :hover {
        opacity: 1;
    }
`;
export const FirstLayer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0 0 0 / 50%);
    z-index: 16;
`;
export const SecondLayer = styled.div`
    width: 90%;
    max-width: 20rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 0.5rem;
    text-align: center;
    box-shadow: 0 0 9px 0 black;
    border-radius: 6px;
    z-index: 17;
`;
export const ButtonClose = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    margin-top: -1rem;
    color: black;
    font-size: 24px;
    span {
        cursor: pointer;
        :hover{
            color:red;
        }
    }
`;
export const YesNoButton = styled.span`
    padding: 0.5rem;
    margin: 0.2rem;
    background: #2c272e;
    color: white;
    border-radius: 4px;
    border: 2px solid #2c272e;
    cursor: pointer;
    :hover {
        background-color: white;
        color: black;
    }
`;