// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

// App State
const state = {
  currentTab: "dashboard",
  theme: localStorage.getItem("theme") || "light",
  calendarFilter: "all",
  calendarSearch: "",
  calendarYear: "2026",
  mobileSidebarActive: false
};

// Initialize Application
function initApp() {
  // Apply initial theme
  document.documentElement.setAttribute("data-theme", state.theme);
  updateThemeUI();

  // Setup Dynamic Greetings & Time
  setupDateTime();

  // Load Dashboard Data
  loadDashboard();

  // Load Calendar
  renderCalendar();

  // Setup Event Listeners
  setupEventListeners();
}

// Setup Live Date/Time and Greetings
function setupDateTime() {
  const dateBadge = document.getElementById("live-date");
  const greetingEl = document.getElementById("dynamic-greeting");
  
  if (!dateBadge || !greetingEl) return;

  const updateTime = () => {
    const now = new Date();
    
    // Malaysian Locale Date Format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('ms-MY', options);
    
    // Time Format
    const timeStr = now.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    
    dateBadge.innerHTML = `<span class="time-text">${dateStr} | ${timeStr}</span>`;

    // Dynamic Greeting in Malay
    const hour = now.getHours();
    let greeting = "Selamat Sejahtera";
    if (hour >= 5 && hour < 12) {
      greeting = "Selamat Pagi";
    } else if (hour >= 12 && hour < 14) {
      greeting = "Selamat Tengah Hari";
    } else if (hour >= 14 && hour < 19) {
      greeting = "Selamat Petang";
    } else {
      greeting = "Selamat Malam";
    }
    greetingEl.innerText = `${greeting}, Cikgu!`;
  };

  updateTime();
  setInterval(updateTime, 1000);
}

// Load Dashboard Components
function loadDashboard() {
  // Set School Slogan & Principal Message
  document.getElementById("dash-school-name").innerText = schoolData.info.name;
  document.getElementById("dash-school-slogan").innerText = schoolData.info.slogan;



  // Render Announcements
  const announcementsList = document.getElementById("dash-announcements");
  if (announcementsList) {
    announcementsList.innerHTML = schoolData.announcements.map(ann => `
      <div class="announcement-item ${ann.urgent ? 'urgent' : ''}">
        <div class="announcement-meta">
          <span class="announcement-tag ${ann.category.toLowerCase()}">${ann.category}</span>
          <span class="announcement-date">${formatDate(ann.date)}</span>
        </div>
        <h5>${ann.title}</h5>
        <p>${ann.content}</p>
      </div>
    `).join("");
  }
}


function renderCalendar() {
  const container = document.getElementById("calendar-events-container");
  if (!container) return;

  // Update calendar header title
  const calTitleEl = document.getElementById("calendar-title");
  if (calTitleEl) {
    calTitleEl.innerText = `Takwim Persekolahan & Peristiwa ${state.calendarYear}`;
  }

  const filteredEvents = schoolData.calendar.filter(evt => {
    // Search match
    const query = state.calendarSearch.toLowerCase();
    const matchesSearch = 
      evt.title.toLowerCase().includes(query) ||
      evt.venue.toLowerCase().includes(query) ||
      evt.ic.toLowerCase().includes(query);

    // Category filter
    const matchesCat = 
      state.calendarFilter === "all" ||
      evt.category.toLowerCase() === state.calendarFilter.toLowerCase();

    // Year filter
    const matchesYear = evt.year === state.calendarYear;

    return matchesSearch && matchesCat && matchesYear;
  });

  if (filteredEvents.length === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="padding: 40px; text-align: center; color: var(--text-muted);">
        <i data-lucide="calendar-x" style="width: 48px; height: 48px; margin: 0 auto 16px auto; display: block; stroke: var(--text-muted);"></i>
        <p style="font-weight: 600;">Tiada peristiwa dijadualkan.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Cuba laraskan kata kunci carian atau kategori penapisan.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Group events by date chronologically
  const sortedEvents = filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  container.innerHTML = sortedEvents.map(evt => {
    const day = evt.dayDisplay || new Date(evt.date).getDate();
    const monthYearDisplay = evt.monthDisplay ? `${evt.monthDisplay} ${evt.year}` : new Date(evt.date).toLocaleDateString('ms-MY', { month: 'short', year: 'numeric' });

    return `
      <div class="glass-panel calendar-event-row">
        <div class="event-date-block">
          <span class="event-day">${day}</span>
          <span class="event-month-year">${monthYearDisplay}</span>
        </div>
        <div class="event-details">
          <div class="event-title">${evt.title}</div>
          <div class="event-meta-info">
            <div class="event-meta-item">
              <i data-lucide="clock"></i> ${evt.time}
            </div>
            <div class="event-meta-item">
              <i data-lucide="map-pin"></i> ${evt.venue}
            </div>
            <div class="event-meta-item">
              <i data-lucide="user"></i> PIC: ${evt.ic}
            </div>
          </div>
        </div>
        <div class="event-badge-col">
          <span class="event-cat-badge ${evt.category.toLowerCase()}">${evt.category}</span>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}


function showToast(message) {
  const existingToast = document.querySelector(".toast-notification");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast-notification glass-panel";
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.right = "24px";
  toast.style.padding = "16px 24px";
  toast.style.backgroundColor = "var(--primary)";
  toast.style.color = "white";
  toast.style.borderRadius = "12px";
  toast.style.boxShadow = "var(--shadow-lg)";
  toast.style.zIndex = "999";
  toast.style.fontSize = "0.9rem";
  toast.style.fontWeight = "600";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "8px";
  toast.style.animation = "slideIn 0.3s ease forwards";
  toast.innerHTML = `<i data-lucide="check-circle" style="width: 18px; height: 18px; stroke: white;"></i> <span>${message}</span>`;
  
  // Slide in style rule dynamically
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes slideIn {
      from { transform: translateY(100px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.animation = "slideIn 0.3s ease reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// Formatting Helper Functions
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ms-MY', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Update Theme UI Components
function updateThemeUI() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  if (state.theme === "dark") {
    btn.innerHTML = `<i data-lucide="sun"></i> Mod Cerah`;
  } else {
    btn.innerHTML = `<i data-lucide="moon"></i> Mod Gelap`;
  }
  lucide.createIcons();
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Sidebar Clicks
  const navLinks = document.querySelectorAll(".nav-link");
  const tabPanels = document.querySelectorAll(".tab-panel");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabName = link.getAttribute("data-tab");
      
      if (!tabName) return;

      // Update state
      state.currentTab = tabName;

      // Update active nav item
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Update active tab panel
      tabPanels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.id === `tab-${tabName}`) {
          panel.classList.add("active");
        }
      });

      // Update Top Header Subtitle based on tab
      const headerSubtitle = document.getElementById("header-subtitle");
      if (headerSubtitle) {
        if (tabName === "dashboard") headerSubtitle.innerText = "Selamat datang ke gerbang pengurusan sekolah digital.";
        if (tabName === "profil") headerSubtitle.innerText = "Pengenalan, organisasi, takwim & jawatankuasa sekolah.";
      }

      // Close mobile sidebar if open
      if (state.mobileSidebarActive) {
        toggleMobileSidebar(false);
      }
    });
  });

  // Theme Toggle Button
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
      updateThemeUI();
    });
  }

  // Mobile Menu Button Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      toggleMobileSidebar(!state.mobileSidebarActive);
    });
  }

  // Close Sidebar on Overlay Click (for small devices)
  document.addEventListener("click", (e) => {
    const sidebar = document.querySelector(".sidebar");
    const mobileBtn = document.getElementById("mobile-menu-toggle");
    
    if (state.mobileSidebarActive && sidebar && mobileBtn) {
      if (!sidebar.contains(e.target) && !mobileBtn.contains(e.target)) {
        toggleMobileSidebar(false);
      }
    }
  });

  // Accordion Toggles
  const accordions = document.querySelectorAll(".accordion-header");
  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;
      parent.classList.toggle("open");
    });
  });


  const calFilterBtns = document.querySelectorAll(".cal-filter-btn");
  calFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      calFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.calendarFilter = btn.getAttribute("data-category");
      renderCalendar();
    });
  });

  // Calendar Carian Input
  const calSearchEl = document.getElementById("calendar-search");
  if (calSearchEl) {
    calSearchEl.addEventListener("input", (e) => {
      state.calendarSearch = e.target.value;
      renderCalendar();
    });
  }

  // Calendar Year Dropdown Filter
  const calYearEl = document.getElementById("calendar-year-filter");
  if (calYearEl) {
    calYearEl.addEventListener("change", (e) => {
      state.calendarYear = e.target.value;
      renderCalendar();
    });
  }
}

// Helper to open/close mobile sidebar
function toggleMobileSidebar(active) {
  state.mobileSidebarActive = active;
  const sidebar = document.querySelector(".sidebar");
  const mobileToggleIcon = document.querySelector("#mobile-menu-toggle i");

  if (sidebar) {
    if (active) {
      sidebar.classList.add("active");
      if (mobileToggleIcon) mobileToggleIcon.setAttribute("data-lucide", "x");
    } else {
      sidebar.classList.remove("active");
      if (mobileToggleIcon) mobileToggleIcon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  }
}
