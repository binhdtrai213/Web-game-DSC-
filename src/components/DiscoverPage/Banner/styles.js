import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
`;

export const ComponentBanner = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    .ant-carousel .slick-dots-bottom {
        bottom: -5px;
    }
    @media only screen and (max-width: 480px) {
        .ant-carousel .slick-dots-bottom {
            bottom: -11px;
        }
        .ant-carousel .slick-dots li button {
            height: 2px;
        }
    }
`;

export const ButtonPrev = styled.div`
    z-index: 99;
    position: absolute;
    font-size: 30px;
    color: white;
    left: 1%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.8;
    background-color: #80808040;
    &:hover {
        opacity: 1;
        backdrop-filter: blur(10px);
    }
    @media only screen and (max-width: 1024px) {
        font-size: 25px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;
export const ButtonNext = styled.div`
    z-index: 99;
    position: absolute;
    font-size: 30px;
    color: white;
    right: 1%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.8;
    background-color: #80808040;
    &:hover {
        opacity: 1;
        backdrop-filter: blur(10px);
    }
    @media only screen and (max-width: 1024px) {
        font-size: 25px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;
export const ContentProduct = styled.div`
    width: 35vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    background-image: linear-gradient( to right, #000000ac, #00000000);
    top: 0;
    padding: 4rem;
    border: none;
    font-weight: 500;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 25%);
    p{
        color: white;
        padding-bottom: 1rem;
        font-size: 20px;
    }
    span{
        color: white;
        margin-bottom: 0.5rem;
        font-size: 18px;
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
    @media only screen and (max-width: 1024px) {
        width: 50vw;
        padding: 2.2rem;
        p{
            padding: 0;
            margin: 0;
        }
        button{
            padding: 0.2rem 0;
        }
    }
    @media only screen and (max-width: 600px) {
        p, span{
            font-size: 16px;
        }
        button{
            font-size: 14px; 
        }
    }
    @media only screen and (max-width: 480px) {
        width: 60vw;
        padding: 0.6rem;
        p, span{
            font-size: 12px;
        }
        button{
            font-size: 10px; 
        }
    }
    @media only screen and (max-width: 300px) {
        p, span{
            font-size: 10px;
        }
        button{
            font-size: 8px; 
            padding: 0.1rem 0;
        }
    }
`;