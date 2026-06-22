// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

// App State
const state = {
  currentTab: "dashboard",
  theme: localStorage.getItem("theme") || "light",
  staffFilter: "all",
  staffSearch: "",
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

  // Load Staff Directory
  renderStaffDirectory();

  // Load Calendar
  renderCalendar();

  // Render Org Chart
  const orgChartContainer = document.getElementById("org-chart-tree");
  if (orgChartContainer && schoolData.orgChart) {
    orgChartContainer.appendChild(renderOrgNode(schoolData.orgChart));
  }

  // Load Downloads List
  renderDownloads();

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
  
  // Set Principal Message (Converting Markdown-like structures to HTML)
  const principalMsgHtml = schoolData.info.principalMessage
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
  document.getElementById("principal-message-text").innerHTML = principalMsgHtml;

  // Render Stats Card Values
  document.getElementById("stat-total-staff").innerText = schoolData.staff.length;
  
  const countEvents = (cat) => schoolData.calendar.filter(e => e.category.toLowerCase() === cat.toLowerCase() && e.year === "2026").length;
  document.getElementById("stat-kurikulum").innerText = countEvents("Kurikulum");
  document.getElementById("stat-hem").innerText = countEvents("HEM");
  document.getElementById("stat-kokurikulum").innerText = countEvents("Kokurikulum");

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

// Render Staff Directory
function renderStaffDirectory() {
  const container = document.getElementById("staff-cards-container");
  if (!container) return;

  // Filter & Search Staff List
  const filteredStaff = schoolData.staff.filter(person => {
    // Search match (Name, Subject, Role)
    const query = state.staffSearch.toLowerCase();
    const matchesSearch = 
      person.name.toLowerCase().includes(query) ||
      person.subject.toLowerCase().includes(query) ||
      person.role.toLowerCase().includes(query);

    // Department match
    const matchesDept = 
      state.staffFilter === "all" || 
      person.department.toLowerCase() === state.staffFilter.toLowerCase();

    return matchesSearch && matchesDept;
  });

  if (filteredStaff.length === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">
        <i data-lucide="users-round" style="width: 48px; height: 48px; margin: 0 auto 16px auto; display: block; stroke: var(--text-muted);"></i>
        <p style="font-weight: 600;">Tiada rekod guru/kakitangan ditemui.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Sila cuba kata kunci atau penapisan unit yang lain.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filteredStaff.map(person => {
    // Get initials for avatar
    const initials = person.name
      .split(' ')
      .filter(n => !['bin', 'binti', 'a/l', 'a/p', 'dr', 'dr.', 'hajah', 'haji'].includes(n.toLowerCase()))
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase();

    return `
      <div class="glass-panel staff-card">
        <div class="staff-header">
          <div class="staff-avatar-circle">${initials || 'CG'}</div>
          <div class="staff-title-info">
            <div class="staff-name" title="${person.name}">${person.name}</div>
            <div class="staff-role-badge">${person.role}</div>
          </div>
        </div>
        <div class="staff-body">
          <div class="staff-body-row">
            <span class="staff-body-label">Gred Jawatan</span>
            <span class="staff-body-value">${person.grade}</span>
          </div>
          <div class="staff-body-row">
            <span class="staff-body-label">Unit/Jabatan</span>
            <span class="staff-body-value">${person.department}</span>
          </div>
          <div class="staff-body-row">
            <span class="staff-body-label">Mata Pelajaran</span>
            <span class="staff-body-value" title="${person.subject}">${person.subject}</span>
          </div>
          <div class="staff-body-row">
            <span class="staff-body-label">Guru Kelas</span>
            <span class="staff-body-value">${person.classTeacher}</span>
          </div>
        </div>
        <div class="staff-contact-footer">
          <a href="mailto:${person.email}" class="contact-icon-btn">
            <i data-lucide="mail"></i> Emel
          </a>
          <a href="https://wa.me/${person.phone.replace(/[^0-9]/g, '')}" target="_blank" class="contact-icon-btn">
            <i data-lucide="phone"></i> WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// Render Calendar
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

// Recursive function to build HTML tree structure for Organization Chart
function renderOrgNode(node) {
  const li = document.createElement("li");
  
  const nodeDiv = document.createElement("div");
  nodeDiv.className = `tree-node ${node.type}`;
  nodeDiv.innerHTML = `
    <div class="node-name">${node.name}</div>
    <div class="node-title">${node.title}</div>
  `;
  li.appendChild(nodeDiv);

  if (node.children && node.children.length > 0) {
    const ul = document.createElement("ul");
    node.children.forEach(child => {
      ul.appendChild(renderOrgNode(child));
    });
    li.appendChild(ul);
  }

  return li;
}

// Render Downloads list
function renderDownloads() {
  const container = document.getElementById("downloads-grid-container");
  if (!container) return;

  container.innerHTML = schoolData.downloads.map(doc => {
    let fileClass = "pdf";
    let iconName = "file-text";

    if (doc.format.toLowerCase() === "docx") {
      fileClass = "docx";
      iconName = "file-text";
    } else if (doc.format.toLowerCase() === "xlsx") {
      fileClass = "xlsx";
      iconName = "file-spreadsheet";
    } else if (doc.format.toLowerCase() === "zip") {
      fileClass = "zip";
      iconName = "file-archive";
    } else if (doc.format.toLowerCase() === "pdf") {
      fileClass = "pdf";
      iconName = "file-text";
    }

    return `
      <div class="glass-panel download-card">
        <div class="download-header">
          <div class="download-file-icon ${fileClass}">
            <i data-lucide="${iconName}" style="width: 24px; height: 24px;"></i>
          </div>
          <div class="download-title-info">
            <h4>${doc.title}</h4>
            <span class="download-cat">${doc.category}</span>
          </div>
        </div>
        <div class="download-metadata-row">
          <div class="download-meta-item">
            <i data-lucide="database" style="width: 14px; height: 14px;"></i> ${doc.size}
          </div>
          <div class="download-meta-item">
            <i data-lucide="file-check" style="width: 14px; height: 14px;"></i> ${doc.format}
          </div>
        </div>
        <button class="download-btn" onclick="simulateDownload('${doc.filename}', '${doc.title}')">
          <i data-lucide="download" style="width: 16px; height: 16px;"></i> Muat Turun
        </button>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// Trigger a realistic simulated file download
window.simulateDownload = function(filename, title) {
  // Create a virtual file content depending on the extension
  let mimeType = "application/octet-stream";
  let content = `Buku Perancangan Sekolah 2026\nSiri: ${title}\nFail Rujukan: ${filename}\nDiunduh pada: ${new Date().toLocaleString('ms-MY')}\n\nDokumen ini dijana secara automatik oleh sistem pengurusan sekolah SBU.`;

  if (filename.endsWith('.pdf')) {
    mimeType = "application/pdf";
  } else if (filename.endsWith('.docx')) {
    mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  } else if (filename.endsWith('.xlsx')) {
    mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Custom toast notification logic instead of ugly alert
  showToast(`Berjaya memuat turun: ${filename}`);
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
        if (tabName === "kurikulum") headerSubtitle.innerText = "Pekeliling, jadual pengurusan panitia dan peperiksaan.";
        if (tabName === "hem") headerSubtitle.innerText = "Kebajikan, pengurusan disiplin dan sahsiah murid.";
        if (tabName === "kokurikulum") headerSubtitle.innerText = "Kelab sukan, persatuan akademik dan badan beruniform.";
        if (tabName === "downloads") headerSubtitle.innerText = "Dapatkan borang rasmi, buku penuh dan fail RPH.";
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

  // Staff Search & Filtering
  const staffSearchEl = document.getElementById("staff-search");
  const staffFilterEl = document.getElementById("staff-dept-filter");
  
  if (staffSearchEl) {
    staffSearchEl.addEventListener("input", (e) => {
      state.staffSearch = e.target.value;
      renderStaffDirectory();
    });
  }

  if (staffFilterEl) {
    staffFilterEl.addEventListener("change", (e) => {
      state.staffFilter = e.target.value;
      renderStaffDirectory();
    });
  }

  // Calendar Category Buttons Filtering
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
