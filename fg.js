// const { createStore } = require("redux");

class Store {
	constructor(reducer, initState) {
		this.reducer = reducer;
		this.state = initState;
	}
	getState() {
		return this.state;
	}
	dispatch(action) {
		this.state = this.reducer(this.state, action);
	}
}

const reducer = (state, action) => {
	if (action.type === "inc_count") {
		return {
			count: state.count + action.payload,
		};
	}
	if (action.type === "dic_count") {
		return {
			count: state.count - action.payload,
		};
	}
	return {};
};

const init = { count: 10 };

const store = new Store(reducer, init);
// const store = createStore(reducer, init);

console.log(store.getState());

store.dispatch({ type: "inc_count", payload: 1 });

console.log(store.getState());

store.dispatch({ type: "dic_count", payload: 1 });
console.log(store.getState());
