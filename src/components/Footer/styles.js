import styled from 'styled-components';

export const ComponentPage = styled.div`
    position: absolute;
    background: #2a2a2a;
    padding: 2em 4.5em;
    width: 100%;
    transform: translate(-8.5%, 10px);
    box-shadow: 1px -5px #201f1fa1;
`
export const Header = styled.div`
    padding: 0 10%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    .social-icon{
        margin-left: 0.5rem;
        font-size: 35px;
        color: #ccc;
        :hover {
            color: #05d774;
        }
    }
    .scroll-top-icon{
        font-size: 35px;
        color: #ccc;
        text-align: end;
        :hover {
            color: #05d774;
        }
    }
`
export const Content = styled.div`
    padding: 0 10%;
    margin-top: 2rem;
    color: #ccc;
    p{
        margin-bottom: 0;
    }
`