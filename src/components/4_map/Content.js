import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.bgColor};
  /* =>프롭스 받을때 사용방법 */
  font-size: ${mainStyle.fontSize};
`;

export const Content = () => {
  return (
    <div>
      <Box bgColor={mainStyle.color}>Styled components</Box>
      {/* =>스타일 컴포넌트 사용할때 프롭스 전달 */}
    </div>
  );
};

// *리액트 스타일
// =>jsx문법에서는 class className을 사용해야됨
// =>태그 내부에서도 사용할 수 있지만 외부로 사용가능
// 단, 반드시 스타일을 사용하는 컴포넌트에 import 시킬것
// =>import "./styles/styles.css"

// *styled-components
// =>태그 이름을 지정하지 않아도 되는 장점이 있음
// => 프롭스로 값을 전달 받을 수 있음
// => npm install --save styled-components
// =>--save옵션은 패키지 제이슨에 dependency항목에 추가하는건데 생략 가능함
// =>기본 스타일은 scss와 비슷함
