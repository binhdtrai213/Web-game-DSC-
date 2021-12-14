import styled from 'styled-components';



export const ComponentPage = styled.div`
    position: relative;
    margin-top: 3rem;
    font-weight: 500;
    width: 100%;
    color: white;
    text-align: center;
    font-size: large;
    .ant-carousel .slick-dots {
        bottom: -10px;
    }
    @media only screen and (max-width: 600px) {
        margin-top: 1rem;
    }
`;

export const ComponentProduct = styled.div`
    transition: transform .2s;
    :hover{
        transform: scale(0.97);
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0.3rem 1rem 0.3rem;
    p{
        color: white;
        font-size: 15px;
        margin-bottom: 0;
    }
    .button-prev-next{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media only screen and (max-width: 600px) {
        margin: 0 0.3rem 0.5rem 0.3rem;
        p{
            font-size: 22px;
        }
    }
    @media only screen and (max-width: 480px) {
        p{
            font-size: 20px;
        }
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
    @media only screen and (max-width: 480px) {
        width: 1.5rem;
        height: 1.5rem;
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
    @media only screen and (max-width: 480px) {
        p{
            font-size: 11px;
        }
    }
`