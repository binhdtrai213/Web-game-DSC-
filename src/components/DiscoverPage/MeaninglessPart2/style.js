import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    border-radius: 10px;
    transition: transform .2s;
    :hover{
        transform: scale(1.02);
    }
`;

export const ComponentPage = styled.div`
    display: grid;
    grid-template-columns: 48.5% 48.5%;
    justify-content: space-between;
    margin-top: 3rem;
`;

export const ContentProduct = styled.div`
    color: white;
    cursor: pointer;
    p{
        font-size: 22px;
        margin-bottom: 0.5rem;
    }
    .content-product{
        font-size: 15px;
        opacity: 0.5;
        margin-bottom: 0.5rem;
    }
`