import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 10px;
`;

export const ComponentPage = styled.div`
    margin-top: 3rem;
    .media-bigger-than-600px{
        display: grid;
        grid-template-columns: 48.5% 48.5%;
        justify-content: space-between;
    }
    .ant-carousel .slick-dots {
        bottom: -12px;
    }
    @media only screen and (max-width: 600px) {
        margin-top: 1rem;
    }
`;

export const ContentProduct = styled.div`
    color: white;
    transition: transform .2s;
    cursor: pointer;
    :hover{
        transform: scale(1.02);
    }
    p{
        font-size: 22px;
        margin-bottom: 0.5rem;
    }
    .content-product{
        font-size: 15px;
        opacity: 0.5;
        margin-bottom: 0.5rem;
    }
    @media only screen and (max-width: 480px) {
        p{
            font-size: 18px;
        }
        .content-product{
            font-size: 12px;
        }
    }
`