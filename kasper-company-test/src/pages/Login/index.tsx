import "./login.css";
import Input from "../../components/Input";

import { GoogleIcon } from "../../assets/icons";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://images.unsplash.com/photo-1591643529995-aef2e1e6f281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdsYXNzZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60"
        alt="bg-login"
      />
      <form className="login-form-container">
        <div className="login-form-wrapper">
          <h1 className="login-title">
            Welcome to Panorama,
            <p>Sign In to Continue</p>
          </h1>
          <div className="login-sub-title">
            <p>
              Don't have an account?
              <a className="create-account">Create a account</a>
            </p>
            It takes less than a minute.
          </div>

          <Input name="email" label="Email" />
          <Input name="password" label="Password" type="password" />
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button className="button sign-in-btn">Sign In</button>
          <button className="button with-icon">
            <GoogleIcon className="google-icon" /> Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
