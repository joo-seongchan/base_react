import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  color: "#910610",
  fontSize: "50px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing:border-box;
    }
`;
