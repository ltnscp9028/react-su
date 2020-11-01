const { default: AutoChange } = require("./AutoChange");
const { default: Hello2 } = require("./Hello2");
const { default: MovieApp } = require("./MovieApp");
const { default: SelectColor } = require("./SelectColor");


function App() {
  return (
    <>
      <Hello2/>
      <SelectColor/>
      <AutoChange/>
      <MovieApp/>
    </>
  );
}

export default App;
