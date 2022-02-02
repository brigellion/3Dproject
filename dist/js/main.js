(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function r(l){let a=(l-n)/o;a>1&&(a=1);let s=e(a);t(s),a<1&&requestAnimationFrame(r)}))},t=({formId:e,someElem:t=[]})=>{const o=document.querySelector(".popup"),n=document.getElementById(e),r=document.createElement("div");function l(e){e.style.border="2px solid red",setTimeout((()=>{e.style.border=""}),2e3)}r.style.color="#ffffff";try{if(!n)throw new Error("Верните форму на место");n.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=n.querySelectorAll("input"),a=new FormData(n),s={};let c=!1;var i;r.textContent="",a.forEach(((e,t)=>{s[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?(s[e.id]=t.textContent,0==t.textContent&&(c=!0)):"input"===e.type&&(s[e.id]=t.value,0==t.value&&(c=!0))})),r.classList.add("sk-pulse"),n.append(r),(e=>{let t,o=!0;for(let n=0;n<e.length;n++)if("user_phone"===e[n].name){if(t=/^\+?(?:[()-]*\d){4,11}[()-]*$/,!t.test(e[n].value)){l(e[n]),o=!1;break}}else if("user_name"===e[n].name){if(t=/^[а-яА-ЯЁ-ё][а-яА-ЯЁ-ё\s]{1,}$/,!t.test(e[n].value)){l(e[n]),o=!1;break}}else if("user_message"===e[n].name){if(t=/[^А-Яа-я0-9\?\.\,\!\-\s]/,t.test(e[n].value)||""==e[n].value){l(e[n]),o=!1;break}}else if("user_email"===e[n].name&&""==e[n].value){l(e[n]),o=!1;break}return o})(e)?c?(r.classList.remove("sk-pulse"),r.textContent="Воспользуйтесь калькулятором!",setTimeout((()=>{n.removeChild(r)}),3e3)):(i=s,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.value=""}))})).then((e=>{r.classList.remove("sk-pulse"),r.textContent="Спасибо! Наш менеджер с вами свяжется",new Promise((e=>{setTimeout((()=>{n.removeChild(r),e()}),2e3)})).then((e=>{o.style.display="none"}))})).catch((e=>{r.classList.remove("sk-pulse"),r.textContent="Ошибка...",setTimeout((()=>{n.removeChild(r)}),3e3)})):r.classList.remove("sk-pulse")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),r=document.getElementById("timer-days"),l=e=>e<10?"0"+e:e;function a(){let e=(()=>{let e=(new Date("10 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.seconds>=0&&(r.textContent=e.days,t.textContent=l(e.hours),o.textContent=l(e.minutes),n.textContent=l(e.seconds),e.timeRemaining<0&&clearInterval(s))}a();let s=setInterval(a,500)})(),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a"),o=document.querySelector('[href="#service-block"]'),n=document.querySelector("body"),r=t=>{e.classList.toggle("active-menu")};n.addEventListener("click",(n=>{if(!n.target.closest("menu")&&e.classList.contains("active-menu")&&(n.preventDefault(),r()),n.target.closest(".menu")&&(n.preventDefault(),r()),n.target.classList.contains("close-btn")&&(n.preventDefault(),r()),t.forEach((e=>{if(e===n.target){r();let t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"}),n.preventDefault()}})),n.target.closest("a")===o){let e=o.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),n.preventDefault()}}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn");document.documentElement.clientWidth<768?o.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block"}))})):o.forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=e}})}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{document.querySelector(".calc-block").querySelectorAll("input[type=text]").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}));const e=document.getElementById("form1").querySelector(".form-name"),t=document.getElementById("form1").querySelector(".form-email"),o=document.getElementById("form1").querySelector(".form-phone"),n=document.getElementById("form3").querySelector(".form-name"),r=document.getElementById("form3").querySelector(".form-email"),l=document.getElementById("form3").querySelector(".form-phone"),a=document.getElementById("form2").querySelector(".top-form"),s=document.getElementById("form2").querySelector(".form-email"),c=document.getElementById("form2").querySelector(".form-phone"),i=document.getElementById("form2").querySelector(".mess"),d=e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-ЯЁ-ё -]/,"")},u=e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/,"")},m=e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^\+()-\d]/,"")};e.addEventListener("input",d),t.addEventListener("input",u),o.addEventListener("input",m),n.addEventListener("input",d),r.addEventListener("input",u),l.addEventListener("input",m),a.addEventListener("input",d),i.addEventListener("input",d),s.addEventListener("input",u),c.addEventListener("input",m)})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t,o="portfolio-item-active",n="dot-active")=>{const r=document.querySelector(e),l=document.querySelectorAll(t);if(!r||0==l.length)return void console.warn("класс слайдера/слайдов не найден");const a=document.querySelector(".portfolio-dots");let s,c=0;const i=(()=>{if(l.length>=1){for(let e=0;e<l.length;e++){let t=document.createElement("li");0==e?t.classList.add("dot",n):t.classList.add("dot"),a.appendChild(t)}return document.querySelectorAll(".dot")}console.warn("пустой слайдер")})(),d=(e,t,o)=>{e[t].classList.remove(o)},u=(e,t,o)=>{e[t].classList.add(o)},m=()=>{d(l,c,o),d(i,c,n),c++,c>=l.length&&(c=0),u(l,c,o),u(i,c,n)},f=(e=1500)=>{s=setInterval(m,e)};r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(d(l,c,o),d(i,c,n),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&i.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=l.length&&(c=0),c<0&&(c=l.length-1),u(l,c,o),u(i,c,n))})),r.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(s)}),!0),r.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&f(2e3)}),!0),f(2e3)})(".portfolio-content",".portfolio-item"),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),s=document.getElementById("total");var c;o.addEventListener("input",(c=o=>{o.target!==n&&o.target!==r&&o.target!==l&&o.target!==a||(()=>{const o=+n.options[n.selectedIndex].value,c=r.value;let i=0,d=1,u=1;if(""==o&&(s.textContent=0),l.value>1&&(d+=+l.value/10),a.value&&a.value<5?u=2:a.value&&a.value<10&&(u=1.5),i=n.value&&r.value?t*o*c*d*u:0,i>0){let t=+s.textContent;if(s.textContent<i){let o=i-s.textContent;e({duration:1e3,timing:e=>e,draw(e){s.textContent=t+Math.round(o*e)}})}else{let o=+s.textContent-i;e({duration:1e3,timing:e=>e,draw(e){s.textContent=t-Math.round(o*e)}})}}})()},500,function(e){let t=this.lastCall;this.lastCall=Date.now(),t&&this.lastCall-t<=500&&clearTimeout(this.lastCallTimer),this.lastCallTimer=setTimeout((()=>c(e)),500)}))})(100),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();