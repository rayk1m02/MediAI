import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Medi AI</h1>
      </header>
      
      <main>
        <div style={{ padding: '20px' }}>
          <h2>Wireframe</h2>
          <img src="/MediAI_Wireframe.png" alt="MediAI Wireframe" style={{ maxWidth: '70%', height: 'auto' }} />
          <h2>Flow Diagram</h2>
          <img src="/MediAI_FlowDiagram.png" alt="MediAI Flow Diagram" style={{ maxWidth: '70%', height: 'auto' }} />
        </div>
      </main>
    </div>
  );
}

export default App;
