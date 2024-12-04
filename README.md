# Cognite-messenger

This project is a basic chat application built using React. It allows users to send and view messages with their friends.


## Please use node version `v20.12.2`

## Features
- User Selection: Users can log in as a specific user (no authentication implemented).
- Friend Selection: Logged-in users can select a friend to chat with.
- Send Messages: Users can send messages to their friends.
- View Chat History: Chat history between the logged-in user and the selected friend is displayed dynamically.
- Dynamic Updates: Messages update in real-time within the app (no backend integration).

## Technologies Used
- React: For building the user interface.
- React Context API: For managing global state (user and messages).
- TypeScript: For type safety and better developer experience.
- Node version:  `v20.12.2`



```js
git clone <repository-url>
cd Cognite-messenger
npm install or sudo npm install(in case of access issue)
npm run dev
```

## How It Works
### 1. User Context:
-  The UserContext provides the currently logged-in user and the list of users.
- Each user has a unique userId, userName, and a list of friends.

### 2. Message Context:
- The MessageContext manages the messages sent between users.
- A sendMessage function allows users to send messages to their friends.

### 3. Chat Component:
- Displays a dropdown to select a friend to chat with.
- Shows the chat history between the current user and the selected friend.
- Allows the user to type and send new messages.
