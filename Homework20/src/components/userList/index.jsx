import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.user.data);

  return (
    <ol
      style={{
        margin: "0 auto",
        width: "fit-content",
        padding: "40px",
        border: "2px solid #0984e3",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {users.map((user) => {
        return (
          <li key={user.id}>
            <strong>Имя пользователя:</strong> {user.name}. <br />
            <strong>Email пользователя:</strong> {user.email}
          </li>
        );
      })}
    </ol>
  );
}

export default UserList;
