import React from "react";
function Hello2({
  id = 0,
  name = "이름없음",
  color = "black",
  children = "별명없음",
}) {
  return (
    <>
      <div style={{ color }}>
        학번 : {id} <br />
        이름 : {name} <br />
        별명 : {children} <br />
      </div>
    </>
  );
}

export default Hello2;