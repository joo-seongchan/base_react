import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Menus = styled.div`
  display: flex;
  justify-content: cetner;
  align-items: center;
`;

export const Header = () => {
  return (
    <SHeader>
      <Menus>
        <FontAwesomeIcon icon={faChevronDown} />
      </Menus>
      <Menus>
        <FontAwesomeIcon icon={faBars} />
      </Menus>
    </SHeader>
  );
};
