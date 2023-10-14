import logo from './logo.svg';
import './App.css';
import Colorpicker from './components/Colorpicker';

function App() {
  const colors = ['red', 'green', 'blue', 'yellow','pink','aqua','goldenrod','purple','lightpink','seagreen','orange','mediumturquoise','sienna','sandybrown','indigo','goldenrod'];
  return (
    <div className="App">
      <header className="App-header">
        <Colorpicker colors={colors}/>
      </header>
    </div>
  );
}

export default App;
