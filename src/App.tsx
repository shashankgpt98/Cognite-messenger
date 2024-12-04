import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserProvider } from "./UserContext";
import { MessageProvider } from "./MessageContext";
import Login from "./Login";
import Chat from "./Chat";
function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <MessageProvider>
        <div>
          <Login />
          <Chat />
        </div>
      </MessageProvider>
    </UserProvider>
  );
}

export default App;
