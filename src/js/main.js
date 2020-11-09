"use strict";


console.log(`Cześć, na tej stronie znajdziesz informacje o moich projektach, mam nadzieję że Ci się podoba`);
console.log(`hello, you can find here my projects, hope you like it :)`);

const list = document.querySelector('.projects__list--js');
const script = document.querySelector(".projects-list__footer--script")
const demo = document.querySelector(".projects-list__footer--demo")



fetch('https://api.github.com/users/waveex/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;


    for (const repo of repos) {
      const { description, html_url, name, homepage } = repo;
     if( name !==  "waveex.github.io") {list.innerHTML += `
      <li class="projects-list__item">
      <img class="projects-list__img" src="../assets/img/github.svg" alt="" />
      <a class="projects-list__link" a >${name}</a>
      <p class="projects-list__link--description">${description ? description : "work in progress demo coming soon"}</p>
      <div class=" projects-list__footer">
<a href="${html_url}" target="_blank" rel="nofollow noreferrer"  class="projects-list__footer--script projects-list__footer--script-js">GITHUB</a>
   ${
     homepage ? `<a href="${homepage}" target="_blank" rel="nofollow noreferrer" class="projects-list__footer--demo projects-list__footer--demo-js">DEMO</a>` :
     ''
   }
      </div>
    </li>
     `; }

  }

  })
  .catch(err => {
    console.log(err);
  })






