import { useEffect, useRef } from "react";
import "./newPrompt.css";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      {/* ADD NEW CHAT */}
      TEST
      <div className="end-chat" ref={endRef}></div>
      <form className="new-form">
        <label htmlFor="file">
          <img src="/attachment.png" alt="attachment button" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask me anything..." />
        <button>
          <img src="/arrow.png" alt="send message arrow" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
