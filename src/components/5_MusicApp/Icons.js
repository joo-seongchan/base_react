import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowUp,
  faHeart,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333;
  padding: 30px 20px;
  border-radius: 25px;
`;
const MenuWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const Menuleft = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: black;
    i {
      color: red;
    }
  }
  i {
    font-size: 14px;
    font-weight: 900;
  }
`;
const Menuright = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: white;
  }
`;
const Img = styled.div`
  width: 270px;
  height: 270px;
  background: url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Bring_Out_the_Bottles_by_Redfoo.png/220px-Bring_Out_the_Bottles_by_Redfoo.png)
    no-repeat center/cover;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  margin: 25px auto 20px auto;
`;

const Music = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;
const Artist = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-bottom: 30px;
`;
const Playbar = styled.div`
  display: flex;
  width: 100%;
  height: 5px;
  margin-bottom: 5px;
`;
const Play = styled.div`
  width: 10%;
  background-color: salmon;
`;

const NonePlay = styled.div`
  width: 90%;
  background-color: gray;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
  margin-bottom: 20px;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 16px;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: salmon;
`;
const MoreArtist = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 35px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  div {
    display: flex;
    align-items: center;
  }
`;
const MArtistImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: red;
  margin-right: 8px;
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqM6D5jxKtsUnd_321E1fUPswoRJIwUS-AA&usqp=CAU)
    no-repeat center/cover;
`;
const MArtistName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
`;
const MIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icons = () => {
  return (
    <Bg>
      <MenuWrap>
        <Menuleft>
          <i className="fa-solid fa-chevron-down"></i>
        </Menuleft>
        <Menuright>
          <i className="fa-solid fa-bars"></i>
        </Menuright>
      </MenuWrap>
      <Img></Img>

      <Music>Bring out the bottle</Music>
      <Artist>LamFao</Artist>

      <Playbar>
        <Play></Play>
        <NonePlay></NonePlay>
      </Playbar>
      <TimeWrap>
        <div>00:03</div>
        <div>03:40</div>
      </TimeWrap>
      <IconWrap>
        <Icon>
          <i className="fa-solid fa-shuffle"></i>
        </Icon>
        <Icon>
          <i className="fa-solid fa-backward"></i>
        </Icon>
        <Icon2>
          <i className="fa-solid fa-pause"></i>
        </Icon2>
        <Icon>
          <i className="fa-solid fa-forward"></i>
        </Icon>
        <Icon>
          <i className="fa-solid fa-repeat"></i>
        </Icon>
      </IconWrap>

      <MoreArtist>
        <div>
          <MArtistImg></MArtistImg>
          <MArtistName>LamFao</MArtistName>
        </div>
        <MIcon>
          <i className="fa-solid fa-forward-step arrow"></i>
        </MIcon>
      </MoreArtist>
    </Bg>
  );
};
