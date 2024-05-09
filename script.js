document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menuOptions = document.querySelector('.menu-options');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    const themeSwitcher = document.querySelector('.theme-button');
    const links = document.querySelectorAll('a[href$=".jpg"]');
  
  
  window.onload = function() {
    document.getElementById('popup-modal').style.display = 'block';
      document.querySelector('.menu-button').classList.add('disabled');
  }
  
  window.closePopup = function() {
      document.getElementById('popup-modal').style.display = 'none';
      document.querySelector('.menu-button').classList.remove('disabled');
  }  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(this.href); 
      });
    });
  
    function openLightbox(src) {
      document.querySelector('#lightbox-modal .lightbox-content').src = src;
      document.getElementById('lightbox-modal').style.display = 'flex';
    }
  
    window.closeLightbox = function() {
      document.getElementById('lightbox-modal').style.display = 'none';
    };
    
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
  
    
    menuButton.addEventListener('click', function () {
      menuOptions.classList.toggle('hidden');
      menuButton.classList.toggle('rotate');
    });
  
    
    document.querySelectorAll('nav a').forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('href') + '-modal';
        document.querySelector(modalId).style.display = 'block';
        menuOptions.classList.add('hidden');
      });
    });
  
    
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
      menuButton.classList.remove('rotate'); 
    });
  });
  
  
  document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', function () {
      const modalId = this.getAttribute('href') + '-modal';
      document.querySelector(modalId).style.display = 'block';
      menuButton.classList.add('rotate'); 
    });
  });
  
  
  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      this.parentElement.parentElement.style.display = 'none';
      menuButton.classList.remove('rotate'); 
    });
  });
  
    
    document.querySelectorAll('.modal-content').forEach(modal => {
      modal.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  
    
    document.querySelector('#feedback-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const feedback = document.querySelector('#feedback').value;
  
      
      const feedbackList = document.querySelector('#feedback-list');
      const feedbackDiv = document.createElement('div');
      feedbackDiv.classList.add('feedback-entry');
      feedbackDiv.textContent = `${name} says: ${feedback}`;
      feedbackList.appendChild(feedbackDiv);
  
      
      document.querySelector('#name').value = '';
      document.querySelector('#feedback').value = '';
  
      
      showNotification('Feedback submitted successfully!');
  
      
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
  
  
  document.querySelector('.close').addEventListener('click', function() {
    this.parentElement.parentElement.style.display = 'none';
  });
  
    document.querySelector('.description-btn').addEventListener('click', function() {
    var projectList = document.querySelector('.project-list');
    projectList.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-chevron-down');
    this.querySelector('i').classList.toggle('fa-chevron-up');
  });
      
    
    document.querySelector('.close').addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
    });
      
  
  document.addEventListener('keydown', function (event) {
     if (event.key === 'Escape') {
        modals.forEach(modal => {
           modal.style.display = 'none';
           menuButton.classList.remove('rotate');
          document.getElementById('lightbox-modal').style.display = 'none';
        });
     }
  });
      
 window.addEventListener('keydown', function (event) {
   document.getElementById('project-modal');
        if (event.key === 'ArrowLeft') {
            
            plusSlides(-1);
        } 
        else if (event.key === 'ArrowRight') {
            
            plusSlides(1);
        }
});
   
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length > 0) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    // Memperbarui gambar pada lightbox
    updateLightboxImage(slideIndex);
  }
}

function updateLightboxImage(index) {
  var lightboxImage = document.querySelector('.lightbox-content');
  var slides = document.querySelectorAll('.mySlides img');
  if (lightboxImage && slides[index - 1]) {
    lightboxImage.src = slides[index - 1].src;
    lightboxImage.alt = slides[index - 1].alt;
  }
}

window.addEventListener('keydown', function (event) {
  var lightboxModal = document.getElementById('lightbox-modal');
  if (lightboxModal.style.display === 'flex') {
    if (event.key === 'ArrowLeft') {
      plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
      plusSlides(1);
    }
  }
});
  // Animasi mengetik
    const textElement = document.getElementById('typing');
    const phrases = ["Hello!! Welcome to my portofolio website!","Bismillahirohmanirrohim", "Lorem Ipsum is the best motivation words.", "Thanks for visiting!"];
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
  
    function type() {
      let currentPhrase = phrases[phraseIndex];
      let displayText = isDeleting ? currentPhrase.slice(0, letterIndex--) : currentPhrase.slice(0, letterIndex++);
  
      textElement.innerHTML = displayText;
  
      if (!isDeleting && letterIndex === currentPhrase.length) {
        
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && letterIndex === 0) {
        
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      }
  
     
      let typingSpeed = isDeleting ? 100 : 200;
      setTimeout(type, typingSpeed);
    }
  
    
    type();
  
  
 });