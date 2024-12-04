import { createContext, useState } from "react";

interface User {
  userId: number;
  userName: string;
  friends: number[];
}

interface UserContextType {
  currentUser: User | null;
  users: User[];
  switchUser: (userId: number) => void;
}

const defaultValue: UserContextType = {
  currentUser: null,
  users: [],
  switchUser: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);
const initialUsers = [
  { userId: 1, userName: "User1", friends: [2, 3] },
  { userId: 2, userName: "User2", friends: [1, 3] },
  { userId: 3, userName: "User3", friends: [1, 2] },
];

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initialUsers[0]);

  const switchUser = (userId: any) => {
    const newUser = initialUsers.find((user) => {
      return userId === user.userId;
    });
    setCurrentUser(newUser);
  };

  return (
    <UserContext.Provider
      value={{ currentUser, users: initialUsers, switchUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
