import { useState } from 'react';
import SidebarMenu from '../../../components/SidebarMenu';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../../services/api';
import Cookies from 'js-cookie';
const token = Cookies.get('token');

const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({});

  const handleCreateUser = async (e) => {
    e.preventDefault();

    API.defaults.headers.common['Authorization'] = token;

    try {
      const result = await API.post('/admin/users', {
        name: name,
        email: email,
        password: password,
      });
      return navigate('/admin/users');
    } catch (error) {
      setValidation(error.response.data);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header fw-bold">ADD USER</div>
            <div className="card-body">
              {validation.errors && (
                <div className="alert alert-danger mt-2 pb-0">
                  {validation.errors.map((error, index) => (
                    <p key={index}>
                      {error.path} : {error.msg}
                    </p>
                  ))}
                </div>
              )}

              <form onSubmit={handleCreateUser}>
                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="btn btn-sm btn-primary">
                  SAVE
                </button>
                <Link
                  to={'/admin/users'}
                  className="btn btn-secondary btn-sm mx-2"
                >
                  Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
