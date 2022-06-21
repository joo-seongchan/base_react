import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Secton1 = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 80px;
  background: url(https://www.dexerto.com/wp-content/uploads/2021/05/05/ca718014-cc39-4e85-8abf-b159f12e4729-psblog_bnr_nike_pg5_rgb_1920x1080_wht.jpg)
    no-repeat center/cover;
`;
const TitleWrap = styled.div`
  width: 20%;
  padding: 150px 0;
  margin-left: 100px;
  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  p {
    margin-top: 50px;
    font-size: 16px;
    line-height: 30px;
    color: #333;
  }
`;
const Section2 = styled.div`
  margin: 100px 0;
  align-items: center;
  padding: 0 220px;
`;
const BoxWrap = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
const move = keyframes`
0%{
    transform: translate(0,0);
}
100%{
    transform: translate(-10px, -10px);
}
`;

const Con = styled.img`
  width: 500px;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: 0.5s;

  &:hover {
    animation: ${move} 0.5s alternate forwards;
  }
`;

export const ExHome = () => {
  return (
    <>
      <Secton1>
        <TitleWrap>
          <h1>Just Do It</h1>
          <p>
            How to buy the new Sony X Nike PS5 Shoes: price, release date, more
          </p>
        </TitleWrap>
      </Secton1>
      <Section2>
        <BoxWrap>
          <Link to="subpage1">
            <Con src="https://pbs.twimg.com/media/FJkNpveVUAEsbwK?format=jpg&name=large"></Con>
          </Link>
          <Link to="subpage2">
            <Con src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Mitncwco36Ej4SfSCcqmmlGaZxOpxLMkfg&usqp=CAU"></Con>
          </Link>
        </BoxWrap>
      </Section2>
    </>
  );
};
