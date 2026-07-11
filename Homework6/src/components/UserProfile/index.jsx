import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
function UserProfile() {
  const [user, setUser] = useState(null);
  async function fetchUser() {
    try {
      const response = await axios.get("https://randomuser.me/api/0.8");
      console.log(response.data);
      setUser(response.data.results[0].user);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  if (!user) {
    return <span className={styles.loader}></span>;
  }
  return (
    <div className={styles.block}>
      <img src={user.picture.large} alt="userFoto" className={styles.img} />
      <div className={styles.nameBlock}>
        <h2>{user.name.first}</h2>
        <h2>{user.name.last}</h2>
      </div>
      <p className={styles.p}>Email: {user.email}</p>
      <p className={styles.p}>Phone: {user.phone}</p>
      <button onClick={fetchUser} className={styles.btn}>
        Load New User
      </button>
    </div>
  );
}
export default UserProfile;
