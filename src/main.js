import './style.css'

// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all bento items
  const bentoItems = document.querySelectorAll('.bento-item');
  bentoItems.forEach(item => {
    observer.observe(item);
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Smooth scroll for hero scroll button
  const heroScroll = document.querySelector('.hero-scroll');
  if (heroScroll) {
    heroScroll.addEventListener('click', () => {
      const bentoGrid = document.querySelector('.bento-grid');
      if (bentoGrid) {
        bentoGrid.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  // Enhanced hover effects for bento items
  bentoItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px) scale(1.03)';
      
      // Add subtle glow effect
      this.style.boxShadow = `
        0 25px 50px rgba(0, 0, 0, 0.2),
        0 12px 24px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.1)
      `;
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = `
        0 8px 32px rgba(0, 0, 0, 0.1),
        0 2px 8px rgba(0, 0, 0, 0.05)
      `;
    });
  });

  // Staggered animation for bento items
  bentoItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  // Hero animations are now handled by CSS

  // Interactive cursor effect
  let mouseX = 0;
  let mouseY = 0;
  let isHovering = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Add custom cursor for bento items
  bentoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      isHovering = true;
      document.body.style.cursor = 'none';
      createCustomCursor();
    });

    item.addEventListener('mouseleave', () => {
      isHovering = false;
      document.body.style.cursor = 'default';
      removeCustomCursor();
    });
  });

  function createCustomCursor() {
    if (document.querySelector('.custom-cursor')) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: rgba(102, 126, 234, 0.8);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', updateCursor);
  }

  function removeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.remove();
      document.removeEventListener('mousemove', updateCursor);
    }
  }

  function updateCursor(e) {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    }
  }

  // Add subtle background animation
  function createFloatingShapes() {
    const shapes = ['circle', 'triangle', 'square'];
    const colors = ['rgba(102, 126, 234, 0.1)', 'rgba(255, 182, 193, 0.1)', 'rgba(173, 216, 230, 0.1)'];
    
    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.style.cssText = `
        position: fixed;
        width: ${Math.random() * 100 + 50}px;
        height: ${Math.random() * 100 + 50}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        pointer-events: none;
        z-index: 0;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
        opacity: 0.3;
      `;
      document.body.appendChild(shape);
    }
  }

  createFloatingShapes();

  // Add CSS for floating shapes animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
      100% { transform: translateY(0px) rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Hero content animations are now handled by CSS

  // Add loading animation
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
});

// Add loaded class styles
const loadedStyles = document.createElement('style');
loadedStyles.textContent = `
  body {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  body.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(loadedStyles);