document.addEventListener('DOMContentLoaded', function() {
    const headerLinks = document.querySelectorAll('.header-link');
    const pageContents = document.querySelectorAll('.page-content');
  
    headerLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').replace('telas/', '');
        showPage(targetId);
      });
    });
  
    function showPage(targetId) {
      pageContents.forEach(content => {
        if (content.id === targetId + '-content') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    }
  });
  