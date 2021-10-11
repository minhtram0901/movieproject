import React, { useState } from "react";
import { actLogin } from "./modules/actions";
import { connect, useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/Loader";
import Button from '@mui/material/Button';

function AuthPage(props) {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loginReducer.loading);
  const error = useSelector((state) => state.loginReducer.error);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLogin(state, props.history));
  };

  if (loading) return <Loader />;

  const renderError = () => {
    return (
      error && (
        <div className="alert alert-danger">
          {error?.response?.data?.content}
        </div>
      )
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>AuthPage</h3>
          {renderError()}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
            <Button variant="contained" size="small">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
