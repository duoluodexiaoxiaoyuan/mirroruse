import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import mirror, { actions, connect, render } from "mirrorx";

// 参考地址：https://github.com/mirrorjs/mirror/blob/master/README_zh.md

mirror.model({
  name: "app",
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
  effects: {
    async incrementAsync() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      actions.app.increment();
    },
  },
});

// 使用 react-redux 的 connect 方法，连接 state 和组件
const App = connect((state) => {
  console.log(state);
  return { count: state.app };
})((props) => (
  <div>
    <h1>{props.count}</h1>
    {/* 调用 actions 上的方法来 dispatch action */}
    <button onClick={() => actions.app.decrement()}>-</button>
    <button onClick={() => actions.app.increment()}>+</button>
    {/* dispatch async action */}
    <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
  </div>
));

// ReactDOM.render(<App />, document.getElementById("root"));
render(<App />, document.getElementById("root"));
