import "./dashboardPage.css";

const DashboardPage = () => {
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
        <form>
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <img src="arrow.png" alt="send question"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
