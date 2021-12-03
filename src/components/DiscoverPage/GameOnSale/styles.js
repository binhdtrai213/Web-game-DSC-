import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 95%;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
`;

export const ComponentPage = styled.div`
    position: relative;
    margin-top: 3rem;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0.3rem;
    p{
        color: white;
        font-size: 22px;
    }
    div{
        display: flex;
        justify-content: space-between;
    }
`

export const ButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center !important;
    width: 2rem;
    height: 2rem;
    color: white;
    font-size: 15px;
    margin-left: 0.5rem;
    background: #303030;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
        background: #474747;
    }
`;
export const ContentProduct = styled.div`
    padding: 1rem 0.5rem;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    p{
        color: white;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-bottom: 0.2rem;
    }

`