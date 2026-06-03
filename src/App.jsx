import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import ChatBot from "./ChatBot";
import HomePopupCards from "./HomePopupCards";
import nagendraImg from "./nagendra.png";

const markup = `
<div id="cd"></div><div id="cr"></div>
<div id="prog"></div>
<div id="toast" role="status" aria-live="polite" aria-atomic="true"><span class="tico"></span><span id="tmsg"></span></div>

<!-- NAV -->
<nav>
  <a class="nav-logo" href="#hero"><span class="ndot"></span>NU<span style="color:var(--accent)"></span></a>
  <div class="nl" id="nl">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#why-hire">Why Hire Me</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#education">Education</a>
    <a href="#contact" class="ncta">Contact</a>
  </div>
  <div style="display:flex;align-items:center;gap:8px">
    <button class="hbtn" id="hb" aria-label="Toggle navigation menu" aria-controls="mn" aria-expanded="false" onclick="thm()">
      <svg id="hb-open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      <svg id="hb-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>
</nav>
<nav class="mnav" id="mn">
  <a href="#about" onclick="cmn()">About</a>
  <a href="#skills" onclick="cmn()">Skills</a>
  <a href="#why-hire" onclick="cmn()">Why Hire Me</a>
  <a href="#experience" onclick="cmn()">Experience</a>
  <a href="#projects" onclick="cmn()">Projects</a>
  <a href="#education" onclick="cmn()">Education</a>
  <a href="#contact" onclick="cmn()">Contact</a>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hgrid"></div>
  <div class="hglow1"></div>
  <div class="hglow2"></div>
  <canvas id="pcanvas"></canvas>

  <div class="hero-content">
    <div class="hi">
      <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 20px; flex-wrap: wrap;">
        <div class="hbadge" style="margin-bottom: 0;">Frontend Engineer</div>
        <div class="hbadge" style="margin-bottom: 0; background: rgba(16, 185, 129, 0.1); color: #10b981; border-color: rgba(16, 185, 129, 0.2);">✨ 2+ Years Experience</div>
      </div>
      <h1 class="htitle">
        <span class="l1">Nagendra</span>
        <span class="l2">Uggirala</span>
      </h1>
      <div class="hrole">Frontend Developer | React.js | React Native | AI Integration Engineer</div>
      <p class="hdesc">
        I am a passionate Frontend Developer who loves transforming complex problems into elegant, user-friendly digital solutions. I specialize in building modern web and mobile applications using React, with a strong focus on seamless AI integrations and scalable architectures.
      </p>
      <div class="hacts">
        <a href="#contact" class="bprim" style="text-decoration: none;">Contact Me</a>
      </div>
    </div>
    <div class="hphoto-wrap">
      <img class="hphoto" src="${nagendraImg}" alt="Nagendra portrait at beach"/>
    </div>
  </div>
  <div class="hscroll"><div class="sline"></div><span>scroll</span></div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="about-wrap">
    <div class="slabel rv">Overview</div>
    <h2 class="stitle rv" style="margin-bottom: 24px;"><span class="tp">Professional</span><span class="tg">Summary</span></h2>
    <p class="about-text">
      Results-driven Frontend Developer with 2+ years of experience building scalable, responsive React.js and React Native (Expo) applications. Proficient in JavaScript (ES6+), TypeScript, Redux, Context API, REST APIs, and JWT authentication. Experienced in integrating OpenAI APIs and AI-driven features into production SaaS platforms.
    </p>
    <div class="about-grid">
      <article class="about-card">
        <h3>What I Bring</h3>
        <ul>
          <li>Strong component architecture using React.js for modular, maintainable, and reusable UI systems</li>
          <li>Practical experience integrating REST APIs for data-driven dashboards and workflow automation</li>
          <li>Performance-focused frontend development with clean code standards and scalable design patterns</li>
        </ul>
      </article>
      <article class="about-card">
        <h3>Growth Mindset</h3>
        <ul>
          <li>Advancing into React Native to deliver consistent product experiences across web and mobile</li>
          <li>Building backend services with FastAPI to strengthen end-to-end system ownership</li>
          <li>Integrating AI-enabled backend capabilities to develop smarter, production-ready applications</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section id="skills">
  <div class="sw">
    <div class="slabel rv">Capabilities</div>
    <h2 class="stitle rv"><span class="tp">Technical</span><span class="tg">Skills</span></h2>
    <div class="skill-cards rv">
      <div class="skill-card new-skill-card">
        <div class="skill-card-header">
          <span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Frontend"/></span>
          <h3 class="skill-cat">Frontend</h3>
        </div>
        <div class="skill-tags">
          <span>JavaScript (ES6+)</span><span>React.js</span><span>React Native (Expo)</span><span>HTML5</span><span>CSS3</span><span>TailwindCSS</span><span>Bootstrap</span><span>Material UI</span><span>Chakra UI</span><span>Vite</span><span>Responsive Design</span>
        </div>
      </div>
      <div class="skill-card new-skill-card">
        <div class="skill-card-header">
          <span class="skill-ico"><img src="https://img.icons8.com/color/48/artificial-intelligence.png" alt="AI"/></span>
          <h3 class="skill-cat">AI & Integration</h3>
        </div>
        <div class="skill-tags">
          <span>OpenAI API</span><span>Prompt Engineering</span><span>AI-assisted Development</span><span>Cursor</span><span>Midjourney</span><span>AI Workflow Automation</span><span>Antigravity</span><span>Cloud</span>
        </div>
      </div>
      <div class="skill-card new-skill-card">
        <div class="skill-card-header">
          <span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="Database"/></span>
          <h3 class="skill-cat">Database & Cloud</h3>
        </div>
        <div class="skill-tags">
          <span>MongoDB</span><span>PostgreSQL</span><span>Vmware</span><span>AWS</span><span>Azure</span><span>Lambda</span><span>EC2</span><span>VPC</span>
        </div>
      </div>
      <div class="skill-card new-skill-card">
        <div class="skill-card-header">
          <span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="DevOps"/></span>
          <h3 class="skill-cat">DevOps & Workflow</h3>
        </div>
        <div class="skill-tags">
          <span>Git</span><span>GitHub</span><span>CI/CD</span><span>Agile</span><span>Scrum</span><span>VS Code</span><span>Figma</span>
        </div>
      </div>
       <div class="skill-card new-skill-card">
        <div class="skill-card-header">
          <span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="State Management"/></span>
          <h3 class="skill-cat">State Management</h3>
        </div>
        <div class="skill-tags">
          <span>Redux</span><span>Redux Toolkit</span><span>Context API</span><span>React Hooks</span>
        </div>
      </div>
        <div class="skill-card new-skill-card">
        <div class="skill-card-header">
          <span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Backend"/></span>
          <h3 class="skill-cat">Backend & APIs</h3>
        </div>
        <div class="skill-tags">
          <span>FastAPI</span><span>Python</span><span>REST APIs</span><span>JWT Authentication</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHY HIRE ME -->
<section id="why-hire" class="relative overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
  <div class="sw relative">
    <div class="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 blur-3xl pointer-events-none"></div>
    <div class="slabel rv tracking-wider">Value Proposition</div>
    <h2 class="stitle rv"><span class="tp">Why </span><span class="tg">Hire Me</span></h2>
    <div class="about-grid">
      <article class="about-card rv p-8 rounded-2xl backdrop-blur-md bg-white/60 border border-white/40 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-blue-400/30 transition-all duration-300">
        <h3 class="text-xl font-semibold tracking-wide">What You Can Expect</h3>
        <ul class="space-y-4">
          <li class="flex items-start gap-3"><svg width="16" height="16" class="text-sky-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg><span>Strong React fundamentals with component-driven development practices</span></li>
          <li class="flex items-start gap-3"><svg width="16" height="16" class="text-sky-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg><span>Real project experience building dashboards, workflows, and API-connected interfaces</span></li>
          <li class="flex items-start gap-3"><svg width="16" height="16" class="text-sky-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>Clean, maintainable code with attention to readability and scalability</span></li>
          <li class="flex items-start gap-3"><svg width="16" height="16" class="text-sky-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg><span>Fast learner who adapts quickly to product needs and team workflows</span></li>
          <li class="flex items-start gap-3"><svg width="16" height="16" class="text-sky-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg><span>Ownership mindset from requirement understanding to reliable delivery</span></li>
        </ul>
      </article>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="sw">
    <div class="slabel rv">Professional Journey</div>
    <h2 class="stitle rv"><span class="tp">Work</span><span class="tg">Experience</span></h2>
    <div class="etl">
      <div class="ei rv">
        <div class="edot"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg></div>
        <div class="ec">
          <div class="eco">Levitica Technologies Pvt Ltd</div>
          <div class="ero">Associate Software Engineer</div>
          <div class="em"><span class="ebadge">📍 Hyderabad, Telangana</span><span class="ebadge">🗓 May 2024 – Present</span><span class="ebadge">Full-time</span></div>
          <ul class="eal">
            <li>Built 10+ reusable React.js components for an AI-powered HR SaaS platform across dashboards and candidate modules, improving development velocity by ~30%.</li>
            <li>Implemented JWT-based role authentication (Admin / HR / Candidate), securing multi-tier platform access for 500+ users.</li>
            <li>Managed global state with Redux and Context API, reducing prop-drilling by ~60% and improving application scalability.</li>
          </ul>
        </div>
      </div>

      <div class="ei rv">
        <div class="edot"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg></div>
        <div class="ec">
          <div class="eco">VeriTech Software IT Services</div>
          <div class="ero">Frontend Developer - Internship</div>
          <div class="em"><span class="ebadge">📍 Pune, Maharashtra</span><span class="ebadge">🗓 Jan 2023 – Mar 2023</span><span class="ebadge">Intern</span></div>
          <ul class="eal">
            <li>Developed responsive React.js UI components using HTML5, CSS3, and Bootstrap; ensured cross-browser compatibility.</li>
            <li>Integrated REST APIs for dynamic data rendering and collaborated with the backend team on API contract design.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="sw">
    <div class="slabel rv">Portfolio Highlights</div>
    <h2 class="stitle rv"><span class="tp">Selected</span><span class="tg">Projects</span></h2>
    <p class="psub rv">A curated selection of projects showcasing frontend, full-stack, and AI-driven development.</p>
    <div class="pfil rv" id="pfil">
      <button class="fb active rounded-full px-4 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white" data-f="all"><span class="fbi">▦</span><span>All</span></button>
      <button class="fb rounded-full px-4 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white" data-f="react"><span class="fbi">⚛️</span><span>React</span></button>
      <button class="fb rounded-full px-4 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white" data-f="ai"><span class="fbi">🧠</span><span>AI</span></button>
      <button class="fb rounded-full px-4 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white" data-f="fullstack"><span class="fbi">🧱</span><span>Full Stack</span></button>
    </div>
    <div class="pgrid" id="pgrid">
      <div class="ghl"><div class="spin"></div><span>Loading projects...</span></div>
    </div>
  </div>
</section>

<!-- EDUCATION -->
<section id="education">
  <div class="sw">
    <div class="slabel rv">Academic & Achievements</div>
    <h2 class="stitle rv"><span class="tp">Education &</span><span class="tg">Certifications</span></h2>
    
    <div class="edu-grid">
      
      <!-- Left Column: Education -->
      <div class="edu-col">
        <h3 class="edu-col-title rv">Education</h3>
        <div class="edu-timeline rv">
          
          <div class="edu-item">
            <div class="edu-dot">🎓</div>
            <div class="edu-content">
              <h4 class="edu-degree">Bachelor of Technology (B.Tech)</h4>
              <div class="edu-school">GIET Engineering College</div>
              <p class="edu-details">Electrical and Electronics Engineering <br/> CGPA: 7.6 | 2020 – 2023</p>
            </div>
          </div>
          
          <div class="edu-item">
            <div class="edu-dot">🏫</div>
            <div class="edu-content">
              <h4 class="edu-degree">Diploma in EEE</h4>
              <div class="edu-school">GIET Polytechnic College, Rajahmundry</div>
              <p class="edu-details">Percentage: 78% | 2017 – 2020</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Right Column: Certifications -->
      <div class="edu-col">
        <h3 class="edu-col-title rv">Certifications</h3>
        <div class="cert-list rv">
          
          <div class="cert-card">
            <div class="cert-icon">🎖️</div>
            <div class="cert-info">
              <h4>NxtWave CCBP 4.0 - React.js</h4>
            </div>
          </div>
          <div class="cert-card">
            <div class="cert-icon">🎖️</div>
            <div class="cert-info">
              <h4>NxtWave CCBP 4.0 - Node.js</h4>
            </div>
          </div>
          <div class="cert-card">
            <div class="cert-icon">🎖️</div>
            <div class="cert-info">
              <h4>NxtWave CCBP 4.0 - Python Programming</h4>
            </div>
          </div>
          <div class="cert-card">
            <div class="cert-icon">🎖️</div>
            <div class="cert-info">
              <h4>NxtWave CCBP 4.0 - Git Developer</h4>
            </div>
          </div>
          <div class="cert-card">
            <div class="cert-icon">🎖️</div>
            <div class="cert-info">
              <h4>NxtWave CCBP 4.0 - HTML & CSS</h4>
            </div>
          </div>
          <div class="cert-card">
            <div class="cert-icon">🏆</div>
            <div class="cert-info">
              <h4>100 Days of Code Challenge (LinkedIn)</h4>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="sw">
    <div class="slabel rv">Contact</div>
    <h2 class="stitle rv"><span class="tp">Let's</span><span class="tg">Connect</span></h2>
    <div class="cg">
      <div class="rv">
        <p class="ctx">Open to frontend engineering opportunities, product-focused collaborations, and impactful freelance engagements. Feel free to reach out for opportunities or collaborations.</p>
        <div class="cls">
          <a class="cl" href="mailto:nagendrauggirala@gmail.com"><span class="clico">📧</span><span>nagendrauggirala@gmail.com</span></a>
          <a class="cl" href="https://www.linkedin.com/in/nagendra-uggirala-736321277/" target="_blank" rel="noopener"><span class="clico">💼</span><span>linkedin.com/in/nagendra-uggirala</span></a>
          <a class="cl" href="https://github.com/NagendraUggirala" target="_blank" rel="noopener"><span class="clico">🐙</span><span>github.com/NagendraUggirala</span></a>
          <a class="cl" href="tel:+917013125955"><span class="clico">📞</span><span>+91 7013125955</span></a>
          <a class="cl" href="#"><span class="clico">📍</span><span>Miyapur, Hyderabad, Telangana, India</span></a>
        </div>
      </div>
      <div class="rv">
        <form class="cform" id="cf" novalidate>
          <div class="fg"><label class="fl" for="fn">Your Name</label><input class="fi" id="fn" type="text" placeholder="John Doe" autocomplete="name" required aria-required="true"/></div>
          <div class="fg"><label class="fl" for="fe">Email Address</label><input class="fi" id="fe" type="email" placeholder="john@example.com" autocomplete="email" required aria-required="true"/></div>
          <div class="fg"><label class="fl" for="fm">Message</label><textarea class="fta" id="fm" placeholder="Hi Nagendra, I'd like to discuss…" required aria-required="true" minlength="10"></textarea></div>
          <button type="submit" class="fsub" id="sb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<footer>
  <span>© 2025 Nagendra Uggirala · Built with 🖤 in Hyderabad</span>
  <span><a href="mailto:nagendrauggirala@gmail.com">nagendrauggirala@gmail.com</a></span>
</footer>
`;

function App() {
  useEffect(() => {
    document.body.classList.add("loaded");
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

    const cd = document.getElementById("cd");
    const cr = document.getElementById("cr");
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    if (cd && cr) {
      document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        cd.style.left = `${mx}px`;
        cd.style.top = `${my}px`;
      });
      (function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        cr.style.left = `${rx}px`;
        cr.style.top = `${ry}px`;
        requestAnimationFrame(animateRing);
      })();
      document.querySelectorAll("a,button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cr.style.cssText += "width:52px;height:52px;border-color:var(--accent)";
          cd.style.transform = "translate(-50%,-50%) scale(1.8)";
        });
        el.addEventListener("mouseleave", () => {
          cr.style.cssText += "width:34px;height:34px;border-color:rgba(0,0,0,.35)";
          cd.style.transform = "translate(-50%,-50%) scale(1)";
        });
      });
    }

    const progressBar = document.getElementById("prog");
    function updateProgressBar() {
      if (!progressBar) return;
      const documentRoot = document.documentElement;
      progressBar.style.width = `${(documentRoot.scrollTop / (documentRoot.scrollHeight - documentRoot.clientHeight)) * 100}%`;
    }
    window.addEventListener("scroll", updateProgressBar, { passive: true });

    window.thm = function thm() {
      const hb = document.getElementById("hb");
      const mn = document.getElementById("mn");
      const iconOpen = document.getElementById("hb-open");
      const iconClose = document.getElementById("hb-close");
      if (!hb || !mn) return;
      const isOpen = mn.classList.toggle("open");
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? "none" : "block";
        iconClose.style.display = isOpen ? "block" : "none";
      }
      hb.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };
    window.cmn = function cmn() {
      const hb = document.getElementById("hb");
      const mn = document.getElementById("mn");
      const iconOpen = document.getElementById("hb-open");
      const iconClose = document.getElementById("hb-close");
      if (!hb || !mn) return;
      mn.classList.remove("open");
      if (iconOpen && iconClose) {
        iconOpen.style.display = "block";
        iconClose.style.display = "none";
      }
      hb.setAttribute("aria-expanded", "false");
    };

    const g1 = document.getElementById("g1");
    const g2 = document.getElementById("g2");
    document.addEventListener("mousemove", (e) => {
      const xr = (e.clientX / window.innerWidth - 0.5) * 28;
      const yr = (e.clientY / window.innerHeight - 0.5) * 18;
      if (g1) g1.style.transform = `translate(${xr}px,${yr}px)`;
      if (g2) g2.style.transform = `translate(${-xr * 0.5}px,${-yr * 0.5}px)`;
    });

    (function particles() {
      const c = document.getElementById("pcanvas");
      if (!c) return;
      const x = c.getContext("2d");
      let W;
      let H;
      const pts = [];
      function rs() {
        W = c.width = c.offsetWidth;
        H = c.height = c.offsetHeight;
      }
      rs();
      window.addEventListener("resize", rs);
      for (let i = 0; i < 55; i += 1) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.4,
          o: Math.random() * 0.45 + 0.1,
        });
      }
      function draw() {
        x.clearRect(0, 0, W, H);
        pts.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          x.beginPath();
          x.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          x.fillStyle = `rgba(0,0,0,${p.o})`;
          x.fill();
        });
        for (let i = 0; i < pts.length; i += 1) {
          for (let j = i + 1; j < pts.length; j += 1) {
            const dx = pts[i].x - pts[j].x;
            const dy = pts[i].y - pts[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 108) {
              x.beginPath();
              x.moveTo(pts[i].x, pts[i].y);
              x.lineTo(pts[j].x, pts[j].y);
              x.strokeStyle = `rgba(0,0,0,${0.11 * (1 - d / 108)})`;
              x.lineWidth = 0.55;
              x.stroke();
            }
          }
        }
        requestAnimationFrame(draw);
      }
      draw();
    })();

    (function scrollReveal() {
      const rvs = document.querySelectorAll(".rv");
      const rvo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.target.parentElement) {
              const sibs = [...e.target.parentElement.querySelectorAll(".rv")];
              e.target.style.transitionDelay = `${Math.min(sibs.indexOf(e.target) * 0.09, 0.4)}s`;
              e.target.classList.add("vis");
              rvo.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      rvs.forEach((r) => rvo.observe(r));

      const sto = new IntersectionObserver(
        (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("tr")),
        { threshold: 0.4 }
      );
      document.querySelectorAll(".stitle").forEach((t) => sto.observe(t));
    })();

    const secs = document.querySelectorAll("section[id]");
    const nls = document.querySelectorAll("#nl a");
    window.addEventListener(
      "scroll",
      () => {
        let cur = "";
        secs.forEach((s) => {
          if (window.scrollY >= s.offsetTop - 120) cur = s.id;
        });
        nls.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${cur}`));
      },
      { passive: true }
    );

    const githubUsername = "NagendraUggirala";
    const fallbackProjects = [
      {
        name: "Hospital Management System (HMS)",
        bullets: [
          "Designed 9 role-specific dashboards and an Admin Dashboard with secure JWT authentication and CRUD operations.",
          "Integrated OpenAI API for AI-powered symptom analysis and automated patient report summarization.",
          "Built cross-platform mobile app with React Native (Expo) providing real-time patient and staff data access."
        ],
        tags: ["react", "fullstack", "ai"],
        stack: ["React.js", "React Native", "TailwindCSS", "FastAPI", "PgAdmin", "OpenAI"],
        stars: 0,
        forks: 0,
        icon: "🏥",
        github: "https://github.com/NagendraUggirala/HMS-APP-",
        // homepage: "https://leviticatechnologies.com"
      },
      {
        name: "Levitica Technologies – Institute Web Platform",
        bullets: [
          "Developed responsive React.js modules including an Admin Dashboard with CRUD operations and analytics views.",
          "Implemented secure JWT authentication and session management, enabling role-based access across admin and user tiers.",
          "Integrated REST APIs for real-time data operations and optimized component architecture, reducing redundant re-renders."
        ],
        tags: ["react", "fullstack"],
        stack: ["React.js", "FastAPI", "PgAdmin", "JWT", "REST APIs"],
        stars: 0,
        forks: 0,
        icon: "🏢",
        github: "https://github.com/NagendraUggirala",
        // homepage: "https://leviticatechnologies.com"
      },
      {
        name: "AI Recruitment & HR Platform (SaaS)",
        bullets: [
          "Built 15+ responsive UI components for job listings, candidate profiles, and HR dashboards across 3 core modules.",
          "Integrated AI-powered candidate screening API, reducing manual HR review effort by an estimated 40%.",
          "Implemented role-based access control (Admin, HR) with JWT for secure multi-tier platform access."
        ],
        tags: ["react", "ai", "fullstack"],
        stack: ["React.js", "TailwindCSS", "Context API", "JWT", "OpenAI"],
        stars: 0,
        forks: 0,
        icon: "🤖",
        github: "https://github.com/NagendraUggirala/AI-HR-Frontend-",
        // homepage: "https://ai-hr-frontend-sigma.vercel.app/"
      },
      {
        name: "MTCE Education Management Platform",
        bullets: [
          "Developed a full-stack education management platform featuring an Admin Dashboard for managing courses, students, and faculty records.",
          "Built reusable responsive UI components and optimized REST API integrations, improving platform load performance and maintainability."
        ],
        tags: ["fullstack", "react"],
        stack: ["React.js", "PgAdmin", "FastAPI", "JWT", "REST APIs"],
        stars: 0,
        forks: 0,
        icon: "🎓",
        github: "https://github.com/NagendraUggirala",
        // homepage: "https://mtce.edu.in"
      },
      {
        name: "Static Website - Techlynx Innovations Pvt Ltd",
        bullets: [
          "Developed a fully responsive company website with mobile-first design and CSS animations, improving visual engagement.",
          "Deployed production site under Techlynx Web Development division, demonstrating frontend expertise and cross-device compatibility."
        ],
        tags: ["fullstack"],
        stack: ["PHP", "HTML5", "CSS3"],
        stars: 0,
        forks: 0,
        icon: "🌐",
        github: "https://github.com/NagendraUggirala",
        // homepage: "https://techlynxinnovations.com"
      },
    ];

    function getProjectTags(topics, language) {
      const searchableText = (topics || []).join(" ") + (language || "").toLowerCase();
      const tags = [];
      if (/react|jsx/.test(searchableText)) tags.push("react");
      if (/ai|openai|ml|gpt/.test(searchableText)) tags.push("ai");
      if (/node|express|mongo|server|backend|full/.test(searchableText)) tags.push("fullstack");
      return tags.length ? tags : ["react"];
    }
    function getProjectIcon(name, description) {
      const searchableText = `${name} ${description || ""}`.toLowerCase();
      if (/hospital|health|medical/.test(searchableText)) return "🏥";
      if (/recruit|hr|saas/.test(searchableText)) return "🤖";
      if (/website|landing|static/.test(searchableText)) return "🌐";
      if (/mobile|native|expo/.test(searchableText)) return "📱";
      if (/ai|gpt|ml/.test(searchableText)) return "🧠";
      return "💻";
    }
    function initializeProjectFilters() {
      document.querySelectorAll(".fb").forEach((btn) => {
        btn.onclick = () => {
          document.querySelectorAll(".fb").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const selectedFilter = btn.dataset.f;
          document.querySelectorAll(".pc").forEach((projectCard) => {
            const cardTags = (projectCard.dataset.tags || "").split(",");
            projectCard.classList.toggle("hidden", selectedFilter !== "all" && !cardTags.includes(selectedFilter));
          });
        };
      });
    }
    function truncateDescription(text, maxLength = 170) {
      if (!text) return "Product-focused web project by Nagendra Uggirala.";
      if (text.length <= maxLength) return text;
      return `${text.slice(0, maxLength).trimEnd()}...`;
    }
    function renderProjects(projects) {
      const grid = document.getElementById("pgrid");
      if (!grid) return;
      grid.innerHTML = "";
      if (!projects || !projects.length) {
        grid.innerHTML = '<div class="ghl"><div class="spin"></div><span>No projects found in this category.</span></div>';
        return;
      }
      projects.forEach((project, index) => {
        const tags = project.tags || getProjectTags(project.topics, project.language);
        const icon = project.icon || getProjectIcon(project.name, project.description);
        const stack = project.stack || (project.language ? [project.language] : ["JavaScript"]);
        const github_link = project.github || project.html_url || null;
        const live_link = project.homepage || null;
        const name = (project.name || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        const card = document.createElement("div");
        card.className = "pc rv";
        card.dataset.tags = tags.join(",");
        card.style.transitionDelay = `${index * 0.08}s`;
        card.innerHTML = `
          <div class="ph">
            <div class="pi">${icon}</div>
            <div class="pls">
              ${github_link ? `<a href="${github_link}" class="pl" target="_blank" rel="noopener" title="GitHub" aria-label="View source code on GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>` : ""}
              ${live_link ? `<a href="${live_link}" class="pl" target="_blank" rel="noopener" title="Live" aria-label="View live project">🔗</a>` : ""}
            </div>
          </div>
          <div class="pt">${name}</div>
          <div class="pd" style="margin-bottom:12px;">
            ${project.bullets ? `<ul style="margin:0; padding-left:20px; list-style-type:disc;">${project.bullets.map(b => `<li style="margin-bottom:6px;">${b}</li>`).join("")}</ul>` : truncateDescription(project.description)}
          </div>
          <div class="pst">${stack.map((t) => `<span class="ptch">${t}</span>`).join("")}</div>
          <div class="pacts">
            ${github_link ? `<a href="${github_link}" class="pbtn" target="_blank" rel="noopener" aria-label="View code for ${name}">View Code</a>` : ""}
            ${live_link ? `<a href="${live_link}" class="pbtn pbtn-live" target="_blank" rel="noopener" aria-label="View live demo for ${name}">Live Demo</a>` : ""}
          </div>
          <div class="pss">
            <span class="pstat"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${project.stargazers_count || project.stars || 0}</span>
            <span class="pstat"><svg viewBox="0 0 24 24"><line x1="18" y1="2" x2="18" y2="9"/><line x1="18" y1="20" x2="18" y2="22"/><polyline points="6 2 6 6 18 9 6 18 6 22"/></svg>${project.forks_count || project.forks || 0}</span>
            ${project.language ? `<span class="pstat">💬 ${project.language}</span>` : ""}
          </div>`;
        grid.appendChild(card);
        setTimeout(() => card.classList.add("vis"), 50 + index * 80);
      });
      initializeProjectFilters();
    }
    renderProjects(fallbackProjects);

    const form = document.getElementById("cf");
    if (form) {
      form.addEventListener("submit", async function onSubmit(e) {
        e.preventDefault();
        const fn = document.getElementById("fn");
        const fe = document.getElementById("fe");
        const fm = document.getElementById("fm");
        const sb = document.getElementById("sb");
        if (!fn || !fe || !fm || !sb) return;
        [fn, fe, fm].forEach((f) => f.classList.remove("err"));
        let ok = true;
        if (!fn.value.trim()) {
          fn.classList.add("err");
          ok = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fe.value)) {
          fe.classList.add("err");
          ok = false;
        }
        if (fm.value.trim().length < 10) {
          fm.classList.add("err");
          ok = false;
        }
        if (!ok) {
          showToast("Please fill all fields correctly.", "error");
          return;
        }
        sb.disabled = true;
        sb.innerHTML = '<div class="spin" style="width:18px;height:18px;margin:0;border-width:2px"></div> Sending…';
        try {
          await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: fn.value.trim(),
            from_email: fe.value.trim(),
            message: fm.value.trim(),
            to_name: "Nagendra",
          });
          showToast("Message sent! I'll get back to you soon 🚀", "success");
          form.reset();
        } catch {
          showToast("Message received! (Set up EmailJS keys to enable email delivery)", "success");
        }
        sb.disabled = false;
        sb.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';
      });
    }

    function showToast(msg, type) {
      const t = document.getElementById("toast");
      const tm = document.getElementById("tmsg");
      if (!t || !tm) return;
      t.className = "";
      t.classList.add(type === "error" ? "te" : "ts");
      t.querySelector(".tico").textContent = type === "error" ? "❌" : type === "info" ? "ℹ️" : "✅";
      tm.textContent = msg;
      t.classList.add("show");
      setTimeout(() => t.classList.remove("show"), 4200);
    }

    if ("IntersectionObserver" in window) {
      const li = document.querySelectorAll("img[data-src]");
      const lo = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.src = e.target.dataset.src;
              lo.unobserve(e.target);
            }
          });
        },
        { rootMargin: "200px" }
      );
      li.forEach((i) => lo.observe(i));
    }

    return () => {
      delete window.cmn;
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <HomePopupCards />
      <ChatBot />
    </>
  );
}

export default App;
