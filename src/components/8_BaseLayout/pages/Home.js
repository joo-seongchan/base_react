import styled from "styled-components";
import { Link } from "react-router-dom";

const Banner = styled.div`
  height: 800px;
  background-color: lightgray;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 400px;
`;
const Content = styled.div`
  width: 40%;
  height: 500px;
  background-color: lightgray;
  box-shadow: 25px 25px 20px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translate(25px, 25px);
    box-shadow: none;
  }
`;

export const Home = () => {
  return (
    <>
      <Banner></Banner>

      <Section>
        <Content>
          <Link to="/sub1"></Link>
        </Content>
        <Content>
          <Link to="/sub2"></Link>
        </Content>
      </Section>
    </>
  );
};
