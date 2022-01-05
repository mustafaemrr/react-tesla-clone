import React, { useState } from 'react'
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <>
      <Container>
        <a href="/">
          <img src="/images/logo.svg" alt="Tesla Logo" />
        </a>

        <Menu>
          {cars && cars.map((car, index) => (
            <a key={index} href="/">{car}</a>
          ))}
        </Menu>

        <RightMenu>
          <a href="/">Shop</a>
          <a href="/">Account</a>
          
          <CustomMenu onClick={() => setBurgerStatus(true)}>
            Menu
          </CustomMenu>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)}/>
          </CloseWrapper>
          {cars && cars.map((car, index) => (
            <li key={index}><a href="/">{car}</a></li>
          ))}
          <li> <a href="/">Roadster</a> </li>
          <li> <a href="/">Semi</a> </li>
          <li> <a href="/">Charging</a> </li>
          <li> <a href="/">Powerwall</a> </li>
          <li> <a href="/">Commercial Energy</a> </li>
          <li> <a href="/">Utilities</a> </li>
          <li> <a href="/">Find Us</a> </li>
          <li> <a href="/">Support</a> </li>
          <li> <a href="/">Investor Relations</a> </li>
        </BurgerNav>
      </Container>
    </>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  top:0;
  left:0;
  right:0;
  z-index: 1;
  @media(max-width:768px) {
    padding: 0 15px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    padding: 0 15px;
    font-size: 14px;
    font-weight: 600;
  }

  @media(max-width:768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a{
    margin-right:30px;
    font-size: 14px;
    font-weight: 600;
  }
`

const CustomMenu = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #FFFFFF;
  width: 300px;
  z-index: 15;
  list-style: none;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  overflow-y: auto;

  li {
    width: 100%;
    padding: 5px 8px;
    text-align: left;
    margin-bottom: 8px;
    &:hover {
      background-color: #f2f2f2;
      border-radius: 8px;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`