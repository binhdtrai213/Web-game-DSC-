import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
`;
export const ComponentPage = styled.div`
    margin-top: 3rem;
    background-color: #2a2a2a;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    font-weight: 500;
`;
export const ComponentProduct = styled.div`
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    justify-content: space-between;
`;
export const ProductStyle = styled.div`
    color: white;
    transition: transform .2s;
    cursor: pointer;
    :hover{
        transform: scale(0.98);
    }
    div{
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 1rem;
        p{
            padding: 0.3rem;
            text-align: center;
            margin-bottom: 0;
        }
    }
    .content-product{
        opacity: 0.5;
    }
`;
export const Title = styled.div`
    color: white;
    margin-bottom: 1rem;
    .title{
        font-size: 25px;
        margin-left: 0.5rem;
    }
`;