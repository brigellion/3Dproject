(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),o=document.getElementById("timer-days"),l=e=>e<10?"0"+e:e;function c(){let e=(()=>{let e=(new Date("10 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.seconds>0&&(o.textContent=e.days,t.textContent=l(e.hours),n.textContent=l(e.minutes),r.textContent=l(e.seconds),e.timeRemaining<0&&clearInterval(a))}c();let a=setInterval(c,1e3)})(),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a"),n=document.querySelector('[href="#service-block"]'),r=document.querySelector("body"),o=t=>{e.classList.toggle("active-menu")};r.addEventListener("click",(r=>{if(!r.target.closest("menu")&&e.classList.contains("active-menu")&&(r.preventDefault(),o()),r.target.closest(".menu")&&(r.preventDefault(),o()),r.target.classList.contains("close-btn")&&(r.preventDefault(),o()),t.forEach((e=>{if(e===r.target){o();let t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"}),r.preventDefault()}})),r.target.closest("a")===n){let e=n.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),r.preventDefault()}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let n,r=0;const o=function(){n=requestAnimationFrame(o),r+=.02,e.style.display="block",e.style.opacity=r,r>1&&cancelAnimationFrame(n)};document.documentElement.clientWidth<768?t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})):t.forEach((e=>{e.addEventListener("click",(()=>{n=requestAnimationFrame(o)}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",r=0,cancelAnimationFrame(n))}))})(),(()=>{document.querySelector(".calc-block").querySelectorAll("input[type=text]").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}));const e=document.getElementById("form1").querySelector(".form-name"),t=document.getElementById("form1").querySelector(".form-email"),n=document.getElementById("form1").querySelector(".form-phone"),r=document.getElementById("form3").querySelector(".form-name"),o=document.getElementById("form3").querySelector(".form-email"),l=document.getElementById("form3").querySelector(".form-phone"),c=document.getElementById("form2").querySelector(".top-form"),a=document.getElementById("form2").querySelector(".form-email"),s=document.getElementById("form2").querySelector(".form-phone"),u=document.getElementById("form2").querySelector(".mess"),i=e=>{console.log("name"),e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-Я -]/,"")},m=e=>{console.log("email"),e.preventDefault(),e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/,"")},d=e=>{console.log("tel"),e.preventDefault(),e.target.value=e.target.value.replace(/[^()-\d]/,"")};e.addEventListener("input",i),t.addEventListener("input",m),n.addEventListener("input",d),r.addEventListener("input",i),o.addEventListener("input",m),l.addEventListener("input",d),c.addEventListener("input",i),u.addEventListener("input",i),a.addEventListener("input",m),s.addEventListener("input",d)})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();