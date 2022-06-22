import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  height: 70px;
  width: 100%;
  background-color: white;
  padding: 0 250px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  a {
    color: #1d1d1d;
  }
`;
const Logo = styled.h1`
  font-size: 28px;
  font-weight: 900;
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  a {
    color: #1d1d1d;
  }
`;
const Menu = styled.li`
  margin-left: 250px;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">로고</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="sub1">메뉴1</Link>
        </Menu>
        <Menu>
          <Link to="sub2">메뉴2</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
