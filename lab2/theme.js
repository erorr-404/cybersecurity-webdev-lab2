const iconLight = "☀️";
const iconDark = "🌙";

const themeBtn = document.querySelector("#theme-btn");
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  console.log("Theme set to", theme);
}

function setThemeButtonIcon(icon) {
  themeBtn.textContent = icon;
}

function setLightTheme() {
  setTheme("light");
  setThemeButtonIcon(iconLight);
}

function setDarkTheme() {
  setTheme("dark");
  setThemeButtonIcon(iconDark);
}

function setAutoTheme() {
  const currentHour = new Date().getHours();

  if (7 <= currentHour < 21) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

function toggleTheme() {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

setAutoTheme();
themeBtn.addEventListener("click", toggleTheme);
