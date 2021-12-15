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
    z-index: 9;
`;
export const SecondLayer = styled.div`
    width: 90%;
    max-width: 22rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("https://c4.wallpaperflare.com/wallpaper/862/804/16/black-background-portal-game-simple-background-simple-wallpaper-thumb.jpg");
    padding: 1rem 0.5rem;
    text-align: center;
    box-shadow: 0 0 9px 0 black;
    border-radius: 6px;
    z-index: 10;
    background-size: cover;
    .title{
        font-weight: bold;
        color: #05d774;
    }
`;