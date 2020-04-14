"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Cześć, na tej stronie znajdziesz informacje o moich projektach, mam nadzieję że Ci się podoba`);
console.log(`hello, you can find here my projects, hope you like it :)`);

const list = document.querySelector('.projects__list--js');

fetch('https://api.github.com/users/waveex/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const { description, html_url, name } = repo;
      list.innerHTML += `
      <li class="projects-list__item">
      <img src="../assets/img/github.svg" alt="" />
      <a class="projects-list__link" href="${html_url}">${name}</a>
      <p class="projects-list__description">${description ? description : "brak opisu"}</p>
      <div class=" projects-list__footer">
        <button class="projects-list__footer--demo">DEMO</button>
        <button class="projects-list__footer--sript">GITHUB</button>
      </div>
    </li>
     `;
    }
  })
  .catch(err => {
    console.log(err);
  })
