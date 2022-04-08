import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import mirror, { actions, connect, render } from "mirrorx";

// 参考地址：https://github.com/mirrorjs/mirror/blob/master/README_zh.md

mirror.model({
  name: "app",
  initialState: { name: "张三", age: 14 },
  reducers: {
    increment(state) {
      return state;
    },
    decrement(state) {
      return state;
    },
    say(state, data) {
      console.log(state, data);
      return data;
    },
  },
  effects: {
    eat() {
      console.log("吃法");
    },
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
  return { count: state.app };
})((props) => (
  <div>
    <h1>{props.count.name}</h1>
    {/* 调用 actions 上的方法来 dispatch action */}
    <button onClick={() => actions.app.decrement()}>-</button>
    <button onClick={() => actions.app.increment()}>+</button>
    {/* dispatch async action */}
    <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
    <button
      onClick={() => {
        console.log(actions.app.say({ height: 80 }));
      }}
    >
      点击
    </button>
    <button
      onClick={() => {
        actions.app.eat();
      }}
    >
      点击
    </button>
  </div>
));

// ReactDOM.render(<App />, document.getElementById("root"));
render(<App />, document.getElementById("root"));
