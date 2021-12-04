import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    border-radius: 5px;
`;
export const ComponentPage = styled.div`
    margin-top: 3rem;
    font-weight: 500;
    color: white;
`;
export const ComponentProduct = styled.div`
    display: grid;
    grid-template-columns: 19% 19% 19% 19% 19%;
    justify-content: space-between;
    div{
        transition: transform .2s;
        :hover{
            transform: scale(0.97);
        }
    }
`;
export const ContentProduct = styled.div`
    margin-top: 1rem;
    cursor: pointer;
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .content-product{
        opacity: 0.5;
    }
`;