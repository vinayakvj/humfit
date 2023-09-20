import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  console.log(process.env.REACT_APP_NAME);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
