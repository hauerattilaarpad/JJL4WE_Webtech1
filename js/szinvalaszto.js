function toggleColorPicker() {
    var colorPicker = document.getElementById('colorPicker');
    colorPicker.style.display = (colorPicker.style.display === 'block') ? 'none' : 'block';
  }
  
  function changeBackgroundColor(value) {
    document.body.style.backgroundColor = value;
  }
  