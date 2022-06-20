import {
  faBackward,
  faBars,
  faChevronDown,
  faForward,
  faForwardStep,
  faPause,
  faRandom,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { BottomPlay } from "./components/BottomPlay";
import { BtnWrap } from "./components/BtnWrap";
import { Header } from "./components/Header";
import { PlayWrap } from "./components/PlayWrap";
import { TitleWrap } from "./components/TitleWrap";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;
const Section = styled.div`
  width: 375px;
  height: 667px;
  background-color: #333;
  margin: 0 auto;
`;

const CoverImg = styled.div``;

export const MusicApp = () => {
  return (
    <Wrap>
      <Section>
        <Header />

        <CoverImg />

        <TitleWrap />

        <PlayWrap />

        <BtnWrap />

        <BottomPlay />
      </Section>
    </Wrap>
  );
};
