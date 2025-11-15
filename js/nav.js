// Common Navigation Component
(function() {
  const navHTML = `
    <header class="simple_menu">
      <div class="logo"><a href="index.html"><b>Indus Routes</b></a> </div>
      <div class="header_btns_wrapper">
        <div class="main_menu"><i class="ti-menu"></i></div>
        <div class="sub_menu">
          <div class="sub_cont">
            <ul>
              <li><a href="index.html">Home</a> </li>
              <li><a href="what-we-do.html">What We Do</a></li>
              <li class="no_arrow"><a href="#" class="parents"> Destinations </a>
                <ul class="mega_menu">
                  <li class="mega_sub">
                    <ul>
                      <li><a href="assam.html">Guwahati, Assam </a></li>
                      <li><a href="delhi.html">Delhi </a></li>
                      <li><a href="vrindavan.html">Vrindavan</a></li>
                      <li><a href="nashik.html">Nashik</a></li>
                      <li><a href="shirdi.html">Shirdi</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="map.html">Route Map</a></li>
              <li><a href="itinerary.html">Itinerary</a></li>
              <li><a href="contact.html" >Contact Us</a> </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#page" class="up_block go"><i class="fa fa-angle-up"></i></a> 
    </header>
  `;

  // Find the nav placeholder and replace it
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = navHTML;
    
    // Add scroll hide/show functionality
    let lastScrollTop = 0;
    const header = document.querySelector('header.simple_menu');
    const scrollThreshold = 100; // Hide after scrolling 100px
    
    if (header) {
      // Add CSS for smooth transition
      const style = document.createElement('style');
      style.textContent = `
        header.simple_menu {
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out !important;
        }
        header.simple_menu.hidden {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
      
      window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only hide/show if scrolled past threshold
        if (scrollTop > scrollThreshold) {
          if (scrollTop > lastScrollTop) {
            // Scrolling down - hide header
            header.classList.add('hidden');
          } else {
            // Scrolling up - show header
            header.classList.remove('hidden');
          }
        } else {
          // At top of page - always show header
          header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }, false);
    }
  }
})();

