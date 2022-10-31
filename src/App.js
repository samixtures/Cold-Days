import './App.css'
import {bat_vs_freeze} from "./bat_vs_freeze"

const Fight = (prop) => {
  return (
    <img src='/bat_vs_freeze/bat_freeze1.1.png' alt = "bat fighting" />
  )
}

function App() {
  return (
    <div className="App">
      <h1 className = "title">Cold Days</h1>
      <img src="bat_vs_freeze/bat_freeze1.1.png" alt = "bat fight"/>
      <Fight/>
    </div>
  );
}

export default App;
