document.fonts.ready.then(() => {
    document.getElementById('title').style.bottom = '0px'
    document.getElementById('subtitle').style.bottom = '0px'
    function updateClassElements() {
      var elements = document.getElementsByClassName('navbutton');
  
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.top = '0rem';
        // You can perform other actions as needed
      }
    }
  
    // Call the function to update elements when the DOM is loaded
    updateClassElements();
  });