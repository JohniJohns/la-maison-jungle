// import logo from '../logo.svg';
import Banner from './Banner'
import Cart from './Cart'
import '../styles/App.css';
import '../styles/Banner.css';
import '../styles/Cart.css';

function App() {
  return (
        <div>
          <Banner />
          <Cart />
        </div>
        )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h2>React, j'arrive !</h2>
  //       <p>Je dois résussir à tout prix !</p>
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
