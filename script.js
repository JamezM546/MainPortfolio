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

function setThemeGif(url) {
  const image = document.getElementById("theme-gif");
  const fallback = document.getElementById("media-fallback");

  if (!image || !fallback) {
    return;
  }

  if (url && url.trim()) {
    image.src = url;
    image.classList.add("is-visible");
    fallback.classList.add("is-hidden");
  } else {
    image.removeAttribute("src");
    image.classList.remove("is-visible");
    fallback.classList.remove("is-hidden");
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

function renderSkills(skills, containerId = "skills-list") {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = "";

  skills.forEach((skill) => {
    const pill = document.createElement("span");
    pill.className = "skill-pill reveal";
    pill.textContent = skill;
    container.appendChild(pill);
  });
}

function renderEducation(items) {
  const container = document.getElementById("education-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "panel education-card reveal";
    article.innerHTML = `
      <h3>${item.degree}</h3>
      <p class="education-school"><strong>${item.school}</strong></p>
      <p class="education-detail">${item.detail}</p>
    `;
    container.appendChild(article);
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

    const links = (project.links || [])
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

    let bodyContent = "";
    if (item.bullets && item.bullets.length) {
      const list = item.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
      bodyContent = `<ul class="timeline-bullets">${list}</ul>`;
    } else if (item.description) {
      bodyContent = `<p>${item.description}</p>`;
    }

    article.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-body">
        <h3>${item.title}</h3>
        <p><strong>${item.subtitle}</strong></p>
        ${bodyContent}
      </div>
    `;
    container.appendChild(article);
  });
}

function renderContactLinks(links) {
  const container = document.getElementById("contact-links");
  const hint = document.getElementById("contact-hint");
  container.innerHTML = "";

  if (!links || !links.length) {
    if (hint) {
      hint.hidden = false;
    }
    return;
  }

  if (hint) {
    hint.hidden = true;
  }

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
    {
      threshold: 0.08,
      rootMargin: "0px 0px -4% 0px"
    }
  );

  targets.forEach((target) => observer.observe(target));
}

function initBackdropMotion() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  const orbs = Array.from(document.querySelectorAll(".backdrop-orb"));
  const beams = Array.from(document.querySelectorAll(".backdrop-beam"));

  if (!orbs.length && !beams.length) {
    return;
  }

  let ticking = false;

  function updateMotion() {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight || 1;
    const progress = Math.min(scrollY / viewportHeight, 6);

    orbs.forEach((orb, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const y = progress * (18 + index * 6) * direction;
      const x = progress * (8 + index * 4) * direction;
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    beams.forEach((beam, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const x = progress * 24 * direction;
      const y = progress * 10;
      beam.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(-18deg)`;
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateMotion);
      ticking = true;
    }
  }

  updateMotion();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function hydrateContent() {
  setText("hero-name", content.hero.name);
  setText("hero-role", content.hero.role);
  setText("hero-summary", content.hero.summary);
  setLink("resume-link", content.hero.resumeUrl);
  setText("focus-title", content.hero.focusTitle);
  setText("focus-copy", content.hero.focusCopy);
  setThemeGif(content.hero.gifUrl);

  setText("about-copy-1", content.about.paragraphOne);
  setText("about-copy-2", content.about.paragraphTwo);
  setText("contact-copy", content.contact.copy);
  setText("footer-note", content.footerNote);

  renderStats(content.stats);
  renderSkills(content.skills);
  renderSkills(content.certifications || [], "certs-list");
  renderEducation(content.education || []);
  renderProjects(content.projects);
  renderTimeline(content.experience);
  renderContactLinks(content.contact.links);
}

hydrateContent();
initMenu();
initReveal();
initBackdropMotion();
