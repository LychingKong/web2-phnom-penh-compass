const tabDos = document.getElementById("tab-dos");
const tabDonts = document.getElementById("tab-donts");

const dosContent = document.getElementById("dos-content");
const dontsContent = document.getElementById("donts-content");

const box = document.getElementById("content-box");

/* DEFAULT (GREEN) */
box.style.backgroundColor = "#d6ece2";

tabDos.onclick = () => {
  dosContent.classList.remove("hidden");
  dontsContent.classList.add("hidden");

  box.style.backgroundColor = "#d6ece2";
};

tabDonts.onclick = () => {
  dosContent.classList.add("hidden");
  dontsContent.classList.remove("hidden");

  box.style.backgroundColor = "#fcd9d8";
};

