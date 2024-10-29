// script.js

// Define light and dark theme colors
const lightTheme = {
    '--bg-color': '#ffffff',
    '--text-color': '#333333',
    '--slider-bg-color': '#ccc',
    '--slider-active-bg-color': '#2196F3',
  };
  
  const darkTheme = {
    '--bg-color': '#333333',
    '--text-color': '#ffffff',
    '--slider-bg-color': '#666',
    '--slider-active-bg-color': '#fbc02d',
  };
  
  // Function to apply a theme
  function applyTheme(theme) {
    for (const variable in theme) {
      document.documentElement.style.setProperty(variable, theme[variable]);
    }
  }
  
  // Toggle between themes
  const toggleSwitch = document.getElementById("theme-toggle");
  
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      applyTheme(darkTheme);
    } else {
      applyTheme(lightTheme);
    }
  });
  
  // Apply the default theme on load
  applyTheme(lightTheme);