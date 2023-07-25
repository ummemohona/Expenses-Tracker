import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Income from './component/Income';
import Expenses from './component/Expenses';
import { AppProvider } from './component/AppContext';

function App() {
  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </Router>
    </AppProvider>
  );
}

export default App;