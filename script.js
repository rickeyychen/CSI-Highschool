const BLOCKS = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J'];

const COURSE_GROUPS = [
  { subject: 'Global History & History', path: true, courses: [
      { name: 'Global History (9th Grade)', prereq: 'None.' },
      { name: 'Global History (10th Grade)', prereq: 'None. This course concludes with the Global History Regents exam.' },
      { name: 'US History', prereq: 'Completed Global History and passed the Regents exam.' },
      { name: 'AP US History', prereq: 'Completed and excelled in Global History, and passed the Regents exam.' },
      { name: 'AP Comparative Government and Politics', prereq: 'Completed US History or AP US History.' }
  ]},
  { subject: 'Science', path: true, courses: [
      { name: 'Earth Science', prereq: 'None.' },
      { name: 'Biology', prereq: 'Passed Earth Science.' },
      { name: 'Chemistry', prereq: 'Passed Biology.' },
      { name: 'Physics', prereq: 'Passed Chemistry.', note: 'Meets during Block 0.' },
      { name: 'AP Biology', prereq: 'Excelled in Biology.' }
  ]},
  { subject: 'English', path: true, courses: [
      { name: 'English (9th Grade)', prereq: 'None.' },
      { name: 'English (10th Grade)', prereq: 'Passed 9th Grade English.' },
      { name: 'AP Seminar', prereq: 'Excelled in 9th Grade English.', note: 'Open to 10th graders only.' },
      { name: 'AP Research', prereq: 'Completed 10th Grade English or AP Seminar.' },
      { name: 'English (11th Grade)', prereq: 'Passed 10th Grade English.' },
      { name: 'AP English Language and Composition', prereq: 'Excelled in 10th Grade English or AP Seminar.' },
      { name: 'Honors English (12th Grade)', prereq: 'Passed 11th Grade English.' },
      { name: 'AP English Literature', prereq: 'Excelled in 11th Grade English or AP English Language and Composition.' }
  ]},
  { subject: 'Math', path: true, courses: [
      { name: 'Algebra I', prereq: 'None.' },
      { name: 'Geometry', prereq: 'Passed Algebra I.' },
      { name: 'Algebra II', prereq: 'Passed Geometry.' },
      { name: 'Honors Pre-Calculus', prereq: 'Excelled in Algebra II.' },
      { name: 'AP Calculus AB', prereq: 'Excelled in Pre-Calculus.' }
  ]},
  { subject: 'Block J Electives (APEX)', path: false, courses: [
      { name: 'AP Statistics', prereq: 'Passed Algebra II.', note: 'Block J, APEX class.' },
      { name: 'AP Microeconomics', prereq: 'Passed Algebra II.', note: 'Block J, APEX class.' },
      { name: 'AP Macroeconomics', prereq: 'Passed Pre-Calculus.', note: 'Block J, APEX class.' },
      { name: 'AP Spanish', prereq: 'Completed three years of Spanish and passed the Spanish LOTE exam.', note: 'Block J, APEX class.' },
      { name: 'AP US Government', prereq: 'Completed 9th and 10th grade Global History.', note: 'Block J, APEX class.' },
      { name: 'AP Psychology', prereq: 'Completed 9th Grade Global History.', note: 'Block J, APEX class.' }
  ]}
];

const SPORTS = [
  { name: 'Baseball', team: 'Boys Varsity', season: 'Spring', type: 'Open tryouts' },
  { name: 'Basketball', team: 'Boys Junior Varsity', season: 'Winter', type: 'Open tryouts', note: 'Open to 9th and 10th graders only.' },
  { name: 'Basketball', team: 'Boys Varsity', season: 'Winter', type: 'Open tryouts' },
  { name: 'Basketball', team: 'Girls Varsity', season: 'Winter', type: 'Open tryouts' },
  { name: 'Cross Country', team: 'Boys', season: 'Fall', type: 'No-cut tryouts' },
  { name: 'Cross Country', team: 'Girls', season: 'Fall', type: 'No-cut tryouts' },
  { name: 'Fencing', team: 'Boys Varsity', season: 'Fall', type: 'No-cut tryouts' },
  { name: 'Fencing', team: 'Girls Varsity', season: 'Fall', type: 'No-cut tryouts' },
  { name: 'Flag Football', team: 'Girls Varsity', season: 'Spring', type: 'Open tryouts' },
  { name: 'Indoor Track', team: 'Boys', season: 'Winter', type: 'No-cut tryouts' },
  { name: 'Indoor Track', team: 'Girls', season: 'Winter', type: 'No-cut tryouts' },
  { name: 'Outdoor Track', team: 'Boys', season: 'Winter', type: 'No-cut tryouts' },
  { name: 'Outdoor Track', team: 'Girls', season: 'Winter', type: 'No-cut tryouts' },
  { name: 'Soccer', team: 'Boys Varsity', season: 'Fall', type: 'Open tryouts' },
  { name: 'Soccer', team: 'Girls Varsity', season: 'Fall', type: 'Open tryouts' },
  { name: 'Softball', team: 'Girls Varsity', season: 'Spring', type: 'No-cut tryouts' },
  { name: 'Tennis', team: 'Boys Varsity', season: 'Spring', type: 'No-cut tryouts' },
  { name: 'Tennis', team: 'Girls Varsity', season: 'Spring', type: 'No-cut tryouts' },
  { name: 'Volleyball', team: 'Girls Varsity', season: 'Fall', type: 'Open tryouts' },
  { name: 'Wrestling', team: 'Boys Varsity', season: 'Winter', type: 'No-cut tryouts' }
];

const CLUBS = [
  { name: 'Animal and Environmental Justice Club', meets: 'Meets once a month.' },
  { name: 'Arts and Crafts Club', meets: 'Meets every Monday.' },
  { name: 'Chess Club', meets: 'Meets Thursdays, twice a month.' },
  { name: 'Chinese Culture Club', meets: 'Meets once a month.' },
  { name: 'Debate Team', meets: 'Meets Wednesdays and Thursdays after school, 3:00-4:00 p.m.' },
  { name: 'Dungeons and Dragons Club', meets: 'Meets Thursdays, twice a month.' },
  { name: 'Jewish Student Alliance', meets: 'Meets once a month.' },
  { name: 'Love Is Our Niche (LION Club)', meets: 'Meeting day and time will be announced.' },
  { name: "My Brother's Keeper (MBK)", meets: 'Meets once a month.' },
  { name: "My Sister's Keeper (MSK)", meets: 'Meets once a month.' },
  { name: 'Muslim Student Association (MSA)', meets: 'Meets Fridays.' },
  { name: 'Gardening Club', meets: 'Meeting day and time will be announced.' },
  { name: 'Business and Finance Club', meets: 'Meets every Thursday.' },
  { name: 'Medical Club', meets: 'Meets Thursdays, twice a month.' },
  { name: 'Math Club', meets: 'Meeting details will be announced during club period.' },
  { name: 'Volunteer Club', meets: 'Meets once a month, on Mondays.' },
  { name: 'Film and Media Studies Club', meets: 'Meets Wednesdays and Fridays.' }
];

let scheduleState = {};
let courseSearchQuery = '';

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, function (ch) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
  });
}

const THEME_KEY = 'csihs-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
}

function goToMenu() {
  const splash = document.getElementById('screen-splash');
  splash.classList.add('is-leaving');
  setTimeout(function () {
    splash.classList.remove('is-leaving');
    showScreen('menu');
  }, 480);
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(function (s) { s.classList.remove('screen--active'); });
  const target = document.getElementById('screen-' + name);
  if (target) target.classList.add('screen--active');
  const nav = document.getElementById('siteNav');
  const footer = document.getElementById('siteFooter');
  const isSplash = name === 'splash';
  nav.hidden = isSplash;
  footer.hidden = isSplash;
  document.querySelectorAll('.nav-link').forEach(function (l) {
    l.classList.toggle('is-active', l.dataset.target === name);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function courseCardHTML(course, id, showNode) {
  const noteHTML = course.note ? '<p class="course__note">' + course.note + '</p>' : '';
  const options = BLOCKS.map(function (b) { return '<option value="' + b + '">Block ' + b + '</option>'; }).join('');
  return (
    '<div class="course">' +
      (showNode ? '<span class="course__node" aria-hidden="true"></span>' : '') +
      '<button class="course__header" data-course-id="' + id + '" aria-expanded="false">' +
        '<span class="course__name">' + course.name + '</span>' +
        '<svg class="course__chevron" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>' +
      '<div class="course__body" id="body-' + id + '">' +
        '<p class="course__prereq"><strong>Prerequisites:</strong> ' + course.prereq + '</p>' +
        noteHTML +
        '<div class="course__add">' +
          '<select class="course__block-select" id="select-' + id + '" aria-label="Choose a block for ' + course.name + '">' +
            '<option value="">Choose a block...</option>' + options +
          '</select>' +
          '<button type="button" class="btn-add" data-add-id="' + id + '" data-course-name="' + course.name + '">Add to Schedule</button>' +
          '<span class="course__confirm" id="confirm-' + id + '" aria-live="polite"></span>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function renderCourses() {
  const container = document.getElementById('coursesContainer');
  if (!container) return;
  const query = courseSearchQuery.trim().toLowerCase();
  const groupsHTML = COURSE_GROUPS.map(function (group) {
    const matches = query
      ? group.courses.filter(function (c) { return c.name.toLowerCase().indexOf(query) !== -1; })
      : group.courses;
    if (!matches.length) return '';
    const cards = matches.map(function (c) {
      return courseCardHTML(c, slugify(group.subject) + '-' + slugify(c.name), group.path);
    }).join('');
    return (
      '<div class="subject-group">' +
        '<h2 class="subject-group__title">' + group.subject + '</h2>' +
        '<div class="' + (group.path ? 'course-path' : 'course-grid') + '">' + cards + '</div>' +
      '</div>'
    );
  }).join('');
  container.innerHTML = groupsHTML || (
    '<p class="search-empty">No classes match your search.</p>'
  );
  attachCourseEvents();
}

function attachCourseEvents() {
  document.querySelectorAll('.course__header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const id = btn.dataset.courseId;
      const body = document.getElementById('body-' + id);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      body.classList.toggle('course__body--open', !expanded);
    });
  });
  document.querySelectorAll('.btn-add').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const id = btn.dataset.addId;
      const name = btn.dataset.courseName;
      const select = document.getElementById('select-' + id);
      const confirmEl = document.getElementById('confirm-' + id);
      if (!select.value) {
        confirmEl.textContent = 'Choose a block first.';
        confirmEl.classList.add('course__confirm--error');
        return;
      }
      scheduleState[select.value] = name;
      confirmEl.classList.remove('course__confirm--error');
      confirmEl.textContent = 'Added to Block ' + select.value + '.';
      renderSchedule();
      setTimeout(function () { confirmEl.textContent = ''; }, 3000);
    });
  });
}

function renderSchedule() {
  const grid = document.getElementById('scheduleGrid');
  if (!grid) return;
  grid.innerHTML = BLOCKS.map(function (block) {
    const value = scheduleState[block] || '';
    return (
      '<div class="schedule-row">' +
        '<div class="schedule-row__block">Block ' + block + '</div>' +
        '<input type="text" class="schedule-row__input" data-block="' + block + '" ' +
          'placeholder="Type a class, or add one from Class Availability" value="' + value.replace(/"/g, '&quot;') + '">' +
      '</div>'
    );
  }).join('');
  grid.querySelectorAll('.schedule-row__input').forEach(function (input) {
    input.addEventListener('input', function (e) {
      scheduleState[e.target.dataset.block] = e.target.value;
    });
  });
}

function renderSports(filter) {
  const container = document.getElementById('sportsContainer');
  if (!container) return;
  const season = filter || 'All';
  const list = season === 'All' ? SPORTS : SPORTS.filter(function (s) { return s.season === season; });
  container.innerHTML = list.map(function (s) {
    const typeClass = s.type.indexOf('Open') === 0 ? 'badge--open' : 'badge--nocut';
    const seasonClass = 'badge--' + s.season.toLowerCase();
    const noteHTML = s.note ? '<p class="activity-card__note">' + s.note + '</p>' : '';
    return (
      '<div class="activity-card">' +
        '<div class="activity-card__top">' +
          '<h3>' + s.name + '</h3>' +
          '<span class="badge ' + seasonClass + '">' + s.season + '</span>' +
        '</div>' +
        '<p class="activity-card__team">' + s.team + '</p>' +
        '<span class="badge ' + typeClass + '">' + s.type + '</span>' +
        noteHTML +
      '</div>'
    );
  }).join('');
}

function renderClubs() {
  const container = document.getElementById('clubsContainer');
  if (!container) return;
  container.innerHTML = CLUBS.map(function (c) {
    return (
      '<div class="activity-card">' +
        '<h3>' + c.name + '</h3>' +
        '<p class="activity-card__meets">' + c.meets + '</p>' +
      '</div>'
    );
  }).join('');
}

function showExtraTab(tab) {
  document.getElementById('clubsPanel').classList.toggle('is-active', tab === 'clubs');
  document.getElementById('sportsPanel').classList.toggle('is-active', tab === 'sports');
  document.querySelectorAll('.tab-btn').forEach(function (b) {
    b.classList.toggle('is-active', b.dataset.tab === tab);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderCourses();
  renderSchedule();
  renderClubs();
  renderSports('All');

  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  const continueBtn = document.getElementById('continueBtn');
  if (continueBtn) continueBtn.addEventListener('click', goToMenu);

  document.querySelectorAll('[data-target]').forEach(function (el) {
    el.addEventListener('click', function () { showScreen(el.dataset.target); });
  });

  const courseSearch = document.getElementById('courseSearch');
  const courseSearchClear = document.getElementById('courseSearchClear');
  if (courseSearch) {
    courseSearch.addEventListener('input', function (e) {
      courseSearchQuery = e.target.value;
      courseSearchClear.hidden = courseSearchQuery.length === 0;
      renderCourses();
    });
  }
  if (courseSearchClear) {
    courseSearchClear.addEventListener('click', function () {
      courseSearchQuery = '';
      courseSearch.value = '';
      courseSearchClear.hidden = true;
      renderCourses();
      courseSearch.focus();
    });
  }

  const resetBtn = document.getElementById('resetScheduleBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (window.confirm('Clear all classes from your schedule preview?')) {
        scheduleState = {};
        renderSchedule();
      }
    });
  }

  document.querySelectorAll('.season-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.season-filter-btn').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      renderSports(btn.dataset.season);
    });
  });

  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { showExtraTab(btn.dataset.tab); });
  });
});
