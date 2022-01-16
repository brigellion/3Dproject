(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),r=document.getElementById("timer-days"),l=e=>e<10?"0"+e:e;function c(){let e=(()=>{let e=(new Date("10 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.seconds>0&&(r.textContent=e.days,t.textContent=l(e.hours),o.textContent=l(e.minutes),n.textContent=l(e.seconds),e.timeRemaining<0&&clearInterval(a))}c();let a=setInterval(c,1e3)})(),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a"),o=document.querySelector('[href="#service-block"]'),n=document.querySelector("body"),r=t=>{e.classList.toggle("active-menu")};n.addEventListener("click",(n=>{if(!n.target.closest("menu")&&e.classList.contains("active-menu")&&(n.preventDefault(),r()),n.target.closest(".menu")&&(n.preventDefault(),r()),n.target.classList.contains("close-btn")&&(n.preventDefault(),r()),t.forEach((e=>{if(e===n.target){r();let t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"}),n.preventDefault()}})),n.target.closest("a")===o){let e=o.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),n.preventDefault()}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let o,n=0;const r=function(){o=requestAnimationFrame(r),n+=.02,e.style.display="block",e.style.opacity=n,n>1&&cancelAnimationFrame(o)};document.documentElement.clientWidth<768?t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})):t.forEach((e=>{e.addEventListener("click",(()=>{o=requestAnimationFrame(r)}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",n=0,cancelAnimationFrame(o))}))})(),(()=>{document.querySelector(".calc-block").querySelectorAll("input[type=text]").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}));const e=document.getElementById("form1").querySelector(".form-name"),t=document.getElementById("form1").querySelector(".form-email"),o=document.getElementById("form1").querySelector(".form-phone"),n=document.getElementById("form3").querySelector(".form-name"),r=document.getElementById("form3").querySelector(".form-email"),l=document.getElementById("form3").querySelector(".form-phone"),c=document.getElementById("form2").querySelector(".top-form"),a=document.getElementById("form2").querySelector(".form-email"),s=document.getElementById("form2").querySelector(".form-phone"),i=document.getElementById("form2").querySelector(".mess"),d=e=>{console.log("name"),e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-Я -]/,"")},m=e=>{console.log("email"),e.preventDefault(),e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/,"")},u=e=>{console.log("tel"),e.preventDefault(),e.target.value=e.target.value.replace(/[^()-\d]/,"")};e.addEventListener("input",d),t.addEventListener("input",m),o.addEventListener("input",u),n.addEventListener("input",d),r.addEventListener("input",m),l.addEventListener("input",u),c.addEventListener("input",d),i.addEventListener("input",d),a.addEventListener("input",m),s.addEventListener("input",u)})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");e&&0!=t.length&&((e,t,o="portfolio-item-active",n="dot-active")=>{const r=document.querySelector(".portfolio-dots");let l,c=0;const a=(()=>{if(t.length>=1){for(let e=0;e<t.length;e++){let t=document.createElement("li");0==e?t.classList.add("dot",n):t.classList.add("dot"),r.appendChild(t)}return document.querySelectorAll(".dot")}alert("пустой слайдер")})(),s=(e,t,o)=>{e[t].classList.remove(o)},i=(e,t,o)=>{e[t].classList.add(o)},d=()=>{s(t,c,o),s(a,c,n),c++,c>=t.length&&(c=0),i(t,c,o),i(a,c,n)},m=(e=1500)=>{l=setInterval(d,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(s(t,c,o),s(a,c,n),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),i(t,c,o),i(a,c,n))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&m(2e3)}),!0),m(2e3)})(e,t)})()})();