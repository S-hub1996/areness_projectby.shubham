
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const App = () => {
const { user } = useSelector((state) => state.auth);

return (
  <Router>
    
        <Routes>
          <Route
            path="/"
            element={<SignIn/>}
          />
          <Route
            path="/signup"
            element={<SignUp/>}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard/>: <Navigate to="/" />}
          />
        </Routes>
    
  </Router>
);
};

export default App;


