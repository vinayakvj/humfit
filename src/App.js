import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';

function App() {
  console.log(process.env.REACT_APP_NAME);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="student" element={<Student />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
