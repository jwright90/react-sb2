import { Clock } from './components/Clock'
import { DumbClock } from './components/DumbClock'
import TitleCount from './components/TitleCount';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <DumbClock />
      </header>
    </div>
  );
}

export default App;
