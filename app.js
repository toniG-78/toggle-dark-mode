const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

/* 
 * Option 1 ----
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  body.classList.toggle("dark-theme");
}

toggleTheme_btn.addEventListener("click", function () {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "savedTheme");
  } else {
    localStorage.removeItem("currentTheme");
  }
}); */

//* Option 2 ----
const darkTheme = localStorage.getItem("darkTheme");
if (darkTheme) {
  body.classList.add("dark-theme");
}

const enableDarkMode = () => {
  body.classList.add("dark-theme");
  localStorage.setItem("darkTheme", "saved");
};
const disableDarkMode = () => {
  body.classList.remove("dark-theme");
  localStorage.removeItem("darkTheme");
};

toggleBtn.addEventListener("click", () => {
  const darkTheme = localStorage.getItem("darkTheme");
  if (darkTheme) {
    disableDarkMode();
    toggleBtn.classList.add("rotate");
  } else {
    enableDarkMode();
    toggleBtn.classList.remove("rotate");
  }
});
