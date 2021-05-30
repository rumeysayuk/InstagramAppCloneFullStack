import ReactDom from "react-dom";
import App from "./App";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers"
import {Provider} from "react-redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDom.render(<Provider store={store}> <App/></Provider>, document.getElementById("root"))
