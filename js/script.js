const yearDOM = document.querySelector(".js-year")

document.addEventListener("DOMContentLoaded", getCurrentYear)

function getCurrentYear() {
  const currentYear = new Date().getFullYear()
  yearDOM.textContent = currentYear
}