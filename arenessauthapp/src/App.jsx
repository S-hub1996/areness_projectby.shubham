
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const App = () => {
const { user } = useSelector((state) => state.auth);

return (
  <Router>
    <Box display="flex">
      {/* Sidebar for desktop */}
      {user && <Sidebar />}

      <Box flex="1" p="5">
        {/* Mobile Navbar */}
        {user && <Navbar/>}

        {/* Main Content */}
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/dashboard" /> : <SignIn/>}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/dashboard" /> : <SignUp/>}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard/>: <Navigate to="/" />}
          />
        </Routes>
      </Box>
    </Box>
  </Router>
);
};

export default App;


