import { useContext } from "react";
import { UserContext } from "./UserContext";

const Login = () => {
  const { users, currentUser, switchUser } = useContext(UserContext);

  return (
    <>
      <h2>Logged in as: {currentUser.userName}</h2>
      <select
        value={currentUser.userId}
        onChange={(e) => switchUser(parseInt(e?.target.value))}
      >
        {users.map((user) => {
          return (
            <option key={user.userId} value={user.userId}>
              {user.userName}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Login;
