import styled from "styled-components";

const Wrap = styled.div`
  width: 1000px;
  height: 600px;
  margin: 150px auto;
  display: felx;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 500px;
  height: 100%;
`;
const TextWrap = styled.div`
  width: 450px;
  height: 100%;
  padding: 50px 0;
  h1 {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 50px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.7;
    line-height: 30px;
  }
`;

export const SubPage1 = () => {
  return (
    <Wrap>
      <Img src="https://pbs.twimg.com/media/FJkNpveVUAEsbwK?format=jpg&name=large" />
      <TextWrap>
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip{" "}
        </p>
      </TextWrap>
    </Wrap>
  );
};
