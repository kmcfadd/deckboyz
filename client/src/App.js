import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import { history } from '@/helpers';
import { authenticationService } from '@/services';
import { PrivateRoute } from '@/components';
import Home from './pages/Home';
import Decks from './pages/Decks';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Deckbuilder from './pages/Deckbuilder';
import Navbar from './components/Navbar/navbar';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

// class App extends React.Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           currentUser: null
//       };
//   }

//   componentDidMount() {
//       authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
//   }

//   logout() {
//       authenticationService.logout();
//       history.push('/login');
//   }

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/decks" component={Decks} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/deckbuilder" component={Deckbuilder} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
