import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import API from '../../services/api';
import Cookies from 'js-cookie';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthProvider);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validation, setValidation] = useState([]);
  const [loginFailed, setLoginFailed] = useState([]);

  const handelLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post('/login', { email, password });
      const token = data.data.token;
      const user = data.data.user;
      Cookies.set('token', token);
      Cookies.set('user', JSON.stringify(user));
      setIsAuth(true);
      navigate('/admin/dashboard');
    } catch (error) {
      setValidation(error.response.data);
      setLoginFailed(error.response.data);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-4">
        <div className="card border-0 rounded shadow-sm">
          <div className="card-body">
            <h4>LOGIN</h4>
            <hr />
            {validation.errors && (
              <div className="alert alert-danger mt-2 pb-0">
                {validation.errors.map((error, index) => (
                  <p key={index}>
                    {error.path} : {error.msg}
                  </p>
                ))}
              </div>
            )}
            {loginFailed.message && (
              <div className="alert alert-danger mt-2">
                {loginFailed.message}
              </div>
            )}
            <form onSubmit={handelLogin}>
              <div className="form-group mb-3">
                <label className="mb-1 fw-bold">Email address</label>
                <input
                  type="email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
