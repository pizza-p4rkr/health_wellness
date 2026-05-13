document.addEventListener('DOMContentLoaded', function () {

  // dark mode
  var btn = document.getElementById('darkModeToggle');
  if (btn) {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      btn.textContent = '☀️';
    }
    btn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      var isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      btn.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // highlight active nav link
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('nav ul li a');
  links.forEach(function (link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });

  // update fitness slider value
  var slider = document.getElementById('fitnessLevel');
  var display = document.getElementById('fitnessValue');
  if (slider && display) {
    slider.addEventListener('input', function () {
      display.textContent = slider.value;
    });
  }

  // cookie popup
  var popup = document.getElementById('cookiePopup');
  if (popup) {
    if (!sessionStorage.getItem('cookieAccepted')) {
      popup.style.display = 'flex';
    }
    document.getElementById('cookieAccept').addEventListener('click', function () {
      sessionStorage.setItem('cookieAccepted', 'true');
      popup.style.display = 'none';
    });
    document.getElementById('cookieDecline').addEventListener('click', function () {
      popup.style.display = 'none';
    });
  }

  // cat peek
  var cat = document.getElementById('catPeek');
  if (cat) {
    function showCat() {
      var goRight = Math.random() > 0.5;
      cat.style.bottom = (20 + Math.random() * 50) + '%';
      cat.className = 'cat-peek ' + (goRight ? 'cat-right' : 'cat-left');
      setTimeout(function () {
        cat.classList.add('cat-visible');
      }, 50);
      setTimeout(function () {
        cat.classList.remove('cat-visible');
        var next = 5000 + Math.random() * 5000;
        setTimeout(showCat, next);
      }, 3000);
    }
    var firstDelay = 5000 + Math.random() * 5000;
    setTimeout(showCat, firstDelay);
  }

  // form validation
  var submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function (event) {
      event.preventDefault();

      var name = document.getElementById('fullName').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in your name, email adress, and message before submitting.');
        return;
      }

      var confirmed = confirm('Ready to send your message to the Health & Wellness team?');
      if (confirmed) {
        alert('Thank you, ' + name + '! Your message has been received. We will get back to you within 24 hours.');
        document.getElementById('contactForm').reset();
        if (display) {
          display.textContent = '5';
        }
      }
    });
  }

});
