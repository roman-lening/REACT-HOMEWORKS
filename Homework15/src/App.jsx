import { useState, useCallback, useMemo } from "react";
import "./App.css";
import UserList from "./components/UserList";

const userList = [
  {
    id: 1,
    name: "Roman",
  },
  {
    id: 2,
    name: "Oleg",
  },
  {
    id: 3,
    name: "Maxim",
  },
];

function App() {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((text) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase()),
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Введите имя"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <UserList userList={filteredUsers} />
    </div>
  );
}

export default App;
