import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";


import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from "./redux/store";
import { loadUser } from "./redux/actions/user";
import GlobalStyle from './globalStyles';
import Home from "./pages/Home/Home";



const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
