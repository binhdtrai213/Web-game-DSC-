import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const ComponentPage = styled.div`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    justify-content: space-between;
    margin-top: 3rem;
    color: white;
    font-weight: 500;
    .column1, .column2{
        border-right:  1px solid #ffffff1a;
    }
    .title{
        font-size: 25px;
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
    }
`