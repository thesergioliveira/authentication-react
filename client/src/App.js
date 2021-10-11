import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Products from './components/Products';

function App() {
  const stylingObject = {
    ul: {
      width: '100vw',
      margin: 'auto 0',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '2rem',
      gap: '1rem',
    },
    li: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      color: 'gray',
    },
    text: {
      textAlign: 'center',
    },
  };
  return (
    <Router>
      <header>
        <div className="whatever">
          <h1 style={{ textAlign: 'center' }}>Authentication App</h1>
          <nav>
            <ul style={stylingObject.ul}>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/'}>
                  Home
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/about'}>
                  About
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/blog'}>
                  Blog
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/products'}>
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/" exact render={Home}></Route>
          <Route path="/about" exact render={About}></Route>
          <Route path="/blog" exact render={Blog}></Route>
          <Route path="/products" exact render={Products}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
