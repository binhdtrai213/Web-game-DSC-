import styled from 'styled-components';

export const ComponentPage = styled.div`
    background: #2a2a2a;
    padding: 2em 4.5em;
`
export const Header = styled.div`
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
    margin-top: 2rem;
    color: #ccc;
    p{
        margin-bottom: 0;
    }
`