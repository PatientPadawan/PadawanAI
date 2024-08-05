import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./chatList.css";
import { useAuth } from "@clerk/clerk-react";

const ChatList = () => {
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: async () => {
      const token = await getToken();
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/getUserChats`,
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div className="chat-list">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Patient AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo" />
        <div className="upgrade-text">
          <span>Upgrade to Patient AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
