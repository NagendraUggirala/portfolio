import { useState } from "react";

const HOME_CARDS = [
  {
    id: "work",
    icon: "work",
    title: "Current Role",
    text: "Associate Software Engineer at Levitica Technologies Pvt Ltd, Hyderabad.",
    image: "https://www.leviticatechnologies.com/assets/Levitica%20logo.png",
    href: "#experience",
  },
  {
    id: "hms",
    icon: "mobile",
    title: "HMS Mobile App",
    text: "Cross-platform hospital management app with role-based workflows and AI-assisted modules.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    href: "#projects",
  },
  {
    id: "ai-recruiter",
    icon: "ai",
    title: "AI Recruiter Project",
    text: "SaaS hiring platform with role-based access, reusable React components, and smart screening flow.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    href: "#projects",
  },
];

function renderCardIcon(type) {
  if (type === "work") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M9 7V5a3 3 0 0 1 6 0v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }
  if (type === "mobile") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
        <circle cx="12" cy="18.2" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      <path d="M19 13a7 7 0 1 1-14 0" />
      <path d="M4.5 16.5c1.7 1.8 4.2 3 7.5 3s5.8-1.2 7.5-3" />
    </svg>
  );
}

export default function HomePopupCards() {
  const [isOpen, setIsOpen] = useState(true);

  function closePopup() {
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className="hp-overlay" role="dialog" aria-label="Home highlights popup">
      <div className="hp-modal">
        <button className="hp-close" type="button" onClick={closePopup} aria-label="Close popup">
          x
        </button>

        <div className="hp-grid">
          {HOME_CARDS.map((card) => (
            <div key={card.id} className="hp-card">
              <img className="hp-card-img" src={card.image} alt={card.title} loading="lazy" />
              <div className="hp-icon">{renderCardIcon(card.icon)}</div>
              <div className="hp-card-title">{card.title}</div>
              <div className="hp-card-text">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
