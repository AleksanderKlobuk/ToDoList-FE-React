import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <form>
        <div className={styles.form_container}>
          <label>User</label>
          <input placeholder="Email Adress"></input>
          <label>Password</label>
          <input placeholder="Password"></input>
          <button>Login / Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
