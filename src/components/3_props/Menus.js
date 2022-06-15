import { FoodMenu } from "../2_component/FoodMenu";

export const Menus = () => {
  return (
    <>
      {/* *props
      =><컴포넌트 프롭스명 = "값"/> */}
      <h3>아침메뉴</h3>
      <FoodMenu menuName="계란밥" drink="콜라" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="에슐리" drink="환타" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="김치찌개" drink="식혜" />
    </>
  );
};
