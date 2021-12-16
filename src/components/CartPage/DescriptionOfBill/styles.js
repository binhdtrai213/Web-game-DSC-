import styled from 'styled-components';

export const Description = styled.div`
    width: 100%;
    padding: 1.7rem 1.5rem;
    margin-bottom: 1rem;
    align-items: center;
    background: #f2f2f2;
    border-radius: 5px;
    p {
        margin-bottom: 0.3rem;
    }
    @media only screen and (max-width: 400px) {
        padding: 1rem 0.5rem;
        .title{
            font-size: 16px;
        }
    }
`;
export const ButtonOrder = styled.button`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    background-color: #2c272e;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    border-radius: 2px;
    border: 2px solid #2c272e;
    cursor: pointer;
    :hover {
        background-color: white;
        color: black;
    }
    @media only screen and (max-width: 400px) {
        margin: 0.3rem 0;
        font-size: 13px;
    }
`;
export const ButtonBuyMore = styled.button`
    width: 100%;
    margin: 0.5rem 0;
    padding: 0;
    border: none;
    a{
        display: block;
        width: 100%;
        padding: 0.5rem;
        transition: none;
        background-color: white;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        border-radius: 2px;
        border: 2px solid #2c272e;
        cursor: pointer;
        color: black;
        :hover {
            color: white !important;
            background-color: #2c272e;
        }
    }
    @media only screen and (max-width: 400px) {
        margin: 0.3rem 0;
        font-size: 13px;
    }
`;