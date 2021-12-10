import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const ComponentPage = styled.div`
    margin-top: 3rem;
    font-weight: 500;
    .ant-carousel .slick-list .slick-slide {
        div{
            div{
                width: 95% !important;
                margin: 0.5rem !important;
            }
        }
    }
    .column1, .column2{
        border-right:  1px solid #ffffff1a;
    }
    .title{
        font-size: 25px;
    }
    .name-product, .price-product, .title{
        color: white;
    }
    .ant-carousel .slick-dots-bottom {
        bottom: -15px;
    }
    @media (max-width: 800px) {
        .title{
            font-size: 20px;
        }
        .column3{
            border-right:  1px solid #ffffff1a;
        }
    }
    @media only screen and (max-width: 600px) {
        margin-top: 1rem;
    }
`;

export const ProductStyle = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    padding: 0.7rem 1.3rem;
    border-radius: 1rem;
    margin-right: 1.5rem;
    transition: .2s;
    cursor: pointer;
    :hover{
        background-color: #2a2a2a;
    }
    p{
        margin-bottom: 0.4rem;
    }
    .content{
        margin: auto 1rem;
        p, span{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    @media only screen and (max-width: 1024px) {
        grid-template-columns: 30% 70%;
        padding: 0.5rem 1rem;
        margin-right: 1rem;
    }
`