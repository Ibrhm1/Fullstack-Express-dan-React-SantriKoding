import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Cookies from 'js-cookie';
import { useContext } from 'react';

const SidebarMenu = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthProvider);

  const handleLogout = async () => {
    Cookies.remove('token');
    Cookies.remove('user');
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <div className="card border-0 rounded shadow-sm">
      <div className="card-header fw-bold">MAIN MENU</div>
      <div className="card-body">
        <div className="list-group">
          <Link
            to="/admin/dashboard"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </Link>
          <button
            onClick={handleLogout}
            className="list-group-item list-group-item-action list-group-item-danger fw-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
