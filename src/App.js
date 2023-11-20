import { useState } from 'react';
import './App.css';
import MainContant from './Components/MainContant/MainContant';
import MainPanel from './layouts/MainPanel/MainPanel';


function App() {

  const [isExpanded, setIsExpanded] = useState(true);

  return (

    <div className="App">

      <MainPanel isExpanded={isExpanded} setIsExpanded={setIsExpanded}></MainPanel>

      <MainContant isExpanded={isExpanded}></MainContant>

    </div>
  );
}

export default App;
