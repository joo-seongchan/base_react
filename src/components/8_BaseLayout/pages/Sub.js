import styled from "styled-components";

const Section = styled.div`
  padding: 200px 400px;
  display: flex;
  justify-content: center;
`;
const Bg = styled.div`
  width: 400px;
  height: 500px;
  background-color: lightblue;
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

export const Sub = ({ cons }) => {
  return (
    <Section>
      <Bg />
      <TextWrap>
        <Title>{cons.title}</Title>
        <Desc>{cons.desc}</Desc>
      </TextWrap>
    </Section>
  );
};
