import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponents from "./components/2_component/FnComponent";
import {
  FnComponents_1,
  FnComponents_2,
} from "./components/2_component/FnComponent";
import { Menus } from "./components/3_props/Menus";
import { Menus_ex } from "./components/3_props/Menus_ex";
import { Subject } from "./components/3_props/Subject";
import { subJectDb, MenusDb } from "./db";

const App = () => {
  return (
    <div>
      {/* <TagRule />; */}
      {/* 1일차 */}

      {/* <FnComponents_1 />
      <FnComponents_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      <Menus_ex Menus={MenusDb} />
      {/* <Subject sub={subJectDb} /> */}
      {/* 3일차 */}
    </div>
  );
};

export default App;
