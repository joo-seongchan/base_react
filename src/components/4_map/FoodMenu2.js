export const FoodMenu2 = ({ menus }) => {
  console.log(menus);
  return (
    <div>
      <h1>오늘의 메뉴!</h1>
      <ul>
        {menus.map((desh) => (
          <li key={desh.id}>
            오늘의 메뉴는 {desh.Main}랑 사이드메뉴는 {desh.side}다!
            {console.log(desh)}
          </li>
        ))}
      </ul>
    </div>
  );
};

// *map
// => 배열 안의 요소를 새로운 배열로 만들어줌
// =>map(변수 =>  새로 만든 배열)

// *key
// =>Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다
