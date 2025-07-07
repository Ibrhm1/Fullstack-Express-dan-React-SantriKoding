import { use, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import API from '../../../services/api';
import SidebarMenu from '../../../components/SidebarMenu';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Users = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const getToken = Cookies.get('token');
  const navigate = useNavigate();
  const getUsers = async () => {
    try {
      if (getToken) {
        const APIToken = (API.defaults.headers.common['Authorization'] =
          getToken);
        const { data } = await API.get('/admin/users', APIToken);
        setUsers(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      if (getToken) {
        API.defaults.headers.common['Authorization'] = getToken;
        const result = await API.delete(`/admin/users/${id}`);
        getUsers();
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span className="fw-bold">USERS</span>
              <Link
                to="/admin/users/create"
                className="btn btn-sm btn-success rounded shadow-sm border-0"
              >
                ADD USER
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email Address</th>
                    <th scope="col" style={{ width: '17%' }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className="text-center">
                          <Link
                            to={`/admin/users/edit/${user.id}`}
                            className="btn btn-sm btn-warning rounded-sm border-0 me-2 fw-bold"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="btn btn-sm btn-danger rounded-sm border-0 fw-bold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        <div className="alert alert-danger mb-0">
                          Data Belum Tersedia!
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
