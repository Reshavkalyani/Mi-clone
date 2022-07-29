import './App.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./components/Login.js"
import Register from "./components/Register.js"
import Homepage from "./components/Homepage.js"



function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      </Switch>
   </Router>
  );
}

export default App;
