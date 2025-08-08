const languageSelect = document.getElementById("language-select");
const countrySelect = document.getElementById("country-select");
const proceedBtn = document.getElementById("proceed-btn");

const loadingScreen = document.getElementById("loading-screen");
const welcomeScreen = document.getElementById("welcome-screen");

// 🌐 Languages with language-specific fonts (simplified)
const languages = [
  { name: "English", font: "'Segoe UI', sans-serif" },
  { name: "French", font: "'Arial', sans-serif" },
  { name: "Arabic", font: "'Amiri', serif" },
  { name: "Hindi", font: "'Noto Sans Devanagari', sans-serif" },
  { name: "Chinese", font: "'Noto Sans SC', sans-serif" },
  { name: "Zulu", font: "'Segoe UI', sans-serif" },
  { name: "Swahili", font: "'Segoe UI', sans-serif" },
  { name: "Portuguese", font: "'Verdana', sans-serif" }
];

// Dynamically add all countries
const countries = [
  "US", "ZA", "NG", "KE", "IN", "BR", "CN", "FR", "EG", "GH"
];


// Populate language select
languages.forEach(lang => {
  const option = document.createElement("option");
  option.value = lang.font;
  option.textContent = lang.name;
  languageSelect.appendChild(option);
});

// Populate country select
countries.forEach(code => {
  const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(code);
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  countrySelect.appendChild(option);
});

// Change font on language selection
languageSelect.addEventListener("change", (e) => {
  document.body.style.fontFamily = e.target.value;
});

// Proceed button logic
proceedBtn.addEventListener("click", () => {
  const language = languageSelect.options[languageSelect.selectedIndex].text;
  const country = countrySelect.value;

  if (!language || !country) {
    alert("Please select both language and country.");
    return;
  }

  localStorage.setItem("selectedLanguage", language);
  localStorage.setItem("selectedCountry", country);

  window.location.href = "dashboard.html";
});

// Simulate loading delay, then show welcome
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
  }, 3500); // 3.5 sec loading
});
