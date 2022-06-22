import styled from "styled-components";

const Section = styled.div`
  padding: 200px 400px;
  display: flex;
  justify-content: center;
`;
const Bg = styled.div`
  width: 400px;
  height: 500px;
  background-color: lightseagreen;
`;
const TextWrap = styled.div`
  max-width: 500px;
  margin-left: 40px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const Desc = styled.div`
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const Sub2 = () => {
  return (
    <Section>
      <Bg />
      <TextWrap>
        <Title>서브페이지2</Title>
        <Desc>
          {" "}
          create mode 100644 src/components/8_BaseLayout/LayoutRouter.js create
          mode 100644 src/components/8_BaseLayout/components/Header.js create
          mode 100644 src/components/8_BaseLayout/pages/Home.js create mode
          100644 src/components/8_BaseLayout/pages/NotFound.js create mode
          100644 src/components/8_BaseLayout/pages/Sub1.js create mode 100644
          src/components/8_BaseLayout/pages/Sub2.js{" "}
        </Desc>
      </TextWrap>
    </Section>
  );
};
