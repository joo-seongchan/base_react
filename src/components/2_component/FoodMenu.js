import "../../styles/style.css";

export const FoodMenu = ({ menuName, drink }) => {
  // console.log(props);
  // =>프롭스는 오브젝트형태로 가져오기 때문에 매개변수에 중괄호를 적고 작성할 것
  console.log(menuName);
  console.log(drink);
  return (
    <div>
      오늘의 메뉴는 <b className="menu">{menuName}</b> 사이드 메뉴는
      <b className="drink">{drink}</b>
      {/* jsx안쪽에 변수를 사용할시 중괄호로 감싸줄것 */}
    </div>
  );
};
