/* ============================================================
   Addisalem Mengistu — IETP Personal Portfolio  |  app.js
   ============================================================ */
'use strict';

/* ── Navbar scroll + active link ─────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  highlightNav();
});
function highlightNav() {
  let cur = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 110) cur = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur)
  );
}

/* ── Mobile menu ─────────────────────────────────────────────── */
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ── Dark / Light theme ──────────────────────────────────────── */
const themeBtn = document.getElementById('themeBtn');
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeBtn.textContent = '🌙';
}
themeBtn.addEventListener('click', () => {
  const light = document.body.classList.toggle('light');
  themeBtn.textContent = light ? '🌙' : '☀';
  localStorage.setItem('theme', light ? 'light' : 'dark');
});

/* ── Scroll-reveal ───────────────────────────────────────────── */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* ── Skill bars animate on scroll ───────────────────────────── */
const sbo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sb-fill').forEach(f => { f.style.width = f.dataset.w + '%'; });
      sbo.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const sbars = document.getElementById('sbars');
if (sbars) sbo.observe(sbars);

/* ── Gallery lightbox ────────────────────────────────────────── */
function lb(src, caption) {
  document.getElementById('lbImg').src = src;
  document.getElementById('lbCap').textContent = caption;
  document.getElementById('lbBg').classList.add('open');
}
function closeLb() { document.getElementById('lbBg').classList.remove('open'); }
document.getElementById('lbBg').addEventListener('click', e => {
  if (e.target === document.getElementById('lbBg')) closeLb();
});

/* ── Contact form ────────────────────────────────────────────── */
function submitForm(e) {
  e.preventDefault();
  const s = document.getElementById('fsuccess');
  s.style.display = 'block';
  e.target.reset();
  setTimeout(() => { s.style.display = 'none'; }, 5000);
}

/* ══════════════════════════════════════════════════════════════
   MY DUAL ROLE — Team Coordinator + Software Engineer
   ══════════════════════════════════════════════════════════════ */

/*
  Two categories of responsibilities:
  1. Team Coordinator  — organizing, communicating, tracking progress
  2. Software Engineer — technical contributions to the solar dryer
*/

const rolesData = [

  /* ── COORDINATOR RESPONSIBILITIES ── */
  {
    cat: 'coord',
    icon: '📅',
    title: 'Organizing Team Meetings',
    desc: 'As Team Coordinator, I schedule and run our IETP meetings. I set the agenda, make sure everyone has a chance to speak, and keep the discussion on track so we use our time well.',
    tech: ['Meeting Facilitation', 'Agenda Setting', 'Time Management'],
    status: 'ongoing',
    note: 'Doing this every week. I keep a record of what was discussed and decided in each meeting.'
  },
  {
    cat: 'coord',
    icon: '🔗',
    title: 'Coordinating Between Disciplines',
    desc: 'Six disciplines means six different ways of thinking. My job is to make sure Mechanical, Electrical, Civil, Environmental, and Electromechanical team members are aligned and aware of how their work connects to each other.',
    tech: ['Communication', 'Task Tracking', 'Team Alignment'],
    status: 'ongoing',
    note: 'This is one of the hardest parts — everyone has a different schedule and different priorities.'
  },
  {
    cat: 'coord',
    icon: '📊',
    title: 'Tracking Team Progress',
    desc: 'I keep track of what each team member is supposed to do and whether it is getting done. If someone is blocked or falling behind, I raise it in the next meeting and help find a solution.',
    tech: ['Progress Monitoring', 'Reporting', 'Problem-solving'],
    status: 'ongoing',
    note: 'Currently tracking informally. Plan to use a shared document or simple task list.'
  },
  {
    cat: 'coord',
    icon: '📄',
    title: 'Managing Project Documentation',
    desc: 'Coordinating the collection and organization of all team reports, meeting notes, and deliverables. Making sure the group report is consistent and submitted on time.',
    tech: ['Document Management', 'Deadline Tracking', 'Report Compilation'],
    status: 'ongoing',
    note: 'Started a shared folder. Each member will contribute their section to the final report.'
  },

  /* ── SOFTWARE ENGINEERING RESPONSIBILITIES ── */
  {
    cat: 'swe',
    icon: '📋',
    title: 'Software Requirements Analysis',
    desc: 'Defining what the software component needs to do: read sensor data, show readings on a display, and control the exhaust fan automatically. Writing this as a clear requirements document so the Electrical team knows what I need from the hardware.',
    tech: ['Requirements Engineering', 'SRS Document', 'Technical Writing'],
    status: 'ongoing',
    note: 'Working on the first draft. Will review with the team once the hardware design is firmer.'
  },
  {
    cat: 'swe',
    icon: '🌡️',
    title: 'Sensor Monitoring Code',
    desc: 'Write the microcontroller code to read temperature and humidity from DHT-type sensors at regular intervals. This is my core technical contribution to the solar dryer system.',
    tech: ['C++ / Arduino', 'DHT11 / DHT22', 'Serial Communication'],
    status: 'planned',
    note: 'Planned. Waiting for the Electrical team to confirm the sensor type and wiring.'
  },
  {
    cat: 'swe',
    icon: '🖥️',
    title: 'LCD Display Interface',
    desc: 'Program an LCD screen to show live temperature and humidity inside the drying chamber. The person operating the dryer should be able to see what is happening at a glance.',
    tech: ['Arduino IDE', 'LCD I2C Library', 'Display Logic'],
    status: 'planned',
    note: 'Planned. LCD model to be confirmed. I will code it once the component is selected.'
  },
  {
    cat: 'swe',
    icon: '💨',
    title: 'Automatic Fan Control',
    desc: 'Write logic that turns the exhaust fan ON when temperature exceeds a set threshold, and OFF when it drops back down. This keeps the drying environment stable without someone watching it constantly.',
    tech: ['C++', 'Threshold Logic', 'Relay / PWM'],
    status: 'planned',
    note: 'Planned. Fan specs to be confirmed by the Electromechanical team member.'
  }
];

function statusBadge(s) {
  if (s === 'planned')   return '<span class="badge-plan">🕐 Planned</span>';
  if (s === 'ongoing')   return '<span class="badge-on">🔄 In Progress</span>';
  if (s === 'completed') return '<span class="badge-done">✅ Done</span>';
  return '';
}

function renderRoles() {
  const grid = document.getElementById('roleCards');
  if (!grid) return;

  const coordRoles = rolesData.filter(r => r.cat === 'coord');
  const sweRoles   = rolesData.filter(r => r.cat === 'swe');

  const makeCards = arr => arr.map(r => `
    <div class="role-card reveal">
      <div class="role-card-top">
        <span class="role-card-ico">${r.icon}</span>
        ${statusBadge(r.status)}
      </div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <div class="role-techs">${r.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="role-note">📎 ${r.note}</div>
    </div>
  `).join('');

  grid.innerHTML = `
    <div class="role-cat-label">
      <span class="role-cat-icon">🎯</span>
      <div>
        <strong>As Team Coordinator</strong>
        <span>Organizing people, managing communication, keeping the project on track</span>
      </div>
    </div>
    <div class="role-cards-grid">${makeCards(coordRoles)}</div>

    <div class="role-cat-label" style="margin-top:40px">
      <span class="role-cat-icon">💻</span>
      <div>
        <strong>As Software Engineer</strong>
        <span>Technical contributions — sensor monitoring, display, fan control, documentation</span>
      </div>
    </div>
    <div class="role-cards-grid">${makeCards(sweRoles)}</div>
  `;

  grid.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   WEEKLY JOURNAL  (localStorage-backed, fully editable)
   ══════════════════════════════════════════════════════════════ */
const JKEY = 'am_ietp_journal_v2';

/* Sample entries — honest reflection of the current early stage */
const sampleEntries = [
  {
    id: 's1',
    week: 1,
    date: 'Nov 2026',
    title: 'Team Formation & First Meeting',
    coordAction: 'Led the first team meeting as Team Coordinator. Made sure everyone introduced themselves and understood what IETP is about. Helped the group understand that each discipline needs a clear role.',
    sweAction: 'Listened carefully to what the other disciplines described so I could start thinking about where software fits. Took detailed notes.',
    learn: 'Learned what IETP expects from a coordinator — it is more than just attending meetings, I have to actively keep the team organized and moving forward.',
    chall: 'It was difficult to keep six people focused in one conversation. Everyone wanted to talk about their own discipline.',
    next: 'Prepare a list of possible project ideas to bring to the next meeting. Ask each member to think about what kind of project they can contribute to.'
  },
  {
    id: 's2',
    week: 2,
    date: 'Nov 2026',
    title: 'Brainstorming Session — Choosing a Topic',
    coordAction: 'Facilitated a structured brainstorming session. Each team member proposed one or two ideas. I listed them all, then guided the group to evaluate each one by feasibility, budget, and how well all six disciplines can contribute.',
    sweAction: 'Proposed that any final topic should include a sensor or monitoring component — something I can build software for. The solar dryer idea had that, which is partly why I supported it.',
    learn: 'Good coordination during brainstorming means making sure quieter team members also get to speak, not just the loudest ones.',
    chall: 'Some team members had very different opinions on which topic to choose. I had to stay neutral as coordinator while also advocating for something that includes software.',
    next: 'Confirm the topic decision in the next meeting and start dividing responsibilities by discipline.'
  },
  {
    id: 's3',
    week: 3,
    date: 'Nov 2026',
    title: 'Topic Confirmed — Roles Assigned',
    coordAction: 'Officially confirmed the solar dryer as our IETP project. Created a first draft of responsibilities for each discipline. Shared it with the team for feedback. Set up a shared folder for documents.',
    sweAction: 'My software role was agreed: sensor monitoring, display interface, fan control logic, and documentation. I also confirmed that I will write the software section of the group report.',
    learn: 'Assigning roles early helps avoid confusion later. I learned to be specific — "software" is too vague; better to say exactly which parts I own.',
    chall: 'Some roles overlapped between disciplines (e.g. electrical and electromechanical both wanted to handle the fan). Had to mediate and clarify boundaries.',
    next: 'Start writing the software requirements. Research DHT11 vs DHT22 sensors to recommend one to the Electrical team.'
  }
];

function loadEntries() {
  try {
    const raw = localStorage.getItem(JKEY);
    return raw ? JSON.parse(raw) : [...sampleEntries];
  } catch { return [...sampleEntries]; }
}

function saveEntries(arr) {
  localStorage.setItem(JKEY, JSON.stringify(arr));
}

function renderJournal() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  const entries = loadEntries();

  if (!entries.length) {
    tl.innerHTML = `
      <div class="empty-journal">
        <div class="ei">📓</div>
        <p>No entries yet.</p>
        <p style="margin-top:8px;font-size:.85rem">
          Click <strong>"+ Add This Week's Update"</strong> to start your journal.
        </p>
      </div>`;
    return;
  }

  tl.innerHTML = entries.map(e => `
    <div class="tl-entry">
      <div class="tl-dot">W${e.week}</div>
      <div class="tl-body">
        <div class="tl-meta">
          <span class="tl-week">Week ${e.week}</span>
          <span class="tl-date">${e.date}</span>
        </div>
        <h3>${e.title}</h3>
        ${e.coordAction ? `
          <div class="tl-row">
            <div class="tl-row-label">🎯 My Coordinator Action</div>
            <p>${e.coordAction}</p>
          </div>` : ''}
        ${e.sweAction ? `
          <div class="tl-row">
            <div class="tl-row-label">💻 My SWE Contribution</div>
            <p>${e.sweAction}</p>
          </div>` : ''}
        ${e.learn ? `
          <div class="tl-row">
            <div class="tl-row-label">📚 What I Learned</div>
            <p>${e.learn}</p>
          </div>` : ''}
        ${e.chall ? `
          <div class="tl-row">
            <div class="tl-row-label">⚠️ Challenges</div>
            <p>${e.chall}</p>
          </div>` : ''}
        ${e.next ? `
          <div class="tl-row">
            <div class="tl-row-label">➡️ Next Steps</div>
            <p>${e.next}</p>
          </div>` : ''}
        <div class="tl-actions">
          <button class="tl-btn" onclick="editEntry('${e.id}')">✏ Edit</button>
          <button class="tl-btn del" onclick="deleteEntry('${e.id}')">🗑 Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Journal modal open/close ────────────────────────────────── */
document.getElementById('addEntryBtn').addEventListener('click', () => {
  document.getElementById('eId').value = '';
  document.getElementById('mTitle').textContent = "Add This Week's Update";
  document.getElementById('jForm').reset();
  document.getElementById('jModal').classList.add('open');
});

function closeModal() {
  document.getElementById('jModal').classList.remove('open');
}
document.getElementById('jModal').addEventListener('click', e => {
  if (e.target === document.getElementById('jModal')) closeModal();
});

/* ── Edit ────────────────────────────────────────────────────── */
function editEntry(id) {
  const e = loadEntries().find(x => x.id === id);
  if (!e) return;
  document.getElementById('eId').value          = id;
  document.getElementById('mTitle').textContent = `Edit — Week ${e.week}`;
  document.getElementById('fWeek').value        = e.week;
  document.getElementById('fDate').value        = e.date;
  document.getElementById('fTitle').value       = e.title;
  document.getElementById('fCoord').value       = e.coordAction || '';
  document.getElementById('fSwe').value         = e.sweAction   || '';
  document.getElementById('fLearn').value       = e.learn       || '';
  document.getElementById('fChall').value       = e.chall       || '';
  document.getElementById('fNext').value        = e.next        || '';
  document.getElementById('jModal').classList.add('open');
}

/* ── Delete ──────────────────────────────────────────────────── */
function deleteEntry(id) {
  if (!confirm('Delete this entry?')) return;
  saveEntries(loadEntries().filter(x => x.id !== id));
  renderJournal();
}

/* ── Save ────────────────────────────────────────────────────── */
function saveEntry(e) {
  e.preventDefault();
  const entries = loadEntries();
  const id      = document.getElementById('eId').value;
  const entry   = {
    id:          id || 'e' + Date.now(),
    week:        parseInt(document.getElementById('fWeek').value),
    date:        document.getElementById('fDate').value,
    title:       document.getElementById('fTitle').value,
    coordAction: document.getElementById('fCoord').value,
    sweAction:   document.getElementById('fSwe').value,
    learn:       document.getElementById('fLearn').value,
    chall:       document.getElementById('fChall').value,
    next:        document.getElementById('fNext').value,
  };
  const idx = entries.findIndex(x => x.id === id);
  if (idx >= 0) entries[idx] = entry; else entries.push(entry);
  entries.sort((a, b) => a.week - b.week);
  saveEntries(entries);
  closeModal();
  renderJournal();
}

/* ── Init ────────────────────────────────────────────────────── */
renderRoles();
renderJournal();
