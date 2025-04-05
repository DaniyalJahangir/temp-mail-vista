
document.addEventListener('DOMContentLoaded', function() {
  // Email generator functionality
  const emailInput = document.getElementById('email-input');
  const copyBtn = document.getElementById('copy-btn');
  const copyText = document.getElementById('copy-text');
  const copyIcon = document.getElementById('copy-icon');
  const checkIcon = document.getElementById('check-icon');
  const regenerateBtn = document.getElementById('regenerate-btn');
  
  // Initialize with a random email
  emailInput.value = generateRandomEmail();
  
  // Copy button functionality
  copyBtn.addEventListener('click', function() {
    copyToClipboard();
  });
  
  // Regenerate button functionality
  regenerateBtn.addEventListener('click', function() {
    emailInput.value = generateRandomEmail();
    resetCopyButton();
  });
  
  // FAQ accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all accordion items
      accordionHeaders.forEach(h => {
        h.setAttribute('aria-expanded', 'false');
        h.nextElementSibling.classList.remove('open');
      });
      
      // If it wasn't expanded, expand it
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        this.nextElementSibling.classList.add('open');
      }
    });
  });
  
  // Initialize the first accordion item as open
  if (accordionHeaders.length > 0) {
    accordionHeaders[0].setAttribute('aria-expanded', 'true');
    accordionHeaders[0].nextElementSibling.classList.add('open');
  }
  
  // Helper function to generate a random email
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let username = '';
    const length = 8 + Math.floor(Math.random() * 8); // Random length between 8-15
    
    for (let i = 0; i < length; i++) {
      username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    const domains = ['tempmail.vista', 'tempmailbox.com', 'disposable.mail', 'viewmail.temp'];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    return `${username}@${domain}`;
  }
  
  // Helper function to copy email to clipboard
  function copyToClipboard() {
    emailInput.select();
    document.execCommand('copy');
    
    // Change button state to indicate copied
    copyText.textContent = 'Copied';
    copyIcon.classList.add('hidden');
    checkIcon.classList.remove('hidden');
    
    // Create and show toast notification
    showToast('Email copied!', 'The temporary email has been copied to your clipboard.');
    
    // Reset button after 2 seconds
    setTimeout(resetCopyButton, 2000);
  }
  
  // Helper function to reset copy button state
  function resetCopyButton() {
    copyText.textContent = 'Copy';
    copyIcon.classList.remove('hidden');
    checkIcon.classList.add('hidden');
  }
  
  // Toast notification functionality
  function showToast(title, message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-content">
        <h4>${title}</h4>
        <p>${message}</p>
      </div>
      <button class="toast-close">×</button>
    `;
    
    // Add toast to the body
    document.body.appendChild(toast);
    
    // Add styles for the toast
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      backgroundColor: 'white',
      color: '#333',
      padding: '1rem',
      borderRadius: 'var(--radius)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      maxWidth: '24rem',
      zIndex: '9999',
      opacity: '0',
      transform: 'translateY(1rem)',
      transition: 'opacity 0.3s ease, transform 0.3s ease'
    });
    
    // Add styles for close button
    const closeBtn = toast.querySelector('.toast-close');
    Object.assign(closeBtn.style, {
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      marginLeft: '1rem'
    });
    
    // Show toast with animation
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 10);
    
    // Auto remove toast after 3 seconds
    const timeout = setTimeout(() => {
      removeToast(toast);
    }, 3000);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
      clearTimeout(timeout);
      removeToast(toast);
    });
  }
  
  // Helper function to remove toast with animation
  function removeToast(toast) {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(1rem)';
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
