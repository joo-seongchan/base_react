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
      <FoodMenu />
    </div>
  );
};

export default App;
