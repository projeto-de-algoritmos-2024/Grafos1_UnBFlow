import Header from './components/Header';
import SearchArea from './components/SearchArea';
import GraphCanvas from './components/GraphCanvas';
import { ReactFlowProvider } from '@xyflow/react';
import './App.css';

function App() {
  document.title = 'UnBFlow'
  return (
    <div className="App">
      <Header />

      <div className="content">
        
        <div className='searchContainer'>
          <SearchArea />
        </div>
        <ReactFlowProvider>
          <div className='graphContainer'>
            <GraphCanvas />
          </div>
        </ReactFlowProvider>
        
      </div>

    </div>
  );
}

export default App;
