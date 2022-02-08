import logo from './logo.svg';
import './App.css';
import Tables from './Components/MyTables'
import WelcomePage from './Components/WelcomePage';
import Popup from './Components/Popup';

function App() {
  return (
    <div className="App">
     <WelcomePage/>
     <Tables/>
     <Popup/>
    </div>
  );
}

export default App;
