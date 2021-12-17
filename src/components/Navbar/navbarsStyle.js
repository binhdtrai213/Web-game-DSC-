import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    background: #63D471;
    height: 85px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    top: 0;
    left: 0;
    width: 100%;
    background: #00000059;
    padding: 0 1%;
`;

export const NavLink = styled(Link)`
  color: #05d774;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.1rem;
  height: 100%;
  cursor: pointer;
  :hover{
    color: white;
  }
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavItem = styled.div`
    display: flex;
    align-items: center;
`

export const NavMenu = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    margin: 0 7rem;
    padding: 0.5rem 0;
    justify-content: space-between;
    .content-left{
      display: grid;
      grid-template-columns: 30% 20% 20% 30%;
    }
    @media only screen and (max-width: 900px){
      margin: 0 3rem;
    }

    /* padding-left: 32px; */
    /* place-items: center; */
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #3e3e3e8c;
  padding: 10px 22px;
  color: #05d774;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #05d774;
    color: black;
  }
`;