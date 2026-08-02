function UserList({ userList }) {
  if (userList.length === 0) {
    return <p>Нет совпадений!</p>;
  }
  return (
    <ul>
      {userList.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
