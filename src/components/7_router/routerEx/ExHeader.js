import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
const MenuWrap = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  margin-right: 30px;
  overflow: hidden;
  transition: 1s;
`;
const PopupWrap = styled.li`
  cursor: pointer;
  width: 25px;
  height: 25px;
  overflow: hidden;
  display: flex;
  justify-content: left;
  /* background-color: green; */
`;

const PopUp = styled.div`
  font-size: 28px;
  font-weight: 900;
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 11px;
  position: relative;
  top: 0;
  left: ${(props) => props.position};
  transition: 1;
`;

export const ExHeader = () => {
  const [left, setLeft] = useState("-25px");
  const [menu, setMenu] = useState("0");
  const handleClick = () => {
    if (left === "-25px") {
      setLeft("0");
    } else {
      setLeft("-25px");
    }
    if (menu === "0") {
      setMenu("400px");
    } else {
      setMenu("0");
    }
  };
  return (
    <Wrap>
      <Logo>
        <Link to="/"> Logo </Link>
      </Logo>
      <MenuWrap>
        <Menu width={menu}>
          <Link to="subpage1"> 메뉴1 </Link>
          <Link to="subpage2"> 메뉴2 </Link>
        </Menu>
        <PopupWrap>
          <PopUp position={left} onClick={handleClick}>
            <FontAwesomeIcon icon={faAngleRight} />
          </PopUp>
          <PopUp position={left} onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </PopUp>
        </PopupWrap>
      </MenuWrap>
    </Wrap>
  );
};
