import React, { useState } from "react";
import "./ChatWidget.css";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const presetQuestions = [
  {
    id: 1,
    question: "What kind of QA roles are you looking for?",
    answer:
      "I’m mainly targeting QA Engineer and Test Automation roles, especially where I can work with Tosca, Salesforce testing, and CI/CD pipelines.",
  },
  {
    id: 2,
    question: "What tools and technologies do you work with?",
    answer:
      "I work with Tosca, Salesforce, Jira. ",
  },
  {
    id: 3,
    question: "How can I contact you for opportunities?",
    answer:
      "You can reach me via the Contact page on this portfolio, or email me directly at your-email@example.com.",
  },
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! 👋 I’m Sumayya’s assistant. You can pick a question below or type your own message.",
    },
  ]);
  const [input, setInput] = useState("");

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handlePresetClick = (q: string, a: string) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: q },
      { sender: "bot", text: a },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      {
        sender: "bot",
        text:
          "Thanks for your message! I’ll review it and get back to you. You can also use the Contact page for formal queries.",
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating chat button */}
      <button className="chat-fab" onClick={toggleOpen}>
        💬
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div>
              <div className="chat-title">Chat with Sumayya</div>
            </div>
            <button className="chat-close" onClick={toggleOpen}>
              ✖
            </button>
          </div>

          <div className="chat-body">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    msg.sender === "user" ? "chat-user" : "chat-bot"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-presets">
              <span className="chat-presets-label">Quick questions:</span>
              <div className="chat-presets-buttons">
                {presetQuestions.map((p) => (
                  <button
                    key={p.id}
                    className="chat-preset-btn"
                    onClick={() => handlePresetClick(p.question, p.answer)}
                  >
                    {p.question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
