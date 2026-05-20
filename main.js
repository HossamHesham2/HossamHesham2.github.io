/* ==================== DATA ==================== */
const SKILLS = [
    { name: 'Flutter & Dart', pct: 90, color: 'c1' },
    { name: 'Firebase', pct: 85, color: 'c2' },
    { name: 'RESTful APIs', pct: 82, color: 'c3' },
    { name: 'BLoC / Provider', pct: 85, color: 'c4' },
    { name: 'Clean Architecture (MVVM)', pct: 80, color: 'c1' },
    { name: 'Git & GitHub', pct: 78, color: 'c2' },
    { name: 'Responsive UI/UX', pct: 85, color: 'c3' },
    { name: 'Localization (AR/EN)', pct: 75, color: 'c4' },
];

const TECH = ['Flutter', 'Dart', 'Firebase', 'BLoC', 'Provider', 'MVVM', 'Clean Architecture', 'REST API', 'Git', 'GitHub', 'State Management', 'Localization', 'Agile', 'Android', 'iOS', 'Material Design'];

const EXPERIENCE = [
    {
        title: 'Flutter Intern',
        company: 'TransIT',
        location: 'Egypt',
        date: '2025',
        badge: 'Professional',
        desc: [
            'Worked on the Bus Rapid Transit (BRT) mobile application, focusing on UI implementation, state management, and system integration.',
            'Contributed to a government-related mobile application (confidential project) applying Clean Architecture and collaborative workflows.',
            'Enhanced skills in scalable app structure, teamwork within an Agile environment, and real-world problem-solving.',
        ],
        chips: ['Flutter', 'Clean Architecture', 'BLoC', 'Agile', 'Government App'],
    },
    {
        title: 'Flutter Developer Trainee',
        company: 'Route Academy',
        location: 'Egypt',
        date: '2025',
        badge: 'Training',
        desc: [
            'Completed an intensive Flutter course with hands-on projects covering state management, Firebase integration, and API consumption.',
            'Built multiple production-quality apps including a Quran app, event booking app, news app, movie app, and a full e-commerce app.',
        ],
        chips: ['Flutter', 'Firebase', 'API', 'BLoC', 'Provider', 'E-Commerce'],
    },
];

const PROJECTS = [
    { emoji: '🕌', name: 'Quran App', desc: 'Full-featured Islamic app with all Surahs, radio streaming, Hadith collection, prayer times, and digital tasbeeh counter.', tags: ['Flutter', 'Firebase', 'API', 'Audio'] },
    { emoji: '🎟️', name: 'Event Booking App', desc: 'Firebase-powered event booking platform with real-time authentication, event listings, and live data storage.', tags: ['Flutter', 'Firebase', 'Auth', 'Realtime DB'] },
    { emoji: '🛒', name: 'Mega Mart (E-Commerce)', desc: 'Complete e-commerce app with Firebase auth, product listing, shopping cart, checkout flow, API integration, and BLoC state management.', tags: ['Flutter', 'Firebase', 'BLoC', 'REST API', 'Cart'] },
    { emoji: '📰', name: 'News App', desc: 'News aggregation app featuring categorized articles, detailed content display, and user-friendly navigation with API integration.', tags: ['Flutter', 'REST API', 'UI/UX'] },
    { emoji: '🎬', name: 'Movie App', desc: 'Movie discovery app with detailed content display, search functionality, and smooth navigation experience.', tags: ['Flutter', 'API', 'Clean Arch'] },
    { emoji: '🚌', name: 'BRT Mobile App', desc: 'Bus Rapid Transit application developed at TransIT with UI implementation, state management, and deep system integration.', tags: ['Flutter', 'BLoC', 'System Integration', 'Agile'] },
    { emoji: '📋', name: 'Verta {Task Manager App}', desc: 'Task management application with modern UI implementation, state management, and deep system integration.', tags: ['Flutter', 'BLoC', 'System Integration', 'Agile','Firebase'] },
];

const EDUCATION = [
    { icon: '🎓', degree: "Bachelor's Degree in Information Technology", school: 'University of Technology – October 6, Egypt', meta: 'Currently Enrolled · Focus: Software Development & Mobile Apps' },
];

const LANGS = [
    { flag: '🇸🇦', name: 'Arabic', level: 'Native' },
    { flag: '🇬🇧', name: 'English', level: 'Professional' },
];

const CERTS = [
    { icon: '🏅', name: 'Flutter Development Training', issuer: 'Route Academy', year: '2025' },
    { icon: '🏆', name: 'Flutter Internship Program', issuer: 'TransIT', year: '2025' },
    { icon: '⭐', name: 'Multiple Real-World Flutter Projects', issuer: 'Route Academy', year: '2025' },
    { icon: '🎖️', name: 'BRT App Contribution Recognition', issuer: 'TransIT', year: '2025' },
];

const CONTACTS = [
    { icon: '✉️', cls: 'email', label: 'Email', value: 'hossamhesham413@gmail.com', href: 'mailto:hossamhesham413@gmail.com' },
    { icon: '📱', cls: 'phone', label: 'Phone', value: '0100 158 362', href: 'tel:0100158362' },
    { icon: '📍', cls: 'loc', label: 'Location', value: 'Giza, Egypt', href: '#' },
    { icon: '💼', cls: 'avail', label: 'Status', value: 'Open to Opportunities', href: '#' },
];

const MARQUEE_ITEMS = ['Flutter Developer', 'Route Academy', 'TransIT', 'Firebase Expert', 'Clean Architecture', 'BLoC / Provider', 'Mobile App Developer', 'Giza, Egypt', 'Open to Work'];

/* ==================== LOADER ==================== */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2200);
});

/* ==================== CURSOR ==================== */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a, button, .btn, .proj-card, .exp-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(0,242,254,.8)';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(0,242,254,.4)';
    });
});
document.addEventListener('mousemove', () => {
    dot.style.boxShadow = `
        0 0 12px #00F2FE,
        0 0 24px #00F2FE,
        0 0 40px #4FACFE
    `;
});
/* ==================== PARTICLES ==================== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
const COLORS = [
    '#00F2FE', // Cyan
    '#4FACFE', // Light Blue
    '#0061FF', // Deep Blue
    '#7000FF', // Purple
    '#38BDF8'  // Sky Blue extra
];
let W, H, particles = [];
function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize(); window.addEventListener('resize', resize);
for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * (window.innerWidth || 1200),
        y: Math.random() * (window.innerHeight || 800),
        vx: (Math.random() - .5) * .5,
        vy: (Math.random() - .5) * .5,
        r: Math.random() * 2.5 + 1,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
}
function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + '66'; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dx = p.x - q.x, dy = p.y - q.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                ctx.strokeStyle = p.c + Math.floor((1 - dist / 130) * 80).toString(16).padStart(2, '0');
                ctx.lineWidth = .6; ctx.stroke();
            }
        }
    }
    requestAnimationFrame(drawParticles);
}
drawParticles();

/* ==================== HAMBURGER ==================== */
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

/* ==================== MARQUEE ==================== */
const track = document.getElementById('marqueeTrack');
const all = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
all.forEach(item => {
    const el = document.createElement('div');
    el.className = 'marquee-item';
    el.innerHTML = `<span class="marquee-dot"></span>${item}`;
    track.appendChild(el);
});

/* ==================== SKILLS ==================== */
const sbContainer = document.getElementById('skillBars');
SKILLS.forEach(s => {
    sbContainer.innerHTML += `
  <div class="skill-bar-wrap reveal from-left">
    <div class="skill-bar-header">
      <span class="skill-bar-name">${s.name}</span>
      <span class="skill-bar-pct">${s.pct}%</span>
    </div>
    <div class="skill-bar-bg">
      <div class="skill-bar-fill ${s.color}" data-pct="${s.pct}"></div>
    </div>
  </div>`;
});
const tcContainer = document.getElementById('techChips');
TECH.forEach(t => {
    tcContainer.innerHTML += `<span class="tech-chip">${t}</span>`;
});

/* ==================== EXPERIENCE ==================== */
const expContainer = document.getElementById('experienceTimeline');
EXPERIENCE.forEach((e, i) => {
    expContainer.innerHTML += `
  <div class="timeline-item reveal ${i % 2 === 0 ? 'from-right' : 'from-left'}">
    <div class="timeline-dot"></div>
    <div class="exp-card">
      <div class="exp-header">
        <div>
          <div class="exp-title">${e.title}</div>
          <div class="exp-company">${e.company}</div>
        </div>
        <span class="exp-badge">${e.badge}</span>
      </div>
      <div class="exp-meta">
        <span>📅 ${e.date}</span>
        <span>📍 ${e.location}</span>
      </div>
      <div class="exp-desc">${e.desc.map(d => `<p style="margin-bottom:.5rem">${d}</p>`).join('')}</div>
      <div class="exp-chips">${e.chips.map(c => `<span class="exp-chip">${c}</span>`).join('')}</div>
    </div>
  </div>`;
});

/* ==================== PROJECTS ==================== */
const pGrid = document.getElementById('projectsGrid');
PROJECTS.forEach((p, i) => {
    pGrid.innerHTML += `
  <div class="proj-card reveal from-bottom" style="transition-delay:${i * 0.08}s">
    <div class="proj-emoji">${p.emoji}</div>
    <div class="proj-name">${p.name}</div>
    <div class="proj-desc">${p.desc}</div>
    <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
  </div>`;
});

/* ==================== EDUCATION ==================== */
const eGrid = document.getElementById('eduGrid');
EDUCATION.forEach(e => {
    eGrid.innerHTML += `
  <div class="edu-card reveal from-left">
    <div class="edu-icon">${e.icon}</div>
    <div class="edu-degree">${e.degree}</div>
    <div class="edu-school">${e.school}</div>
    <div class="edu-meta">${e.meta}</div>
  </div>`;
});
const lBadges = document.getElementById('langBadges');
LANGS.forEach(l => {
    lBadges.innerHTML += `
  <div class="lang-badge">
    <span class="lang-flag">${l.flag}</span>
    <div>
      <div>${l.name}</div>
      <div class="lang-level">${l.level}</div>
    </div>
  </div>`;
});

/* ==================== CERTS ==================== */
const cGrid = document.getElementById('certsGrid');
CERTS.forEach((c, i) => {
    cGrid.innerHTML += `
  <div class="cert-card reveal ${i % 2 === 0 ? 'from-left' : 'from-right'}">
    <div class="cert-icon">${c.icon}</div>
    <div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-year">${c.year}</div>
    </div>
  </div>`;
});

/* ==================== CONTACT ==================== */
const cCards = document.getElementById('contactCards');
CONTACTS.forEach((c, i) => {
    cCards.innerHTML += `
  <a class="contact-card reveal from-left" href="${c.href}" style="transition-delay:${i * .1}s">
    <div class="contact-icon ${c.cls}">${c.icon}</div>
    <div>
      <div class="contact-label">${c.label}</div>
      <div class="contact-value">${c.value}</div>
    </div>
  </a>`;
});

/* ==================== INTERSECTION OBSERVER ==================== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Skill bars
            const fill = entry.target.querySelector('.skill-bar-fill');
            if (fill) {
                fill.style.width = fill.dataset.pct + '%';
                fill.classList.add('animated');
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

// Observe all skill bars directly too
document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const wrapper = bar.closest('.skill-bar-wrap');
    // handled via parent reveal
});

setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    // Also observe skill bar fills independently
    document.querySelectorAll('.skill-bar-wrap').forEach(wrap => {
        const barObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const fill = e.target.querySelector('.skill-bar-fill');
                    if (fill && !fill.style.width) {
                        fill.style.width = fill.dataset.pct + '%';
                        fill.classList.add('animated');
                    }
                    barObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.4 });
        barObs.observe(wrap);
    });
}, 500);
