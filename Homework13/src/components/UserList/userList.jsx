import UserItem from "../UserItem/userItem";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

function UserList({ users, filter }) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <ul>
      {filteredUsers.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
}



export default connect(mapStateToProps)(UserList);
