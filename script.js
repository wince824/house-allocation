document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    
    // Retrieve form input values
    var fullName = document.querySelector('.name-input').value;
    var email = document.querySelector('.email-input').value;
    var phoneNumber = document.querySelector('.phone-input').value;
    var password = document.querySelector('.password-input').value;
    var confirmPassword = document.querySelector('.confirm-password-input').value;
    
    // Reset error messages
    document.querySelector('#email-error').textContent = '';
    document.querySelector('#password-match-error').textContent = '';
    
    // Validate email
    if (!validateEmail(email)) {
      document.querySelector('#email-error').textContent = 'Invalid email address';
      return;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
      document.querySelector('#password-match-error').textContent = 'Passwords do not match';
      return;
    }
    
    // Submit the form or perform further actions
    console.log('Form submitted successfully!');
  });
  
  function validateEmail(email) {
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  var slides = document.getElementsByClassName('slide');
  var dots = document.getElementsByClassName('dot');
  var currentSlide = 0;

  function showSlide(n) {
    if (n < 0) {
      currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = n;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].className = 'dot';
    }

    slides[currentSlide].style.display = 'block';
    dots[currentSlide].className = 'dot active';
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function jumpToSlide(n) {
    showSlide(n);
  }

  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);

  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', jumpToSlide.bind(null, i));
  }

  showSlide(currentSlide);
  

 