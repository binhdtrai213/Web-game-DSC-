import styled from "styled-components";

export const ImageStyle = styled.img`
    width: 100%;
    cursor: pointer;
    transition: transform .2s;
        :hover{
            transform: scale(1.15);
        }
`

export const ComponentPage = styled.div`
    display: grid;
    grid-template-columns: 60% 35%;
    justify-content: space-between;
    margin-top: 3rem;
    color: white;
    font-weight: 500;
`

export const ContentStyle = styled.div`
    display: flex;
    align-items: center;
    .title{
        font-size: 25px;
        cursor: pointer;
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
`