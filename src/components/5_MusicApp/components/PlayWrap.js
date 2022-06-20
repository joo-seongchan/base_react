import styled from "styled-components";

const SPlayWrap = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;
const Gage = styled.div`
  width: 10%;
  height: 100%;
  background-color: aquamarine;
`;
const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  span {
    font-size: 12px;
    font-weight: 100;
    color: gray;
    opacity: 0.7;
  }
`;

export const PlayWrap = () => {
  return (
    <SPlayWrap>
      <GageWrap>
        <Gage />
      </GageWrap>
      <TimeWrap>
        <span>00:03</span>
        <span>03:40</span>
      </TimeWrap>
    </SPlayWrap>
  );
};
