import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './store';
import { Home } from "./routes/Home";
import { Chats } from "./routes/Chats";
import { Profile } from "./routes/Profile";


export const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppBar position="static">
            <Toolbar>
              <Button to="/" component={Link} color="inherit">Home</Button>
              <Button to="/profile" component={Link} color="inherit">Profile</Button>
              <Button to="/chats" component={Link} color="inherit">Chats</Button>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route component={Chats} path="/chats" />
            <Route component={Profile} path="/profile" />
            <Route component={Home} path="/" />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
