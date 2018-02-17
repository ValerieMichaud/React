import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import './index.css';


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <Link to={{ pathname: '/roster/7' }}>Player #7</Link>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </div>
)

const Player = (props) => {
  //const player = PlayerAPI.get(
  //  parseInt(props.match.params.number, 10)
  //)
  let player = "";
  axios
    .get("/player.json")
    .then(function(result) {    
      player = result.data.player;
      console.log(player)
      if (!player) {
        return <div>Sorry, but the player was not found</div>
      }
      return (
        <div>
          <h1>{player.name} (#{player.number})</h1>
          <h2>{player.position}</h2>
        </div>
      )
    });
    return null;
}

const FullRoster = () => (
  <div>
    <ul>
      {
        //axios
        //  .get("players.json")
        //  .then(function(result) {    
        //    console.log(result);
        //  });
        /* PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        )) */
      }
    </ul>
  </div>
)
const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)
const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
    <Header />
  </div>
)



ReactDOM.render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('root'))