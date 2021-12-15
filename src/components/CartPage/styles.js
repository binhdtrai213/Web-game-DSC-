import styled from 'styled-components';

export const ComponentItems = styled.div`
    width: 100%;
    margin: 2rem 0;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding-bottom: 5rem;

    @media only screen and (max-width: 400px) {
        margin: 1rem 0;
        .title{
            font-size: 16px;
        }
    }
`;
export const contentBill = {
    borderRadius: '8px',
    alignItems: 'center',
};
export const imageStyle = {
    width: '100%',
};
export const Text = styled.div`
    line-height: 21px;
    p{
        margin-bottom: 0.5rem;
    }
    .name-product{
        color: #FF4848;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-transform: capitalize;
        color: red;
        font-size: 20px;
        font-weight: bold;
    }
    .content-product{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-transform: capitalize;
        font-size: 16px;
        opacity: 0.8;
    }
    .price-product{
        font-size: 16px;
        font-weight: bold;
    }
    @media only screen and (max-width: 400px) {
        line-height: 19px;
        p{
            margin-bottom: 0.3rem;
        }
        .name-product{
            font-size: 17px;
        }
        .content-product{
            font-size: 12px;
        }
        .price-product{
            font-size: 12px;
        }
    }
    @media only screen and (max-width: 280px) {
        line-height: 18px;
        p{
            margin-bottom: 0.1rem;
        }
        .name-product{
            font-size: 15px;
        }
        .content-product{
            font-size: 11px;
        }
        .price-product{
            font-size: 11px;
        }
    }
`;
export const ButtonStyle = styled.button`
    font-size: 25px;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    :hover {
        color: #ff4848;
    }
`;
export const centerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
};