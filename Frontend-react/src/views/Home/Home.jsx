//import Link from react router dom
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">FULLTSACK JAVASCRIPT DEVELOPER</h1>
        <p className="col-md-12 fs-4">
          Belajar Full Stack JavaScript Developer dengan Express dan React di
          SantriKoding.com
        </p>
        <hr />
        <Link to="/register" className="btn btn-primary btn-lg me-3">
          REGISTER
        </Link>
        <Link to="/login" className="btn btn-secondary btn-lg me-3">
          LOGIN
        </Link>
        <Link to="/admin/dashboard" className="btn btn-secondary btn-lg ">
          DASHBOARD
        </Link>
      </div>
    </div>
  );
};

export default Home;
