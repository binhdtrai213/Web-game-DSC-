import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    border-radius: 5px;
`;
export const ComponentPage = styled.div`
    margin-top: 3rem;
    font-weight: 500;
    .title{
        font-size: 25px;
        color: white;
    }
    @media only screen and (max-width: 600px) {
        .title{
            font-size: 20px;
        }
        margin-top: 1rem;
    }
`;
export const ComponentProduct = styled.div`
    display: grid;
    grid-template-columns: 19% 19% 19% 19% 19%;
    justify-content: space-between;
    div{
        color: white;
        cursor: pointer;
        transition: transform .2s;
        :hover{
            transform: scale(0.97);
        }
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: 48% 48%;
    }
`;
export const ContentProduct = styled.div`
    margin-top: 1rem;
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .content-product{
        opacity: 0.5;
    }
    @media only screen and (max-width: 600px) {
        p{
            margin-bottom: 0.3rem;
        }
    }
`;