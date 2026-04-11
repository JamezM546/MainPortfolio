const content = window.PORTFOLIO_CONTENT;

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setLink(id, url) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  if (url && url !== "#") {
    element.href = url;
  } else {
    element.removeAttribute("href");
    element.setAttribute("aria-disabled", "true");
  }
}

function renderStats(stats) {
  const container = document.getElementById("quick-stats");
  container.innerHTML = "";

  stats.forEach((stat) => {
    const item = document.createElement("div");
    item.className = "stat-item reveal";
    item.innerHTML = `
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    `;
    container.appendChild(item);
  });
}

function renderBadges(badges) {
  const container = document.getElementById("hero-badges");
  container.innerHTML = "";

  badges.forEach((badge) => {
    const item = document.createElement("span");
    item.className = "hero-badge reveal";
    item.textContent = badge;
    container.appendChild(item);
  });
}

function renderSignals(signals) {
  const container = document.getElementById("signal-list");
  container.innerHTML = "";

  signals.forEach((signal) => {
    const item = document.createElement("div");
    item.className = "signal-item reveal";
    item.textContent = signal;
    container.appendChild(item);
  });
}

function renderSkills(skills) {
  const container = document.getElementById("skills-list");
  container.innerHTML = "";

  skills.forEach((skill) => {
    const pill = document.createElement("span");
    pill.className = "skill-pill reveal";
    pill.textContent = skill;
    container.appendChild(pill);
  });
}

function renderPrinciples(principles) {
  const container = document.getElementById("principles-list");
  container.innerHTML = "";

  principles.forEach((principle, index) => {
    const item = document.createElement("div");
    item.className = "principle-item reveal";
    item.innerHTML = `
      <span class="principle-number">0${index + 1}</span>
      <span>${principle}</span>
    `;
    container.appendChild(item);
  });
}

function renderProjects(projects) {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";

  projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = `project-card reveal${project.featured ? " featured" : ""}`;

    const metricChips = project.impact
      .map((item) => `<span class="chip">${item}</span>`)
      .join("");

    const toolChips = project.tools
      .map((tool) => `<span class="chip">${tool}</span>`)
      .join("");

    const links = project.links
      .map(
        (link) =>
          `<a class="contact-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
      )
      .join("");

    article.innerHTML = `
      <div class="project-topline">
        <h3 class="project-title">${project.title}</h3>
        <span class="project-tag">${project.tag}</span>
      </div>
      <p>${project.summary}</p>
      <div class="project-metrics">${metricChips}</div>
      <div class="project-tools">${toolChips}</div>
      <div class="project-links">${links}</div>
    `;

    container.appendChild(article);
  });
}

function renderTimeline(items) {
  const container = document.getElementById("timeline");
  container.innerHTML = "";

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item reveal";
    article.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-body">
        <h3>${item.title}</h3>
        <p><strong>${item.subtitle}</strong></p>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(article);
  });
}

function renderContactLinks(links) {
  const container = document.getElementById("contact-links");
  container.innerHTML = "";

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "contact-link reveal";
    anchor.href = link.url;
    anchor.target = link.url.startsWith("mailto:") ? "_self" : "_blank";
    anchor.rel = anchor.target === "_blank" ? "noreferrer" : "";
    anchor.textContent = link.label;
    container.appendChild(anchor);
  });
}

function initMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    const nextExpanded = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(nextExpanded));
    nav.classList.toggle("open", nextExpanded);
  });
}

function initReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal, .panel, .project-card, .timeline-item");

  targets.forEach((item) => item.classList.add("reveal"));

  if (prefersReducedMotion) {
    targets.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  targets.forEach((target) => observer.observe(target));
}

function hydrateContent() {
  setText("hero-status", content.hero.status);
  setText("hero-name", content.hero.name);
  setText("hero-role", content.hero.role);
  setText("hero-summary", content.hero.summary);
  setLink("resume-link", content.hero.resumeUrl);
  setText("focus-title", content.hero.focusTitle);
  setText("focus-copy", content.hero.focusCopy);

  setText("about-copy-1", content.about.paragraphOne);
  setText("about-copy-2", content.about.paragraphTwo);
  setText("availability-copy", content.availability);
  setText("contact-copy", content.contact.copy);
  setText("footer-note", content.footerNote);

  renderStats(content.stats);
  renderBadges(content.badges);
  renderSignals(content.signals);
  renderSkills(content.skills);
  renderPrinciples(content.principles);
  renderProjects(content.projects);
  renderTimeline(content.experience);
  renderContactLinks(content.contact.links);
}

hydrateContent();
initMenu();
initReveal();
