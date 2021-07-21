import ReactDom from "react-dom";
import App from "./App";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers"
import {Provider} from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { ThemeProvider } from '@material-ui/core/styles';
import {globalMaterialUITheme} from "./styles/theme";

const store = createStore(reducers, compose(applyMiddleware(thunk), devToolsEnhancer()))

ReactDom.render(<ThemeProvider theme={globalMaterialUITheme}>
   <Provider store={store}> <App/></Provider>
</ThemeProvider> , document.getElementById("root"))
