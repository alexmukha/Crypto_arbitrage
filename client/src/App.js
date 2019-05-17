import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import { CounterProvider } from './context';

const initialState = { currentUser: {} };
const UserContext = React.createContext(initialState);

function App() {
  return (
    <Router>
      <CounterProvider>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </CounterProvider>
    </Router>
  );
}

export default App;
