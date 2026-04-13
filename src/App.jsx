import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import ChatBot from "./ChatBot";
import HomePopupCards from "./HomePopupCards";

const markup = `
<div id="cd"></div><div id="cr"></div>
<div id="prog"></div>
<div id="toast" role="status" aria-live="polite" aria-atomic="true"><span class="tico"></span><span id="tmsg"></span></div>

<!-- NAV -->
<nav>
  <a class="nav-logo" href="#hero"><span class="ndot"></span>NU<span style="color:var(--accent)">.</span></a>
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
    <button class="hbtn" id="hb" aria-label="Toggle navigation menu" aria-controls="mn" aria-expanded="false">☰</button>
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
  <canvas id="pcanvas"></canvas>
  <div class="hgrid"></div>
  <div class="hglow1" id="g1"></div>
  <div class="hglow2" id="g2"></div>
  <div class="hi">
    <div class="hbadge">Frontend Engineer</div>
    <h1 class="htitle">
      <span class="l1">Nagendra</span>
      <span class="l2">Uggirala</span>
    </h1>
    <div class="hrole">Frontend Developer (React-Focused)</div>
    <p class="hdesc">
      I build real-world, scalable web applications using React with clean architecture and API-first development.
      Focused on high-performance interfaces and intuitive user experiences that drive product impact.
    </p>
    <div class="hacts">
      <a href="#contact" class="bprim">Contact Me</a>
    </div>
  </div>
  <div class="hphoto-wrap">
    <img class="hphoto" src="https://res.cloudinary.com/dmutsybwr/image/upload/fl_preserve_transparency/v1776077201/nagendraimage_zvqn9d.jpg?_s=public-apps" alt="Nagendra portrait at beach"/>
  </div>
  <div class="hscroll"><div class="sline"></div><span>scroll</span></div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="about-wrap">
    <h2 class="about-title">Professional Summary</h2>
    <p class="about-text">
      Frontend developer specializing in React.js, Tailwind CSS, and Vite, with hands-on experience building API-driven dashboards and reusable UI systems for real-world workflows.
      Currently expanding into React Native for cross-platform mobile development and backend engineering with FastAPI, with a strong focus on scalable architecture, clean code, performance, and AI-powered product integration.
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
      <div class="skill-card"><span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript icon"/></span>React.js & JavaScript (ES6+)</div>
      <div class="skill-card"><span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS icon"/></span>HTML5, CSS3 & Tailwind CSS</div>
      <div class="skill-card"><span class="skill-ico"><img src="https://img.icons8.com/color/48/responsive.png" alt="Responsive design icon"/><img src="https://img.icons8.com/color/48/accessibility2.png" alt="Accessibility icon"/></span>Responsive UI & Accessibility</div>
      <div class="skill-card"><span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Context API icon"/></span>Redux & Context API</div>
      <div class="skill-card"><span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI icon"/></span>Node.js, Express.js & FastAPI</div>
      <div class="skill-card"><span class="skill-ico"><img src="https://img.icons8.com/color/48/api-settings.png" alt="API integration icon"/><img src="https://img.icons8.com/color/48/key-security.png" alt="JWT authentication icon"/></span>REST APIs & JWT Authentication</div>
      <div class="skill-card"><span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman icon"/></span>Git, GitHub & Postman</div>
      <div class="skill-card"><span class="skill-ico"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code icon"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma icon"/><img src="https://img.icons8.com/color/48/artificial-intelligence.png" alt="AI integration icon"/></span>React Native, VS Code, Figma & AI Integration</div>
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
          <div class="eco">Levitica Technologies PVT LTD</div>
          <div class="ero">Associate Software Engineer</div>
          <div class="em"><span class="ebadge">📍 Hyderabad</span><span class="ebadge">🗓 May 2025 – Present</span><span class="ebadge">Full-time (Current)</span></div>
          <ul class="eal">
            <li>Developed reusable React.js modules for an AI-powered HR SaaS platform across Admin, HR, and candidate workflows.</li>
            <li>Implemented secure JWT-based role access and collaborated on scalable frontend architecture using Redux and Context API.</li>
            <li>Optimized UI consistency by standardizing component patterns, reducing duplicate code, and improving delivery speed.</li>
          </ul>
        </div>
      </div>
      <div class="ei rv">
        <div class="edot"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg></div>
        <div class="ec">
          <div class="eco">VeriTech Software IT Services</div>
          <div class="ero">Frontend Developer Intern</div>
          <div class="em"><span class="ebadge">📍 Pune</span><span class="ebadge">🗓 Jan 2025 – Mar 2025</span><span class="ebadge">Intern</span></div>
          <ul class="eal">
            <li>Developed responsive React.js interfaces with HTML5 and CSS3 for client-facing business modules.</li>
            <li>Integrated REST APIs for dynamic data rendering and collaborated with backend teams on endpoint contracts.</li>
            <li>Optimized usability and UI consistency while contributing to on-time delivery across multiple modules.</li>
          </ul>
        </div>
      </div>
      <div class="ei rv">
        <div class="edot"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg></div>
        <div class="ec">
          <div class="eco">Aurobindo Pharma (Unit-5)</div>
          <div class="ero">Electrical Executive Intern (E4)</div>
          <div class="em"><span class="ebadge">📍 Hyderabad</span><span class="ebadge">🗓 May 2024 – Nov 2024</span><span class="ebadge">Intern</span></div>
          <ul class="eal">
            <li>Improved reporting workflows and documented structured maintenance processes for better operational clarity.</li>
            <li>Collaborated with cross-functional teams to enhance reliability through proactive monitoring and issue tracking.</li>
            <li>Strengthened problem-solving, process improvement, and teamwork in a high-scale industrial environment.</li>
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
    <div class="slabel rv">Academic</div>
    <h2 class="stitle rv"><span class="tp">Education &</span><span class="tg">Certifications</span></h2>
    <div class="edu rv" style="margin-bottom:40px">
      <div class="eico">🎓</div>
      <div>
        <div class="edeg">Bachelor of Technology (B.Tech) — Electrical and Electronics Engineering</div>
        <div class="esch">GIET Engineering College</div>
        <div class="erow">
          <span class="epill">Duration: 2020 – 2023</span>
          <span class="epill">Branch: Electrical and Electronics Engineering</span>
          <span class="epill">Score: CGPA 7.6</span>
        </div>
      </div>
    </div>
    <div class="certg rv">
      <div class="cert"><div class="cico">🏫</div><div><div class="ctit">Diploma — Electrical and Electronics Engineering</div><div class="corg">GIET Polytechnic College, Rajahmundry · Duration: 2017 – 2020 · Score: 78%</div></div></div>
      <div class="cert"><div class="cico">📘</div><div><div class="ctit">Secondary School Certificate (SSC)</div><div class="corg">ZPP High School, Jonnada · Score: CGPA 8.8</div></div></div>
      <div class="cert"><div class="cico">💻</div><div><div class="ctit">Full Stack Development Program</div><div class="corg">NxtWave Student Program</div></div></div>
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

    const hb = document.getElementById("hb");
    const mn = document.getElementById("mn");
    if (hb && mn) {
      hb.addEventListener("click", () => {
        mn.classList.toggle("open");
        hb.textContent = mn.classList.contains("open") ? "✕" : "☰";
        hb.setAttribute("aria-expanded", mn.classList.contains("open") ? "true" : "false");
      });
    }
    window.cmn = function cmn() {
      if (!hb || !mn) return;
      mn.classList.remove("open");
      hb.textContent = "☰";
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
        name: "Smart-Hospital-Management-Platform",
        description:
          "Problem: fragmented hospital workflows slowed patient servicing. Solution: built a role-based hospital platform with scheduling, symptom analysis, and reporting. Result: a unified experience across patient, doctor, and admin journeys.",
        tags: ["react", "fullstack", "ai"],
        stack: ["React.js", "React Native", "Node.js", "MongoDB", "AI APIs", "TailwindCSS"],
        stars: 0,
        forks: 0,
        icon: "🏥",
        url: "https://github.com/NagendraUggirala",
      },
      {
        name: "AI-Recruitment-SaaS-Platform",
        description:
          "Problem: manual candidate screening consumed recruiter time. Solution: developed an AI-assisted recruitment SaaS with secure role-based workflows and reusable React components. Result: faster shortlisting and more consistent hiring operations.",
        tags: ["react", "ai", "fullstack"],
        stack: ["React.js", "Redux", "Context API", "JWT", "AI APIs", "TailwindCSS"],
        stars: 0,
        forks: 0,
        icon: "🤖",
        url: "https://github.com/NagendraUggirala",
      },
      {
        name: "Techlynx-Business-Website",
        description:
          "Problem: the business needed a stronger digital presence to generate leads. Solution: delivered a responsive company website with clear information architecture and dynamic content modules. Result: improved credibility, mobile usability, and user engagement.",
        tags: ["fullstack"],
        stack: ["PHP", "HTML5", "CSS3", "Responsive Design"],
        stars: 0,
        forks: 0,
        icon: "🌐",
        url: "https://github.com/NagendraUggirala",
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
        const link = project.url || project.html_url || "#";
        const name = (project.name || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        const card = document.createElement("div");
        card.className = "pc rv";
        card.dataset.tags = tags.join(",");
        card.style.transitionDelay = `${index * 0.08}s`;
        card.innerHTML = `
          <div class="ph">
            <div class="pi">${icon}</div>
            <div class="pls">
              <a href="${link}" class="pl" target="_blank" rel="noopener" title="GitHub" aria-label="View source code on GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              ${project.homepage ? `<a href="${project.homepage}" class="pl" target="_blank" rel="noopener" title="Live" aria-label="View live project">🔗</a>` : ""}
            </div>
          </div>
          <div class="pt">${name}</div>
          <div class="pd">${truncateDescription(project.description)}</div>
          <div class="pst">${stack.map((t) => `<span class="ptch">${t}</span>`).join("")}</div>
          <div class="pacts">
            <a href="${link}" class="pbtn" target="_blank" rel="noopener" aria-label="View code for ${name}">View Code</a>
            ${project.homepage ? `<a href="${project.homepage}" class="pbtn pbtn-live" target="_blank" rel="noopener" aria-label="View live demo for ${name}">Live Demo</a>` : ""}
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
    async function fetchGitHubProjects() {
      try {
        const res = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=9&type=public`, {
          headers: { Accept: "application/vnd.github.v3+json" },
        });
        if (!res.ok) throw new Error("fetch failed");
        const all = await res.json();
        const repos = all.filter((repo) => !repo.fork && repo.name !== githubUsername).slice(0, 6);
        if (!repos.length) throw new Error("empty");
        renderProjects(repos);
      } catch {
        renderProjects(fallbackProjects);
      }
    }
    fetchGitHubProjects();

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
