// --- DATABASE ---
const eventsData = [
  { id: 1, city: 'Mumbai', name: 'Mumbai Mayhem', date: '2025-10-25', category: 'solo', price: 120, venue: 'Jio World Centre', image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600&h=400' },
  { id: 2, city: 'Delhi', name: 'Capital Punishment', date: '2025-11-15', category: 'team', price: 220, venue: 'JLN Stadium', image: 'https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&cs=tinysrgb&w=600&h=400' },
  { id: 3, city: 'Bangalore', name: 'Silicon Valley Slam', date: '2025-12-06', category: 'elite', price: 150, venue: 'Kanteerava Stadium', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400' },
  { id: 4, city: 'Pune', name: 'Deccan Dominance', date: '2026-01-17', category: 'solo', price: 120, venue: 'Balewadi Stadium', image: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600&h=400' },
  { id: 5, city: 'Hyderabad', name: 'Nizam\'s Challenge', date: '2026-02-07', category: 'team', price: 220, venue: 'Gachibowli Stadium', image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=600&h=400' },
  { id: 6, city: 'Mumbai', name: 'Mumbai Mayhem II', date: '2026-03-21', category: 'elite', price: 150, venue: 'Jio World Centre', image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600&h=400' },
];

const pastEventsData = [
  {
    id: 1,
    name: "FYTRR Chennai Conquest 2024",
    date: "August 15, 2024",
    report: "Over 2,000 athletes battled the humidity and a challenging course. The event was a massive success, with record-breaking times in the Elite division.",
    leaderboard: [
      { rank: 1, name: "Arjun Verma", time: "58:34" },
      { rank: 2, name: "Priya Singh", time: "1:02:11" },
      { rank: 3, name: "Rohan Desai", time: "1:03:56" },
    ],
    gallery: [
      'https://via.placeholder.com/400x300/1a1a1a/f5f5f5?text=Gallery+1',
      'https://via.placeholder.com/400x300/1a1a1a/f5f5f5?text=Gallery+2',
      'https://via.placeholder.com/400x300/1a1a1a/f5f5f5?text=Gallery+3',
    ]
  },
  {
    id: 2,
    name: "FYTRR Goa Monsoon Race 2024",
    date: "June 22, 2024",
    report: "A muddy, gritty race that tested every athlete's resolve. The team division saw fierce competition, with 'Goa Grind' taking the top spot.",
    leaderboard: [
      { rank: 1, name: "Team Goa Grind", time: "55:12" },
      { rank: 2, name: "Mumbai Muscle", time: "56:45" },
      { rank: 3, name: "Bangalore Beasts", time: "57:01" },
    ],
    gallery: [
      'https://via.placeholder.com/400x300/1a1a1a/f5f5f5?text=Gallery+4',
      'https://via.placeholder.com/400x300/1a1a1a/f5f5f5?text=Gallery+5',
    ]
  }
];

const faqs = [
  { q: "What is the FYTRR race format?", a: "The format is 8 x 1km runs. After each 1km run, you complete one functional workout station. This repeats 8 times." },
  { q: "Can I register as a team?", a: "Yes! We have team divisions for pairs. You run together and complete the workouts together, splitting the reps as you see fit." },
  { q: "What is the minimum age to participate?", a: "The minimum age to participate in a FYTRR event is 16 years old on the day of the event." },
  { q: "What should I bring on race day?", a: "Bring your ID, a water bottle, and appropriate athletic attire. We will provide a bag drop area for your other belongings." },
];

// --- DYNAMIC PAGE TITLES ---
const pageTitles = {
  home: "FYTRR | Forge Your Inner Warrior Challenge",
  events: "FYTRR | Upcoming Races & Registration",
  schedule: "FYTRR | 2025 Event Schedule",
  results: "FYTRR | Past Events & Leaderboards",
  about: "FYTRR | About the Challenge & Rules",
  sponsors: "FYTRR | Our Partners & Sponsors"
};
// -----------------------------

// --- PAGE NAVIGATION ---
const pages = document.querySelectorAll('[data-page]');
const navLinks = document.querySelectorAll('.nav-link');

function showPage(pageId) {
  pages.forEach(page => page.style.display = 'none');
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }

  // --- UPDATED CODE: UPDATE PAGE TITLE DYNAMICALLY ---
  document.title = pageTitles[pageId] || "FYTRR Challenge";

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${pageId}`);
  });

  document.getElementById('mobile-menu').classList.add('hidden');
  // Using a timeout here sometimes helps ensure the browser updates the history state properly
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
}

// Set initial page
document.addEventListener('DOMContentLoaded', () => {
  // Set initial title based on the default 'home' page
  document.title = pageTitles['home'];

  showPage('home');
  document.querySelector('a[href="#home"]').classList.add('active');

  populateEvents();
  setupEventListeners();
  renderCalendar();
  populatePastEvents();
  populateFaqs();
  populateRegistrationModal();
  lucide.createIcons();

  // FIX: Added setTimeout to ensure carousels initialize after the DOM is fully rendered
  setTimeout(() => {
    setupCarousels();
    setupTestimonialCarousel();
  }, 50);
});

// --- EVENT LISTENERS ---
function setupEventListeners() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.getElementById('event-search').addEventListener('input', populateEvents);
  document.getElementById('event-filter').addEventListener('change', populateEvents);

  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('py-2', window.scrollY > 50);
    header.classList.toggle('py-4', window.scrollY <= 50);
  });

  const regTypeSelect = document.getElementById('reg-type');
  regTypeSelect.addEventListener('change', (e) => {
    const selectedEventId = document.getElementById('reg-event').value;
    const selectedEvent = eventsData.find(ev => ev.id == selectedEventId);
    if (!selectedEvent) return;

    const isTeam = e.target.value === 'team';
    document.getElementById('team-name-wrapper').classList.toggle('hidden', !isTeam);

    let price = selectedEvent.price;
    if (isTeam) {
      price = selectedEvent.category === 'team' ? selectedEvent.price : selectedEvent.price * 2 - 20;
    }
    document.getElementById('reg-price').textContent = `$${price}`;
  });

  document.getElementById('reg-event').addEventListener('change', (e) => {
    const selectedEvent = eventsData.find(ev => ev.id == e.target.value);
    if (selectedEvent) {
      document.getElementById('reg-price').textContent = `$${selectedEvent.price}`;
      document.getElementById('reg-type').value = 'solo';
      document.getElementById('team-name-wrapper').classList.add('hidden');
    }
  });

  const regForm = document.getElementById('registration-form');
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    regForm.classList.add('hidden');
    document.getElementById('reg-confirmation').classList.remove('hidden');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const pageId = href.substring(1);
        if (document.getElementById(pageId)) {
          e.preventDefault();
          showPage(pageId);
        }
      }
    });
  });

  document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });
  document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });
}

// --- CAROUSEL LOGIC ---
function setupCarousels() {
  const carousels = document.querySelectorAll('.carousel-container:not(.testimonial-carousel)');
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    if (!track) return;

    const originalSlides = Array.from(track.children);
    if (originalSlides.length <= 1) return;

    // Clone first and last slides for seamless loop
    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, originalSlides[0]);

    const slidesWithClones = Array.from(track.children);
    const nextButton = carousel.querySelector('.next');
    const prevButton = carousel.querySelector('.prev');
    let currentIndex = 1; // Start on the first "real" slide
    let isTransitioning = false;
    let intervalId;

    function setPosition(withTransition = true) {
      if (withTransition) {
        track.style.transition = 'transform 0.5s ease-in-out';
      } else {
        track.style.transition = 'none';
      }
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // FIX: Simplified handleTransitionEnd to only handle index resetting.
    function handleTransitionEnd() {
      if (currentIndex === 0) { // If we are at the cloned last slide
        currentIndex = slidesWithClones.length - 2; // Jump to the real last slide
        setPosition(false);
      } else if (currentIndex === slidesWithClones.length - 1) { // If we are at the cloned first slide
        currentIndex = 1; // Jump to the real first slide
        setPosition(false);
      }
    }

    function moveToNext() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      setPosition();

      // FIX: Use setTimeout to reliably reset the transition flag
      setTimeout(() => {
        isTransitioning = false;
        handleTransitionEnd(); // Manually check boundary condition after transition time
      }, 500); // Must match CSS transition duration (0.5s)
    }

    function moveToPrev() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      setPosition();

      // FIX: Use setTimeout to reliably reset the transition flag
      setTimeout(() => {
        isTransitioning = false;
        handleTransitionEnd(); // Manually check boundary condition after transition time
      }, 500); // Must match CSS transition duration (0.5s)
    }

    function startAutoplay() {
      stopAutoplay();
      // Speed is 3 seconds
      intervalId = setInterval(moveToNext, 3000);
    }

    function stopAutoplay() {
      clearInterval(intervalId);
    }

    if (nextButton && prevButton) {
      nextButton.addEventListener('click', () => {
        moveToNext();
        stopAutoplay();
        startAutoplay();
      });
      prevButton.addEventListener('click', () => {
        moveToPrev();
        stopAutoplay();
        startAutoplay();
      });
    }

    // track.addEventListener('transitionend', handleTransitionEnd); // Removed original listener

    setPosition(false); // Initial position
    startAutoplay();
  });
}

function setupTestimonialCarousel() {
  const carousel = document.getElementById('testimonial-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  let currentIndex = 0;
  let slideInterval;
  let isTransitioning = false; // Add this flag to prevent rapid clicking

  function updateSlides(transition = '') {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev', 'next');
      if (i === currentIndex) {
        slide.classList.add('active');
      } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      } else if (i === (currentIndex + 1) % slides.length) {
        slide.classList.add('next');
      }
    });
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === currentIndex);
    }
  }

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = i;
      updateSlides();
      resetInterval();
      setTimeout(() => isTransitioning = false, 500); // Reset after transition time
    });
    dotsContainer.appendChild(dot);
  });

  prevButton.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides('from-prev');
    resetInterval();
    setTimeout(() => isTransitioning = false, 500); // Reset after transition time
  });

  nextButton.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides('from-next');
    resetInterval();
    setTimeout(() => isTransitioning = false, 500); // Reset after transition time
  });

  const startInterval = () => {
    // Speed is 3 seconds
    slideInterval = setInterval(() => {
      // Manual click logic ensures the transition flag is respected
      nextButton.click();
    }, 3000);
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };

  updateSlides();
  startInterval();
}


// --- DYNAMIC CONTENT POPULATION ---

function populateEvents() {
  const eventList = document.getElementById('event-list');
  const searchInput = document.getElementById('event-search').value.toLowerCase();
  const filterValue = document.getElementById('event-filter').value;

  const filteredEvents = eventsData.filter(event =>
    event.city.toLowerCase().includes(searchInput) && (filterValue === 'all' || event.category === filterValue)
  );

  eventList.innerHTML = '';
  if (filteredEvents.length === 0) {
    eventList.innerHTML = `<p class="text-gray-400 col-span-full text-center">No events match your criteria. Please try again.</p>`;
    return;
  }

  filteredEvents.forEach(event => {
    const eventCard = `
                <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img src="${event.image}" alt="${event.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <p class="text-sm text-orange-400 font-semibold">${new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <h3 class="text-2xl font-bold text-white mt-1">${event.name}</h3>
                        <p class="text-gray-400 mt-1">${event.venue}</p>
                        <div class="mt-4 flex justify-between items-center">
                            <span class="text-lg font-bold text-white">$${event.price}</span>
                            <button onclick="showRegistrationModal(${event.id})" class="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg text-sm cta-button">Register</button>
                        </div>
                    </div>
                </div>`;
    eventList.innerHTML += eventCard;
  });
}

function populatePastEvents() {
  const container = document.getElementById('past-event-list');
  container.innerHTML = '';
  pastEventsData.forEach((event) => {
    const leaderboardHtml = event.leaderboard.slice(0, 3).map(p => `
                <li class="flex justify-between text-sm">
                    <span>${p.rank}. ${p.name}</span>
                    <span class="font-mono">${p.time}</span>
                </li>
            `).join('');

    const eventCard = `
                <div class="bg-gray-900 rounded-lg p-6 flex flex-col transform hover:scale-105 transition-transform duration-300">
                    <h3 class="text-2xl font-bold text-white">${event.name}</h3>
                    <p class="text-sm text-orange-400 font-semibold mb-3">${event.date}</p>
                    <p class="text-gray-400 text-sm mb-4 flex-grow">${event.report}</p>
                    <div>
                        <h4 class="font-bold text-gray-200 mb-2">Top 3 Results</h4>
                        <ul class="space-y-1 text-gray-300">
                            ${leaderboardHtml}
                        </ul>
                    </div>
                    <a href="#" class="mt-4 bg-orange-500 text-white font-bold text-center py-2 px-4 rounded-lg cta-button text-sm">View Full Gallery & Results</a>
                </div>
            `;
    container.innerHTML += eventCard;
  });
}

function populateFaqs() {
  const container = document.getElementById('faq-container');
  container.innerHTML = '';
  faqs.forEach((faq, index) => {
    const faqItem = `
                <div class="border border-gray-700 rounded-lg">
                    <h2><button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200" data-accordion-target="#faq-body-${index}"><span>${faq.q}</span><i data-lucide="chevron-down" class="transition-transform"></i></button></h2>
                    <div id="faq-body-${index}" class="hidden p-5 border-t border-gray-700"><p class="text-gray-400">${faq.a}</p></div>
                </div>`;
    container.innerHTML += faqItem;
  });

  container.querySelectorAll('[data-accordion-target]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector(button.dataset.accordionTarget).classList.toggle('hidden');
      button.querySelector('i').classList.toggle('rotate-180');
    });
  });
}

// --- CALENDAR LOGIC ---
let currentDate = new Date(2025, 9, 13);

function renderCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  const monthYearDisplay = document.getElementById('calendar-month-year');
  currentDate.setDate(1);
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  monthYearDisplay.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

  const firstDayIndex = currentDate.getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const prevLastDay = new Date(year, month, 0).getDate();

  calendarGrid.innerHTML = '';
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.forEach(day => {
    calendarGrid.innerHTML += `<div class="font-bold text-orange-400 text-xs">${day.toUpperCase()}</div>`;
  });

  for (let i = firstDayIndex; i > 0; i--) {
    calendarGrid.innerHTML += `<div class="text-gray-600 p-2">${prevLastDay - i + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    let dayClasses = "p-2 rounded-lg cursor-pointer hover:bg-orange-500/50 transition-colors text-sm";
    const eventDate = new Date(year, month, i);
    let hasEvent = eventsData.find(e => new Date(e.date).toDateString() === eventDate.toDateString());

    if (hasEvent) {
      dayClasses += " bg-orange-500 text-white font-bold relative";
      calendarGrid.innerHTML += `<div class="${dayClasses}" data-event-id="${hasEvent.id}" title="${hasEvent.name}">${i}<span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span></div>`;
    } else {
      calendarGrid.innerHTML += `<div class="${dayClasses}">${i}</div>`;
    }
  }

  calendarGrid.querySelectorAll('[data-event-id]').forEach(day => {
    day.addEventListener('click', (e) => {
      const eventId = e.currentTarget.dataset.eventId;
      showEventDetails(eventId);
    });
  });

  renderMonthEventList(year, month);
  document.getElementById('event-details-display').innerHTML = `<p class="text-gray-500 text-center">Select a date to see event details.</p>`;
}

function renderMonthEventList(year, month) {
  const monthEventsList = document.getElementById('month-events-list');
  const eventsThisMonth = eventsData.filter(e => {
    const d = new Date(e.date);
    return d.getFullYear() === year && d.getMonth() === month;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  if (eventsThisMonth.length > 0) {
    monthEventsList.innerHTML = eventsThisMonth.map(event => `
                <div class="bg-gray-900 p-3 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-700" onclick="showEventDetails(${event.id})">
                    <div>
                        <p class="font-bold text-white">${event.name}</p>
                        <p class="text-sm text-gray-400">${new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${event.city}</p>
                    </div>
                    <i data-lucide="arrow-right-circle" class="text-orange-400"></i>
                </div>`).join('');
    lucide.createIcons();
  } else {
    monthEventsList.innerHTML = `<p class="text-gray-500">No events scheduled for this month.</p>`;
  }
}

function showEventDetails(eventId) {
  const event = eventsData.find(e => e.id == eventId);
  if (!event) return;

  const eventDate = new Date(event.date);
  document.getElementById('event-details-display').innerHTML = `
                <h4 class="text-lg font-bold text-orange-400">${event.name}</h4>
                <div class="mt-2 space-y-2 text-gray-300">
                    <div class="flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4 text-gray-500"></i><span>${eventDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
                    <div class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-gray-500"></i><span>${event.venue}, ${event.city}</span></div>
                    <div class="flex items-center gap-2"><i data-lucide="tag" class="w-4 h-4 text-gray-500"></i><span class="capitalize">${event.category} Division</span></div>
                </div>
                <button onclick="showRegistrationModal(${event.id})" class="w-full mt-4 bg-orange-500 text-white font-bold py-2 px-6 rounded-lg cta-button">Register for this Event</button>`;
  lucide.createIcons();

  const calendarGrid = document.getElementById('calendar-grid');
  calendarGrid.querySelectorAll('[data-event-id]').forEach(d => d.classList.remove('ring-2', 'ring-offset-2', 'ring-offset-gray-900', 'ring-white'));
  const dayElement = calendarGrid.querySelector(`[data-event-id="${eventId}"]`);
  if (dayElement) {
    dayElement.classList.add('ring-2', 'ring-offset-2', 'ring-offset-black', 'ring-white');
  }
}

// --- MODAL LOGIC ---
const registrationModal = document.getElementById('registration-modal');

function populateRegistrationModal() {
  const select = document.getElementById('reg-event');
  select.innerHTML = eventsData.map(event => `<option value="${event.id}">${event.name} - ${new Date(event.date).toLocaleDateString()}</option>`).join('');
}

function showRegistrationModal(eventId = null) {
  const regForm = document.getElementById('registration-form');
  regForm.classList.remove('hidden');
  document.getElementById('reg-confirmation').classList.add('hidden');
  regForm.reset();

  const firstEvent = eventsData[0];
  let defaultPrice = 120;

  if (eventId) {
    document.getElementById('reg-event').value = eventId;
    const selectedEvent = eventsData.find(e => e.id == eventId);
    if (selectedEvent) defaultPrice = selectedEvent.price;
  } else if (firstEvent) {
    defaultPrice = firstEvent.price;
  }

  document.getElementById('team-name-wrapper').classList.add('hidden');
  document.getElementById('reg-price').textContent = `$${defaultPrice}`;

  registrationModal.style.display = 'flex';
  lucide.createIcons();
}

function closeRegistrationModal() {
  registrationModal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == registrationModal) {
    closeRegistrationModal();
  }
}