export const MapEx = ({ Db }) => {
  return (
    <>
      <div
        style={{
          margin: "100px auto",
        }}
      >
        <h1>카카오</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {Db.map((Text) => (
            <div
              key={Text.id}
              style={{
                marginRight: "50px",
                width: "30%",
              }}
            >
              <img
                src={Text.img}
                style={{
                  width: "100%",
                  height: "300px",
                }}
              />
              <h3>{Text.title}</h3>
              <h6>{Text.subTitle.slice(1, 100) + "..."}</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
