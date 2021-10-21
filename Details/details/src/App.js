import logo from './logo.svg';
import './App.css';
import PersonInfo from './Component/PersonInfo';
import React from 'react';
import Details from './Component/Details';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './Component/NotFound';

function App() {
  const [data, setData] = React.useState({})
  const fetchData = (data) => {
    setData(data)

  }
  return (
    <div className="App">
      <Switch>
        <Router>
          <Route exact path="/" component={() => (<PersonInfo fetchData={fetchData} />)} />
          <Route exact path="/details/:id" component={() => (<Details data={data} />)} />
          {/* <Route exact path="*" component={() => (<PersonInfo fetchData={fetchData} />)} /> */}
        </Router>
      </Switch>
    </div>
  );
}

export default App;
