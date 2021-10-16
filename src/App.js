import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./components/about/About";
import { Blog } from "./components/blog/Blog";
import { Description } from "./components/description/Description";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="mw7 center ph3-ns pv3">
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/description">
            <Description />
          </Route>
          <Route>
            <Blog />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
