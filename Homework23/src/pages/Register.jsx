import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, resetState } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
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
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(register({ email, password }));
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
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit" disabled={isLoading}>
          Register
        </button>
      </form>
      {isError && <p className={styles.message}>{message}</p>}
      {isSuccess && <p className={styles.message}>Registration successful</p>}
    </div>
  );
};

export default Register;
