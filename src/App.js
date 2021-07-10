import './App.css';
import ComponentA from './componentA.js';
import ComponentB from './componentB.js';
import CounterContextProvider from './contexts/CounterContext.js';

function App() {
  return (

    <CounterContextProvider>
      <div className="App">
        <h1>Testing context API </h1>
        <ComponentA/>
        <ComponentB/>
      </div>
    </CounterContextProvider>
  );
}

export default App;
