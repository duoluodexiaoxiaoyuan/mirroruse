import mirror, { actions } from "mirrorx";
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
