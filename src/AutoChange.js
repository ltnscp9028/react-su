import React, { useState } from "react";

function AutoChange() {
  const [st, setSt] = useState({
      id: "",
      name: "",
  })

  const onReset = () => {
    setSt({ id: "", name: "" });
  };

  const onChangeId = (e) => {
    setSt({ ...st, id: e.target.value });
  };

  const onChangeName = (e) => {
    setSt({ ...st, name: e.target.value });
  };

  return (
    <>
      <input
        name="id"
        placeholder="학번"
        onChange={onChangeId}
        value={st.id}
      />
      <input
        name="name"
        placeholder="이름"
        onChange={onChangeName}
        value={st.name}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        학번 : {st.id}, 이름 : {st.name}
      </div>
    </>
  );
}

export default AutoChange;
