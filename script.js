document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const menuOptions = document.querySelector('.menu-options');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');
  const themeSwitcher = document.querySelector('.theme-button');
  const links = document.querySelectorAll('a[href$=".jpg"]');

// Tampilkan popup ketika halaman dimuat
window.onload = function() {
  document.getElementById('popup-modal').style.display = 'block';
}
    
// Fungsi untuk menutup popup
window.closePopup = function() {
    document.getElementById('popup-modal').style.display = 'none';
}
    
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default
      openLightbox(this.href); // Menggunakan href sebagai sumber gambar
    });
  });

  function openLightbox(src) {
    document.querySelector('#lightbox-modal .lightbox-content').src = src;
    document.getElementById('lightbox-modal').style.display = 'flex';
  }

  window.closeLightbox = function() {
    document.getElementById('lightbox-modal').style.display = 'none';
  };
  // Toggle theme
  themeSwitcher.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
        menuOptions.classList.add('dark');
        document.getElementById('project-modal').classList.add('dark');
        document.getElementById('popup-modal').classList.add('dark');
    } else {
      themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
        menuOptions.classList.remove('dark');
        document.getElementById('project-modal').classList.remove('dark');
        document.getElementById('popup-modal').classList.remove('dark');
    }
  });

  // Open/Close circular menu
  menuButton.addEventListener('click', function () {
    menuOptions.classList.toggle('hidden');
    menuButton.classList.toggle('rotate');
  });

  // Open modal when menu item is clicked
  document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.getAttribute('href') + '-modal';
      document.querySelector(modalId).style.display = 'block';
      menuOptions.classList.add('hidden');
    });
  });

  // Menutup modal dan mengembalikan rotasi tombol menu ke posisi semula
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.parentElement.parentElement.style.display = 'none';
    menuButton.classList.remove('rotate'); // Asumsi bahwa ini adalah kelas yang digunakan untuk rotasi
  });
});

// Pastikan tombol kembali ke posisi semula ketika modal navigasi ditutup
document.querySelectorAll('nav a').forEach(item => {
  item.addEventListener('click', function () {
    const modalId = this.getAttribute('href') + '-modal';
    document.querySelector(modalId).style.display = 'block';
    menuButton.classList.add('rotate'); // Menambahkan rotasi saat modal terbuka
  });
});

// Reset rotasi ketika modal ditutup dari dalam
closeButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.parentElement.parentElement.style.display = 'none';
    menuButton.classList.remove('rotate'); // Mengembalikan tombol ke posisi semula
  });
});

  // Prevent menu from closing when inside the menu
  document.querySelectorAll('.modal-content').forEach(modal => {
    modal.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  // Submit feedback
  document.querySelector('#feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const feedback = document.querySelector('#feedback').value;

    // Append feedback to list
    const feedbackList = document.querySelector('#feedback-list');
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback-entry');
    feedbackDiv.textContent = `${name} says: ${feedback}`;
    feedbackList.appendChild(feedbackDiv);

    // Clear form fields
    document.querySelector('#name').value = '';
    document.querySelector('#feedback').value = '';

    // Show notification
    showNotification('Feedback submitted successfully!');

    // Close the modal after 2 seconds
    setTimeout(() => {
      document.querySelector('#home-modal').style.display = 'none';
      menuButton.classList.remove('rotate');
    }, 2000);
  });

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }
  }

  window.plusSlides = function (n) {
    showSlides(slideIndex += n);
  };

  window.currentSlide = function (n) {
    showSlides(slideIndex = n);
  };

  window.openModal = function () {
    document.getElementById('project-modal').style.display = "block";
  };

  window.closeModal = function () {
    document.getElementById('project-modal').style.display = "none";
  };

  document.querySelectorAll('.mySlides img').forEach(function (img, index) {
    img.addEventListener('click', function () {
      openModal();
      currentSlide(index + 1);
    });
  });

  document.querySelector('.prev').addEventListener('click', function () {
    plusSlides(-1);
  });

  document.querySelector('.next').addEventListener('click', function () {
    plusSlides(1);
  });

  document.querySelectorAll('.cert-image').forEach(item => {
  item.addEventListener('click', function() {
    var parent = this.parentElement;
    parent.classList.toggle('active');
  });
});

// Close modal logic
document.querySelector('.close').addEventListener('click', function() {
  this.parentElement.parentElement.style.display = 'none';
});
// Description button logic
  document.querySelector('.description-btn').addEventListener('click', function() {
  var projectList = document.querySelector('.project-list');
  projectList.classList.toggle('active');
  this.querySelector('i').classList.toggle('fa-chevron-down');
  this.querySelector('i').classList.toggle('fa-chevron-up');
});
    
  // Close modal logic
  document.querySelector('.close').addEventListener('click', function() {
    this.parentElement.parentElement.style.display = 'none';
  });


});