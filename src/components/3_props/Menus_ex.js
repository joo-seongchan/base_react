import { FoodMenu } from "../2_component/FoodMenu";

export const Menus_ex = ({ Menus }) => {
  //   console.log(Menus);
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <ul>
        <li>
          {/* 오늘의 메뉴는 {Menus[0].Main} 사이드 {Menus[0].side} */}
          <FoodMenu menuName={Menus[0].Main} drink={Menus[0].side} />
        </li>
        <li>
          {/* 오늘의 메뉴는 {Menus[1].Main} 사이드 {Menus[1].side} */}
          <FoodMenu menuName={Menus[1].Main} drink={Menus[1].side} />
        </li>
        <li>
          {/* 오늘의 메뉴는 {Menus[2].Main} 사이드 {Menus[2].side} */}
          <FoodMenu menuName={Menus[2].Main} drink={Menus[2].side} />
        </li>
        <li>
          {/* 오늘의 메뉴는 {Menus[3].Main} 사이드 {Menus[3].side} */}
          <FoodMenu menuName={Menus[3].Main} drink={Menus[3].side} />
        </li>
        <li>
          {/* 오늘의 메뉴는 {Menus[4].Main} 사이드 {Menus[4].side} */}
          <FoodMenu menuName={Menus[4].Main} drink={Menus[4].side} />
        </li>
      </ul>
    </>
  );
};
