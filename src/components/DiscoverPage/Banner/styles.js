import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    border-radius: 1rem;
`;

export const ComponentBanner = styled.div`
    position: relative;
`;

export const ButtonPrev = styled.div`
    z-index: 99;
    position: absolute;
    font-size: 30px;
    color: white;
    left: 1%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.8;
    background-color: #80808040;
    &:hover {
        opacity: 1;
        backdrop-filter: blur(10px);
    }
`;
export const ButtonNext = styled.div`
    z-index: 99;
    position: absolute;
    font-size: 30px;
    color: white;
    right: 1%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.8;
    background-color: #80808040;
    &:hover {
        opacity: 1;
        backdrop-filter: blur(10px);
    }
`;
export const ContentProduct = styled.div`
    width: 35vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    background-image: linear-gradient( to right, #000000ac, #00000000);
    top: 0;
    padding: 4rem;
    border: none;
    border-radius: 15px;
    font-weight: 500;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 25%);
    p{
        color: white;
        padding-bottom: 1rem;
        font-size: 19px;
    }
    span{
        color: white;
        margin-bottom: 0.5rem;
        font-size: 17px;
    }
    button{
        width: 50%;
        background-color: white;
        padding: 1rem 0;
        border-radius: 5px;
        border: none;
        color: black;
        font-size: 15px;
        font-weight: 500;
    }
`