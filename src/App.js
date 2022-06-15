import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponents from "./components/2_component/FnComponent";
import {
  FnComponents_1,
  FnComponents_2,
} from "./components/2_component/FnComponent";
import { FoodMenu } from "./components/2_component/FoodMenu";

const App = () => {
  return (
    <div>
      {/* <TagRule />; */}
      {/* 1일차 */}

      {/* <FnComponents_1 />
      <FnComponents_2 /> */}
      {/* <ClassComponent /> */}

      {/* *props
      =><컴포넌트 프롭스명 = "값"/> */}
      <h3>아침메뉴</h3>
      <FoodMenu menuName="계란밥" drink="콜라" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="에슐리" drink="환타" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="김치찌개" drink="식혜" />
      {/* 2일차 */}
    </div>
  );
};

export default App;
