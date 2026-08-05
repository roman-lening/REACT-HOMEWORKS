import "./App.css";
import UserList from "./components/UserList/userList";
import Filter from "./components/Filter/filter";

function App() {
  return (
    <div className="block">
      <UserList />
      <Filter />
    </div>
  );
}

export default App;
