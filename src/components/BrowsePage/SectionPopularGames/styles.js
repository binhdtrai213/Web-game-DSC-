import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 90%;
    border-radius: 5px;
    cursor: pointer;
`;
export const ComponentPage = styled.div`
    margin-top: 3rem;
    font-weight: 500;
    color: white;
    .title{
        font-size: 15px;
    }
    @media only screen and (max-width: 600px) {
        .title{
            font-size: 20px;
        }
        margin-top: 1rem;
    }
`;
export const ComponentProduct = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-box-pack: start;
    -webkit-justify-content: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    justify-items: start;
    -webkit-align-items: baseline;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: flex-end;
    width: 80%;
    align-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    div{
        transition: transform .2s;
        :hover{
            transform: scale(0.97);
        }
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: 48% 48%;
    }
`;
export const ImageProduct = styled.div`  width: 20%`;
  


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
    @media only screen and (max-width: 600px) {
        p{
            margin-bottom: 0.3rem;
        }
    }
`;