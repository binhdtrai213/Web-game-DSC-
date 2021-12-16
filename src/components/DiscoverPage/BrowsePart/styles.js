import styled from "styled-components";

export const ImageStyle = styled.img`
    width: 100%;
    cursor: pointer;
    transition: transform .2s;
        :hover{
            transform: scale(1.1);
        }
`

export const ComponentPage = styled.div`
    display: grid;
    grid-template-columns: 60% 35%;
    justify-content: space-between;
    margin: 3rem 0;
    color: white;
    font-weight: 500;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 100%;
    }
    @media only screen and (max-width: 600px) {
        margin: 1rem 0;
    }
`

export const ContentStyle = styled.div`
    display: flex;
    align-items: center;
    .title{
        font-size: 25px;
    }
    .content{
        font-size: 19px;
        opacity: 0.5;
    }
    button{
        width: 50%;
        background-color: white;
        padding: 1rem 0;
        border-radius: 5px;
        border: none;
        color: black;
        font-size: 17px;
        font-weight: 500;
        cursor: pointer;
        transition: transform .2s;
        :hover{
            transform: scale(1.05);
        }
    }
    @media only screen and (max-width: 480px) {
        justify-content: center;
        text-align: center;
        .title{
            font-size: 20px;
            margin-bottom: 5px;
        }
        .content{
            font-size: 18px;
        }
        button{
            width: 40%;
            padding: 0.5rem 0;
        }
    }
`