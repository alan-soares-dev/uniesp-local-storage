import './App.css';

import { ThemeProvider } from './ThemeProvider';
import AppContent from './AppContent';

function App() {
  

  return (
    <div className="App">

      <header className="App-header">

        <ThemeProvider>

          <AppContent />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
