!function(c){var e={};function r(l){if(e[l])return e[l].exports;var t=e[l]={i:l,l:!1,exports:{}};return c[l].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=c,r.c=e,r.d=function(c,e,l){r.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:l})},r.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},r.t=function(c,e){if(1&e&&(c=r(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var t in c)r.d(l,t,function(e){return c[e]}.bind(null,t));return l},r.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return r.d(e,"a",e),e},r.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n\r\nconsole.log(`Cześć, na tej stronie znajdziesz informacje o moich projektach, mam nadzieję że Ci się podoba`);\r\nconsole.log(`hello, you can find here my projects, hope you like it :)`);\r\n\r\nconst list = document.querySelector(\'.projects__list--js\');\r\nconst script = document.querySelector(".projects-list__footer--script")\r\nconst demo = document.querySelector(".projects-list__footer--demo")\r\n\r\n\r\n\r\nfetch(\'https://api.github.com/users/waveex/repos?sort=updated&direction=desc\')\r\n  .then(resp => resp.json())\r\n  .then(resp => {\r\n    const repos = resp;\r\n\r\n\r\n    for (const repo of repos) {\r\n      const { description, html_url, name, homepage } = repo;\r\n     if( name !==  "waveex.github.io") {list.innerHTML += `\r\n      <li class="projects-list__item">\r\n      <img class="projects-list__img" src="../assets/img/github.svg" alt="" />\r\n      <a class="projects-list__link" a >${name}</a>\r\n      <p class="projects-list__link--description">${description ? description : "work in progress demo coming soon"}</p>\r\n      <div class=" projects-list__footer">\r\n<a href="${html_url}" target="_blank" rel="nofollow noreferrer"  class="projects-list__footer--script projects-list__footer--script-js">GITHUB</a>\r\n   ${\r\n     homepage ? `<a href="${homepage}" target="_blank" rel="nofollow noreferrer" class="projects-list__footer--demo projects-list__footer--demo-js">DEMO</a>` :\r\n     ``\r\n   }\r\n      </div>\r\n    </li>\r\n     `; }\r\n\r\n  }\r\n\r\n  })\r\n  .catch(err => {\r\n    console.log(err);\r\n  })\r\n\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOzs7QUFHYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGFBQWEsd0NBQXdDO0FBQ3JELHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0Msb0RBQW9ELGdFQUFnRTtBQUNwSDtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKGBDemXFm8SHLCBuYSB0ZWogc3Ryb25pZSB6bmFqZHppZXN6IGluZm9ybWFjamUgbyBtb2ljaCBwcm9qZWt0YWNoLCBtYW0gbmFkemllasSZIMW8ZSBDaSBzacSZIHBvZG9iYWApO1xyXG5jb25zb2xlLmxvZyhgaGVsbG8sIHlvdSBjYW4gZmluZCBoZXJlIG15IHByb2plY3RzLCBob3BlIHlvdSBsaWtlIGl0IDopYCk7XHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0LS1qcycpO1xyXG5jb25zdCBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RfX2Zvb3Rlci0tc2NyaXB0XCIpXHJcbmNvbnN0IGRlbW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RfX2Zvb3Rlci0tZGVtb1wiKVxyXG5cclxuXHJcblxyXG5mZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy93YXZlZXgvcmVwb3M/c29ydD11cGRhdGVkJmRpcmVjdGlvbj1kZXNjJylcclxuICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgY29uc3QgcmVwb3MgPSByZXNwO1xyXG5cclxuXHJcbiAgICBmb3IgKGNvbnN0IHJlcG8gb2YgcmVwb3MpIHtcclxuICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgaHRtbF91cmwsIG5hbWUsIGhvbWVwYWdlIH0gPSByZXBvO1xyXG4gICAgIGlmKCBuYW1lICE9PSAgXCJ3YXZlZXguZ2l0aHViLmlvXCIpIHtsaXN0LmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxsaSBjbGFzcz1cInByb2plY3RzLWxpc3RfX2l0ZW1cIj5cclxuICAgICAgPGltZyBjbGFzcz1cInByb2plY3RzLWxpc3RfX2ltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2l0aHViLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDxhIGNsYXNzPVwicHJvamVjdHMtbGlzdF9fbGlua1wiIGEgPiR7bmFtZX08L2E+XHJcbiAgICAgIDxwIGNsYXNzPVwicHJvamVjdHMtbGlzdF9fbGluay0tZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiBcIndvcmsgaW4gcHJvZ3Jlc3MgZGVtbyBjb21pbmcgc29vblwifTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cIiBwcm9qZWN0cy1saXN0X19mb290ZXJcIj5cclxuPGEgaHJlZj1cIiR7aHRtbF91cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9yZWZlcnJlclwiICBjbGFzcz1cInByb2plY3RzLWxpc3RfX2Zvb3Rlci0tc2NyaXB0IHByb2plY3RzLWxpc3RfX2Zvb3Rlci0tc2NyaXB0LWpzXCI+R0lUSFVCPC9hPlxyXG4gICAke1xyXG4gICAgIGhvbWVwYWdlID8gYDxhIGhyZWY9XCIke2hvbWVwYWdlfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIiBjbGFzcz1cInByb2plY3RzLWxpc3RfX2Zvb3Rlci0tZGVtbyBwcm9qZWN0cy1saXN0X19mb290ZXItLWRlbW8tanNcIj5ERU1PPC9hPmAgOlxyXG4gICAgIGBgXHJcbiAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICAgIGA7IH1cclxuXHJcbiAgfVxyXG5cclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);