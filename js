// Contact Form - LocalStorage
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return; 
  const feedback = document.createElement('div'); 
  feedback.style.color = 'green';
  feedback.style.marginTop = '10px';
  form.appendChild(feedback);

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) return;
    if (!emailPattern.test(email)) {
      feedback.style.color = 'red';
      feedback.textContent = 'Please enter a valid email.';
      return;
    }

    
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({ name, email, message, date: new Date().toLocaleString() });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    form.reset(); 
    feedback.style.color = 'green';
    feedback.textContent = 'Thank you! We will contact you soon';
  });
});



// Details
function initPortfolioModal() {
  $('.open-details').on('click', function() {
    const title = $(this).data('title');
    const img = $(this).data('img');
    const desc = $(this).data('desc');

    
    $('#modalTitle').text(title);
    $('#modalImg').attr('src', img);
    $('#modalDesc pre').text(desc);

    
    const modalEl = document.getElementById('detailsModal');
    const existingModal = bootstrap.Modal.getInstance(modalEl);
    if (existingModal) existingModal.hide();

    const modal = new bootstrap.Modal(modalEl, { backdrop: true });
    modal.show();

    
    modalEl.addEventListener('hidden.bs.modal', function () {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    });
  });
}

$(document).ready(function() {
  initPortfolioModal();
});


// Effects
function initEffects() {
  $('.hero-title').hide().fadeIn(1000);
  $('.feature').hover(
    function() { $(this).addClass('shadow-lg'); },
    function() { $(this).removeClass('shadow-lg'); }
  );
}

document.addEventListener('DOMContentLoaded', function() {
  if (typeof initForm === "function") {
  initForm();
}
  initPortfolioModal();
  initEffects();
});


//  DARK/LIGHT MODE 
(function() {
  const toggleBtn = document.getElementById('themeToggle');

  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = ' Light';
  } else {
    toggleBtn.textContent = ' Dark';
  }

  
  toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? ' Light' : ' Dark';
  });
})();




// BACKEND INTEGRATION (FINAL)

const API = "https://travel-backend-ndpg.onrender.com";

// Login to backend
async function backendLogin() {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "test@test.com",
      password: "123456"
    })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
  console.log("Backend login success");
}

// Create booking via backend
async function backendCreateBooking() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      service: "Beach Tour",
      destination: "Maldives",
      date: "2026-03-10"
    })
  });

  const data = await res.json();
  console.log("Booking created:", data);
}


document.addEventListener("DOMContentLoaded", () => {
  const API = "https://travel-backend-ndpg.onrender.com";

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const msg = document.getElementById("authMsg");

  
  document.getElementById("goRegister").onclick = (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    msg.innerText = "";
  };

  document.getElementById("goLogin").onclick = (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    msg.innerText = "";
  };

  // LOGIN SUBMIT
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginEmail.value;
    const password = loginPassword.value;

    const res = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      unlock();
    } else {
      msg.innerText = "Invalid login";
    }
  });

  // REGISTER SUBMIT
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = regName.value;
    const email = regEmail.value;
    const password = regPassword.value;

    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      unlock();
    } else {
      msg.innerText = "Registration failed";
    }
  });

  function unlock() {
    document.getElementById("authWrapper").style.display = "none";
    document.getElementById("siteContent").style.pointerEvents = "auto";
    document.getElementById("siteContent").style.filter = "none";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  const auth = document.getElementById("authWrapper");
  const site = document.getElementById("siteContent");

  if (token) {
    
    auth.style.display = "none";
    site.style.pointerEvents = "auto";
    site.style.filter = "none";
  } else {

    auth.style.display = "flex";
    site.style.pointerEvents = "none";
    site.style.filter = "blur(3px)";
  }
});