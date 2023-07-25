
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'; 
import Income from './component/Income'; 
import Expenses from './component/Expenses'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/Expenses" element={<Expenses />} />
      </Routes>
    </Router>
  );
}

export default App;
