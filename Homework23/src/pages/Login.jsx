import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }

    return () => {
      dispatch(resetState());
    };
  }, [isSuccess, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </form>
      {isError && <p className={styles.message}>{message}</p>}
      {isSuccess && <p className={styles.message}>Login successful</p>}
    </div>
  );
};

export default Login;
