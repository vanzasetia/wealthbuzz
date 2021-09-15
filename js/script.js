(function () {
  'use strict';
  const getCurrentYear = () => {
    const yearDOM = document.querySelector('.js-year');
    const currentYear = new Date().getFullYear();
    yearDOM.textContent = currentYear;
  };
  document.addEventListener('DOMContentLoaded', getCurrentYear);
})();
