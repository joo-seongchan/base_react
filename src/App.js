// import TagRule from "./components/1_JsxRule/TagRule";
// import ClassComponent from "./components/2_component/ClassComponent";
// // import FnComponents from "./components/2_component/FnComponent";
// import {
//   FnComponents_1,
//   FnComponents_2,
// } from "./components/2_component/FnComponent";
// import { FoodMenu } from "./components/2_component/FoodMenu";
// import { Menus } from "./components/3_props/Menus";
// import { Menus_ex } from "./components/3_props/Menus_ex";
// import { Subject } from "./components/3_props/Subject";
import { ConEx } from "./components/4_map/ConEx";
import { Content } from "./components/4_map/Content";
import { FoodMenu2 } from "./components/4_map/FoodMenu2";
import { MapEx } from "./components/4_map/MapEx";
import { Icons } from "./components/5_MusicApp/Icons";
import { MusicApp } from "./components/5_MusicApp/MusicApp";
import { ClassEvent } from "./components/6_Event/ClassEvent";
import { EventEx } from "./components/6_Event/EventEx";
import { FnEvent } from "./components/6_Event/FnEvent";
import { subJectDb, MenusDb, MapDb, conDb } from "./db";
import { GlobalStyled } from "./styles/GlobalStyled";

const App = () => {
  return (
    <div>
      <GlobalStyled />
      {/* <TagRule />; */}
      {/* 1일차 */}

      {/* <FnComponents_1 />
      <FnComponents_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      {/* <Menus_ex Menus={MenusDb} /> */}
      {/* <Subject sub={subJectDb} /> */}
      {/* 3일차 */}

      {/* <FoodMenu2 menus={MenusDb} /> */}
      {/* <MapEx Db={MapDb} /> */}
      {/* <Content /> */}
      {/* <ConEx conData={conDb} /> */}
      {/* 4일차
       */}
      {/* <Icons /> */}
      {/* <MusicApp /> */}
      {/* 5일차 */}
      {/* <ClassEvent /> */}
      {/* <FnEvent /> */}
      <EventEx />
    </div>
  );
};

export default App;
