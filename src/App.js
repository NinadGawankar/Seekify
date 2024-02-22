import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Result from './Result';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Result" element={<Result />} />
    </Routes>
  );
}

export default App;
