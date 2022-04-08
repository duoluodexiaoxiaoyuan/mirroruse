import "./App.css";
import { connect } from "mirrorx";

function App(props) {
  console.log(props.count);
  return (
    <div>
      <div>你好世界</div>
    </div>
  );
}

export default connect((state) => {
  return {
    count: state.app,
  };
})(App);
