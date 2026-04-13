import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const markup = `
<div id="cd"></div><div id="cr"></div>
<div id="prog"></div>
<div id="toast"><span class="tico"></span><span id="tmsg"></span></div>

<!-- NAV -->
<nav>
  <a class="nav-logo" href="#hero"><span class="ndot"></span>NU<span style="color:var(--accent)">.</span></a>
  <div class="nl" id="nl">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#education">Education</a>
    <a href="#contact" class="ncta">Contact</a>
  </div>
  <div style="display:flex;align-items:center;gap:8px">
    <button class="hbtn" id="hb">☰</button>
  </div>
</nav>
<nav class="mnav" id="mn">
  <a href="#about" onclick="cmn()">About</a>
  <a href="#skills" onclick="cmn()">Skills</a>
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
    <div class="hbadge">Hello, I'm</div>
    <h1 class="htitle">
      <span class="l1">Nagendra</span>
      <span class="l2">Uggirala</span>
    </h1>
    <div class="hrole">Senior UI/UX Designer & Frontend Developer</div>
    <p class="hdesc">
      I craft intuitive and engaging digital experiences with
      a focus on simplicity and usability.
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
    <h2 class="about-title">About Me</h2>
    <p class="about-text">
      I am a passionate frontend developer with hands-on experience building responsive, accessible, and scalable web apps.
      I combine modern development practices with thoughtful UI design to deliver user-focused digital solutions.
    </p>
    <div class="about-grid">
      <article class="about-card">
        <h3>Bio</h3>
        <ul>
          <li>Frontend developer focused on React.js and React Native</li>
          <li>5+ years of combined learning and practical project experience</li>
          <li>Proficient in HTML, CSS, JavaScript, APIs, and UI systems</li>
        </ul>
      </article>
      <article class="about-card">
        <h3>Achievements</h3>
        <ul>
          <li>Built multiple production-ready web modules and dashboards</li>
          <li>Delivered solutions for startups and business teams</li>
          <li>Strong client feedback on quality, usability, and delivery</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section id="skills">
  <div class="sw">
    <div class="slabel rv">Skills</div>
    <h2 class="stitle rv"><span class="tp">Technologies</span><span class="tg">I Work With</span></h2>
    <div class="skill-cards rv">
      <div class="skill-card"><span class="skill-ico">🧱</span>HTML</div>
      <div class="skill-card"><span class="skill-ico">🎨</span>CSS</div>
      <div class="skill-card"><span class="skill-ico">🟨</span>JavaScript</div>
      <div class="skill-card"><span class="skill-ico">⚛️</span>React</div>
      <div class="skill-card"><span class="skill-ico">🌬️</span>Tailwind CSS</div>
      <div class="skill-card"><span class="skill-ico">🧩</span>Figma</div>
      <div class="skill-card"><span class="skill-ico">🐙</span>GitHub</div>
      <div class="skill-card"><span class="skill-ico">🔀</span>Git</div>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="sw">
    <div class="slabel rv">Career</div>
    <h2 class="stitle rv"><span class="tp">Work</span><span class="tg">Experience</span></h2>
    <div class="etl">
      <div class="ei rv">
        <div class="edot"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg></div>
        <div class="ec">
          <div class="eco">Levitica Technologies PVT LTD</div>
          <div class="ero">Associate Software Engineer</div>
          <div class="em"><span class="ebadge">📍 Hyderabad</span><span class="ebadge">🗓 Mar 2025 – Present</span><span class="ebadge">Full-time</span></div>
          <ul class="eal">
            <li>Built 10+ reusable React.js components for an AI-powered HR SaaS platform across dashboards and candidate modules.</li>
            <li>Implemented JWT-based role authentication (Admin / HR / Candidate), securing multi-tier platform access end-to-end.</li>
            <li>Managed global state with Redux & Context API, reducing prop-drilling by ~60% and significantly improving scalability.</li>
          </ul>
        </div>
      </div>
      <div class="ei rv">
        <div class="edot"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg></div>
        <div class="ec">
          <div class="eco">VeriTech Software IT Services</div>
          <div class="ero">Frontend Developer — Internship</div>
          <div class="em"><span class="ebadge">📍 Pune</span><span class="ebadge">🗓 Jan 2025 – Mar 2025</span><span class="ebadge">Internship</span></div>
          <ul class="eal">
            <li>Developed responsive React.js UI components with HTML5, CSS3 and Bootstrap ensuring full cross-browser compatibility.</li>
            <li>Integrated REST APIs for dynamic data rendering; collaborated with backend team on API contract design.</li>
            <li>Delivered 3 client-facing modules on schedule with positive feedback for code quality and UI consistency.</li>
          </ul>
        </div>
      </div>
      <div class="ei rv">
        <div class="edot"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg></div>
        <div class="ec">
          <div class="eco">Aurobindo Pharma (Unit-5)</div>
          <div class="ero">Electrical Executive (E4) — Internship</div>
          <div class="em"><span class="ebadge">📍 Hyderabad</span><span class="ebadge">🗓 May 2024 – Nov 2024</span><span class="ebadge">Internship</span></div>
          <ul class="eal">
            <li>Maintained electrical systems and automated data reporting with Excel macros, improving log accuracy.</li>
            <li>Documented equipment maintenance schedules, reducing downtime through proactive monitoring.</li>
            <li>Strengthened analytical problem-solving in a large-scale industrial production environment.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="sw">
    <div class="slabel rv">Portfolio</div>
    <h2 class="stitle rv"><span class="tp">Featured</span><span class="tg">Projects</span></h2>
    <div class="pfil rv" id="pfil">
      <button class="fb active" data-f="all">All</button>
      <button class="fb" data-f="react">React</button>
      <button class="fb" data-f="ai">AI</button>
      <button class="fb" data-f="fullstack">Full Stack</button>
    </div>
    <div class="pgrid" id="pgrid">
      <div class="ghl"><div class="spin"></div><span>Fetching GitHub repos…</span></div>
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
        <div class="edeg">Integrated Dual Degree — Diploma & B.Tech</div>
        <div class="esch">GIET Engineering College, Rajahmundry</div>
        <div class="erow">
          <span class="epill">2017 – 2023</span>
          <span class="epill">CGPA 7.9 · 78%</span>
          <span class="epill">Data Structures · Web Dev · DBMS</span>
        </div>
      </div>
    </div>
    <div class="certg rv">
      <div class="cert"><div class="cico">⚛️</div><div><div class="ctit">React.js Development</div><div class="corg">Component architecture & state management · 2024</div></div></div>
      <div class="cert"><div class="cico">🔧</div><div><div class="ctit">MERN Stack Development</div><div class="corg">Full-stack web applications · VeriTech · 2025</div></div></div>
      <div class="cert"><div class="cico">🤖</div><div><div class="ctit">AI API Integration</div><div class="corg">OpenAI & third-party AI APIs · 2025</div></div></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="sw">
    <div class="slabel rv">Get in Touch</div>
    <h2 class="stitle rv"><span class="tp">Let's</span><span class="tg">Connect</span></h2>
    <div class="cg">
      <div class="rv">
        <p class="ctx">Open to exciting frontend, full-stack, and AI-integrated product roles. Whether you have a project, opportunity, or just want to say hi — my inbox is always open.</p>
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
          <div class="fg"><label class="fl" for="fn">Your Name</label><input class="fi" id="fn" type="text" placeholder="John Doe" autocomplete="name"/></div>
          <div class="fg"><label class="fl" for="fe">Email Address</label><input class="fi" id="fe" type="email" placeholder="john@example.com" autocomplete="email"/></div>
          <div class="fg"><label class="fl" for="fm">Message</label><textarea class="fta" id="fm" placeholder="Hi Nagendra, I'd like to discuss…"></textarea></div>
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

    const bar = document.getElementById("prog");
    function upBar() {
      if (!bar) return;
      const s = document.documentElement;
      bar.style.width = `${(s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100}%`;
    }
    window.addEventListener("scroll", upBar, { passive: true });

    const hb = document.getElementById("hb");
    const mn = document.getElementById("mn");
    if (hb && mn) {
      hb.addEventListener("click", () => {
        mn.classList.toggle("open");
        hb.textContent = mn.classList.contains("open") ? "✕" : "☰";
      });
    }
    window.cmn = function cmn() {
      if (!hb || !mn) return;
      mn.classList.remove("open");
      hb.textContent = "☰";
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

    const GH = "NagendraUggirala";
    const STATIC = [
      {
        name: "Hospital-Management-System",
        description:
          "Full-stack cross-platform HMS with 9 role-specific dashboards. AI-powered symptom analysis, appointment scheduling, and automated patient report summarisation.",
        tags: ["react", "fullstack", "ai"],
        stack: ["React.js", "React Native", "Node.js", "MongoDB", "AI APIs", "TailwindCSS"],
        stars: 0,
        forks: 0,
        icon: "🏥",
        url: "https://github.com/NagendraUggirala",
      },
      {
        name: "AI-HR-Recruitment-SaaS",
        description:
          "Enterprise SaaS platform with 15+ responsive UI components. AI-powered candidate screening reduced manual review by ~40%. Full JWT role-based access control.",
        tags: ["react", "ai", "fullstack"],
        stack: ["React.js", "Redux", "Context API", "JWT", "AI APIs", "TailwindCSS"],
        stars: 0,
        forks: 0,
        icon: "🤖",
        url: "https://github.com/NagendraUggirala",
      },
      {
        name: "Techlynx-Innovations-Website",
        description:
          "Fully responsive company website with mobile-first design. Dynamic content using PHP and CSS animations, deployed for Techlynx Web Development.",
        tags: ["fullstack"],
        stack: ["PHP", "HTML5", "CSS3", "Responsive Design"],
        stars: 0,
        forks: 0,
        icon: "🌐",
        url: "https://github.com/NagendraUggirala",
      },
    ];

    function getTags(topics, lang) {
      const t = (topics || []).join(" ") + (lang || "").toLowerCase();
      const out = [];
      if (/react|jsx/.test(t)) out.push("react");
      if (/ai|openai|ml|gpt/.test(t)) out.push("ai");
      if (/node|express|mongo|server|backend|full/.test(t)) out.push("fullstack");
      return out.length ? out : ["react"];
    }
    function getIcon(n, d) {
      const t = `${n} ${d || ""}`.toLowerCase();
      if (/hospital|health|medical/.test(t)) return "🏥";
      if (/recruit|hr|saas/.test(t)) return "🤖";
      if (/website|landing|static/.test(t)) return "🌐";
      if (/mobile|native|expo/.test(t)) return "📱";
      if (/ai|gpt|ml/.test(t)) return "🧠";
      return "💻";
    }
    function setupFilters() {
      document.querySelectorAll(".fb").forEach((btn) => {
        btn.onclick = () => {
          document.querySelectorAll(".fb").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const f = btn.dataset.f;
          document.querySelectorAll(".pc").forEach((c) => {
            const t = (c.dataset.tags || "").split(",");
            c.classList.toggle("hidden", f !== "all" && !t.includes(f));
          });
        };
      });
    }
    function renderProjects(data) {
      const grid = document.getElementById("pgrid");
      if (!grid) return;
      grid.innerHTML = "";
      if (!data || !data.length) {
        grid.innerHTML = '<div class="ghl"><span>No repositories found.</span></div>';
        return;
      }
      data.forEach((r, i) => {
        const tags = r.tags || getTags(r.topics, r.language);
        const icon = r.icon || getIcon(r.name, r.description);
        const stack = r.stack || (r.language ? [r.language] : ["JavaScript"]);
        const link = r.url || r.html_url || "#";
        const name = (r.name || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        const card = document.createElement("div");
        card.className = "pc rv";
        card.dataset.tags = tags.join(",");
        card.style.transitionDelay = `${i * 0.08}s`;
        card.innerHTML = `
          <div class="ph">
            <div class="pi">${icon}</div>
            <div class="pls">
              <a href="${link}" class="pl" target="_blank" rel="noopener" title="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              ${r.homepage ? `<a href="${r.homepage}" class="pl" target="_blank" rel="noopener" title="Live">🔗</a>` : ""}
            </div>
          </div>
          <div class="pt">${name}</div>
          <div class="pd">${r.description || "A project by Nagendra Uggirala."}</div>
          <div class="pst">${stack.map((t) => `<span class="ptch">${t}</span>`).join("")}</div>
          <div class="pss">
            <span class="pstat"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${r.stargazers_count || r.stars || 0}</span>
            <span class="pstat"><svg viewBox="0 0 24 24"><line x1="18" y1="2" x2="18" y2="9"/><line x1="18" y1="20" x2="18" y2="22"/><polyline points="6 2 6 6 18 9 6 18 6 22"/></svg>${r.forks_count || r.forks || 0}</span>
            ${r.language ? `<span class="pstat">💬 ${r.language}</span>` : ""}
          </div>`;
        grid.appendChild(card);
        setTimeout(() => card.classList.add("vis"), 50 + i * 80);
      });
      setupFilters();
    }
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${GH}/repos?sort=updated&per_page=9&type=public`, {
          headers: { Accept: "application/vnd.github.v3+json" },
        });
        if (!res.ok) throw new Error("fetch failed");
        const all = await res.json();
        const repos = all.filter((r) => !r.fork && r.name !== GH).slice(0, 6);
        if (!repos.length) throw new Error("empty");
        renderProjects(repos);
      } catch {
        renderProjects(STATIC);
      }
    }
    fetchRepos();

    const rdlBtn = document.getElementById("rdl");
    if (rdlBtn) {
      rdlBtn.addEventListener("click", () => {
        showToast("Host your PDF and set the URL in the script to enable download!", "info");
      });
    }

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

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

export default App;
