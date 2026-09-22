import { useSignup } from "./hooks/useSignup.js";

const LoginSignup = ({ setLogin }) => {
  const { isSingup, error, password, HandelInputs, handleSignup, setSingup } =
    useSignup(setLogin);

  const handleForgotPassword = () => {
    alert("Forgot Password clicked");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome</h2>
          <p>Login to your account</p>
        </div>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your name"
              value={password.username}
              onChange={HandelInputs}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={password.email}
              onChange={HandelInputs}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password.password}
              onChange={HandelInputs}
            />
          </div>

          {/* Forgot Password */}
          <div className="auth-options">
            <button
              type="button"
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn btn-primary auth-submit">
            {isSingup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="auth-bottom">
          Don't have an account?
          <button type="button" onClick={()=>setSingup(!isSingup)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
