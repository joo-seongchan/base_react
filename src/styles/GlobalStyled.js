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

    a{
      text-decoration: none;
    }
    body{
      font-family: 'Noto Sans KR', sans-serif;
    }
    
`;
