import { useEffect, useRef, useState } from "react";

const QUICK_CARDS = [
  {
    id: "work",
    icon: "💼",
    title: "Current Work",
    prompt: "Where are you currently working?",
    reply:
      "I am currently working as an Associate Software Engineer at Levitica Technologies Pvt Ltd in Hyderabad.",
  },
  {
    id: "hms",
    icon: "🏥",
    title: "HMS Mobile App",
    prompt: "Tell me about your HMS mobile app project.",
    reply:
      "The HMS project is a cross-platform hospital management solution with role-based dashboards, appointment flow, and AI-supported patient workflows.",
  },
  {
    id: "recruiter",
    icon: "🤖",
    title: "AI Recruiter",
    prompt: "Tell me about your AI Recruiter project.",
    reply:
      "The AI Recruiter project is a SaaS hiring platform with secure role-based access, candidate screening workflows, and reusable React components.",
  },
];

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
    return "Hello. I can help you explore this portfolio. Ask about skills, projects, experience, education, or contact details.";
  }
  if (text.includes("name")) {
    return "This portfolio belongs to Nagendra Uggirala, a Frontend Developer focused on React and scalable UI systems.";
  }
  if (text.includes("project")) {
    return "You can check my Featured Projects section for frontend, full-stack, and AI-integrated work.";
  }
  if (text.includes("hms") || text.includes("hospital")) {
    return "The HMS project is a cross-platform hospital management app with role-based modules, scheduling, and AI-assisted workflows.";
  }
  if (text.includes("recruiter") || text.includes("recruitment")) {
    return "The AI Recruiter platform focuses on streamlined hiring workflows, role-based access control, and smart candidate evaluation support.";
  }
  if (text.includes("skill") || text.includes("tech")) {
    return "My core stack includes React.js, JavaScript, Tailwind CSS, Redux, FastAPI, and REST API integration.";
  }
  if (text.includes("react")) {
    return "I work extensively with React.js for reusable component architecture, performance-focused rendering, and scalable frontend development.";
  }
  if (text.includes("backend") || text.includes("fastapi") || text.includes("api")) {
    return "I am expanding into backend engineering with FastAPI and API design, including authentication and integration with frontend workflows.";
  }
  if (text.includes("ai")) {
    return "I am actively integrating AI-driven features into web products, including workflow automation and smart data interactions.";
  }
  if (text.includes("education") || text.includes("college") || text.includes("degree")) {
    return "I completed a B.Tech in Electrical and Electronics Engineering and also hold a Diploma, SSC, and a Full Stack Development program certification.";
  }
  if (text.includes("certificate") || text.includes("certification")) {
    return "Certifications include the Full Stack Development Program through NxtWave, along with hands-on project implementation.";
  }
  if (text.includes("experience") || text.includes("work")) {
    return "I am currently working as an Associate Software Engineer and have internship experience in frontend development.";
  }
  if (text.includes("intern") || text.includes("internship")) {
    return "I completed internships at VeriTech Software IT Services and Aurobindo Pharma, gaining real-world delivery, collaboration, and process improvement experience.";
  }
  if (text.includes("location") || text.includes("where")) {
    return "I am based in Hyderabad, Telangana, India.";
  }
  if (text.includes("resume") || text.includes("cv")) {
    return "You can request my resume through the Contact section, and I will share the latest version.";
  }
  if (text.includes("contact") || text.includes("hire")) {
    return "You can reach me from the Contact section or email me at nagendrauggirala@gmail.com.";
  }
  if (text.includes("thanks") || text.includes("thank you")) {
    return "You are welcome. Happy to help. Let me know if you want project-wise details.";
  }

  return "I can answer questions about skills, projects, experience, education, certifications, and contact details. Try asking: 'What is your React experience?'";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi, I am Nagendra's assistant. Ask me about projects, skills, experience, education, or how to get in touch.",
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function sendMessage(e) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    window.setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotReply(text),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 450);
  }

  function handleQuickCardClick(card) {
    const userMessage = {
      id: Date.now() + Math.random(),
      sender: "user",
      text: card.prompt,
    };
    const botMessage = {
      id: Date.now() + Math.random() + 1,
      sender: "bot",
      text: card.reply,
    };
    setMessages((prev) => [...prev, userMessage, botMessage]);
  }

  return (
    <div className="cb-wrap">
      {isOpen ? (
        <div className="cb-panel" role="dialog" aria-label="Portfolio assistant">
          <div className="cb-head">
            <div>
              <div className="cb-title">Portfolio Assistant</div>
              <div className="cb-sub">Online now</div>
            </div>
            <button className="cb-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
              x
            </button>
          </div>

          <div className="cb-body">
            <div className="cb-cards">
              {QUICK_CARDS.map((card) => (
                <button key={card.id} type="button" className="cb-card" onClick={() => handleQuickCardClick(card)}>
                  <span className="cb-card-icon">{card.icon}</span>
                  <span className="cb-card-text">{card.title}</span>
                </button>
              ))}
            </div>
            {messages.map((msg) => (
              <div key={msg.id} className={`cb-msg ${msg.sender === "user" ? "cb-user" : "cb-bot"}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="cb-form" onSubmit={sendMessage}>
            <input
              className="cb-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button className="cb-send" type="submit">
              Send
            </button>
          </form>
        </div>
      ) : null}

      <button className="cb-toggle" type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label="Open chat">
        Chat
      </button>
    </div>
  );
}
