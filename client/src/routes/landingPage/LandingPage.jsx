import { Link } from "react-router-dom";
import "./landingPage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const LandingPage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="landing-page">
      <img
        src="/orbital.png"
        alt="background galaxy orbit"
        className="orbital"
      />
      <div className="left">
        <h1>Padawan AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          An AI-driven chatbot providing natural language understanding and
          interactive responses, showcasing advanced language model capabilities
          for seamless user interactions.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="bg-container">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt="sample user image"
            />
            <TypeAnimation
              sequence={[
                "James: What is the capital of Kentucky?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Frankfort is the capital of Kentucky",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Hannah: What is the boiling point of water in Kelvins?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: The boiling point of water on a kelvin scale is 373k",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="logo" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
