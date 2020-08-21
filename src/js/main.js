"use strict";


console.log(`Cześć, na tej stronie znajdziesz informacje o moich projektach, mam nadzieję że Ci się podoba`);
console.log(`hello, you can find here my projects, hope you like it :)`);




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
      <p class="projects-list__link--description">${description ? description : "brak opisu"}</p>
      <div class=" projects-list__footer">

        <a href="${html_url}" class="projects-list__footer--script projects-list__footer--script-js">GITHUB</a>
        <a href="${homepage}" class="projects-list__footer--demo projects-list__footer--demo-js">DEMO</a>
      </div>
    </li>
     `; }

  }

  })
  .catch(err => {
    console.log(err);
  })
const list = document.querySelector('.projects__list--js');
const script = document.querySelector(".projects-list__footer--script-js")
const demo = document.querySelector(".projects-list__footer--demo-js")
const skillsTitle = document.querySelector(".skills_container__title--js")
 console.log(demo);
console.log(script);





