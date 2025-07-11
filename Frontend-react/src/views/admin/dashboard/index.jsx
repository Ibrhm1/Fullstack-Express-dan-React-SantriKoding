import { useEffect, useState } from 'react';
import SidebarMenu from '../../../components/SidebarMenu';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const result = Cookies.get('user');
    setUser(JSON.parse(result));
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header fw-bold">DASHBOARD</div>
            <div className="card-body">
              Selamat Datang, <strong>{user.name}👋</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
