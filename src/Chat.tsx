import { useContext, useMemo, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { MessageContex } from "./MessageContext";

function Chat() {
  const { currentUser, users } = useContext(UserContext);
  const { messages, sendMessage } = useContext(MessageContex);
  const [selectedFriend, setSelectedFriend] = useState<number>(
    currentUser.friends[0]
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (currentUser.friends.length > 0) {
      setSelectedFriend(currentUser.friends[0]);
    }
  }, [currentUser]);

  const handleSendMessage = () => {
    sendMessage(currentUser.userId, selectedFriend, message);
    setMessage("");
  };

  const chatMessage = messages?.filter((m) => {
    return (
      (m.from === currentUser.userId && m.to === selectedFriend) ||
      (m.to === currentUser.userId && m.from === selectedFriend)
    );
  });

  return (
    <div>
      {selectedFriend && (
        <h2>
          Chat with: {users.find((u) => u.userId === selectedFriend).userName}
        </h2>
      )}
      <select
        value={selectedFriend}
        onChange={(e) => {
          setSelectedFriend(parseInt(e.target.value));
        }}
      >
        {currentUser.friends.map((friendId) => {
          return (
            <option key={friendId} value={friendId}>
              {users.find((u) => u.userId === friendId).userName}
            </option>
          );
        })}
      </select>

      <div>
        {chatMessage.map((m) => {
          return (
            <div key={m.mId}>
              <span key={m.mId}>
                {users.find((u) => u.userId === m.from).userName}
                {": "} {m.message}
              </span>
            </div>
          );
        })}
      </div>

      <div>
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            handleSendMessage();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
