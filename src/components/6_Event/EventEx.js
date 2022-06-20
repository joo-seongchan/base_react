import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  font-size: 20px;
  background-color: ${(props) => props.bgColor};
  color: white;
  line-height: 200px;
  text-align: center;
`;

const Popup = styled.div`
  width: 400px;
  height: 400px;
  background-color: yellow;
  position: absolute;
  top: 500px;
  left: 500px;
  display: ${(props) => props.display};
`;

export const EventEx = () => {
  console.log(Wrap);
  const [color, setColor] = useState("black");
  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }

    if (color === "black") {
      setColor("gold");
    } else if (color === "gold") {
      setColor("red");
    } else if (color === "red") {
      setColor("black");
    }
  };

  return (
    <>
      <Wrap bgColor={color} onClick={handleClick}>
        클릭해보세요
      </Wrap>
      <Popup display={display}></Popup>
    </>
  );
};
