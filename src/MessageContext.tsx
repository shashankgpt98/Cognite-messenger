import { createContext, useState } from "react";

interface MessageContextType {
  messages: { from: number; to: number; message: string; mId: number }[];
  sendMessage: (from: number, to: number, message: string) => void;
}

export const MessageContex = createContext<MessageContextType>(undefined);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (from: any, to: any, message) => {
    setMessages((prev) => [...prev, { from, to, message, mId: Date.now() }]);
  };

  return (
    <MessageContex.Provider value={{ messages, sendMessage }}>
      {children}
    </MessageContex.Provider>
  );
};
