import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./dashboardPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const DashboardPage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (text) => {
      const token = await getToken();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/createChat`, {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${data.id}`);
    },
    onError: (error) => {
      console.error("Mutation error");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text);
  };

  return (
    <div className="dashboard-page">
      <div className="text">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>Padawan AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="create a new chat" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="create a new chat" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="create a new chat" />
            <span>Help Me With My Code</span>
          </div>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="arrow.png" alt="send question" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
