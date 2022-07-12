import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primer programa con React! :D
        </p>
      </header>
    </div>
  );
}

export default App;