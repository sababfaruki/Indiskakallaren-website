document.getElementById('mobile-menu-button').onclick = function() {
    var menu = document.getElementById('mobile-menu');
    var iconMenu = document.getElementById('icon-menu');
    var iconClose = document.getElementById('icon-close');
    
    // Toggle the menu visibility
    if (menu.classList.contains('menu-closed')) {
      menu.classList.remove('menu-closed');
      menu.classList.add('menu-open');
      iconMenu.classList.add('hidden');
      iconClose.classList.remove('hidden');
    } else {
      menu.classList.remove('menu-open');
      menu.classList.add('menu-closed');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  };
  