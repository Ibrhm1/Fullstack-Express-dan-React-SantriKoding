import { useContext } from 'react';
import { AuthProvider } from '../context/AuthContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Register from '../views/Auth/Register';
import Login from '../views/Auth/Login';
import Dashboard from '../views/admin/dashboard';
import Users from '../views/admin/users';
import CreateUser from '../views/admin/users/Create';
import EditUser from '../views/admin/users/Edit';

const Routing = () => {
  const { isAuth } = useContext(AuthProvider);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={isAuth ? <Navigate to="/admin/dashboard" /> : <Register />}
      />
      <Route
        path="/login"
        element={isAuth ? <Navigate to="/admin/dashboard" /> : <Login />}
      />
      <Route
        path="/admin/dashboard"
        element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/users"
        element={isAuth ? <Users /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/users/create"
        element={isAuth ? <CreateUser /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/users/edit/:id"
        element={isAuth ? <EditUser /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default Routing;
