// Common Footer Component
(function() {
  const footerHTML = `
    <div class="footer_end">
      <div class="container">
        <div class="row">
          <div class="col-sm-6"> <span class="sub"> © Copyright Indus Routes 2025</span> </div>
        </div>
      </div>
    </div>
  `;

  // Find the footer placeholder and replace it
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
})();

