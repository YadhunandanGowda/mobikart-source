import logo from './logo.svg';
import './App.scss';
import {HashRouter , Switch, Route} from "react-router-dom";
import Header from './components/header/index';
import Home from './components/home/index';
import Footer from './components/footer/index';
import Product from './components/productpage/index';

function App() {
  
  return (
    <div className="App">
      <div id="main">
      <HashRouter>
      <Header></Header>
          <Switch>
              <Route exact={true} path="/">
                <Home/>
              </Route>
              <Route  path="/product/:id">
                <Product/>
              </Route>
          </Switch>
    <Footer></Footer>
      </HashRouter>
      </div>
    </div>
  );
}

export default App;
