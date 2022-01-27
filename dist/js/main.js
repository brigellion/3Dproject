(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function r(l){let a=(l-n)/o;a>1&&(a=1);let c=e(a);t(c),a<1&&requestAnimationFrame(r)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");n.style.color="#ffffff";try{if(!o)throw new Error("Верните форму на место");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),r=new FormData(o),l={};var a;n.textContent="",n.classList.add("sk-pulse"),o.append(n),r.forEach(((e,t)=>{l[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:"input"===e.type&&(l[e.id]=t.value)})),(e=>{let t,o=!0;for(let n=0;n<e.length;n++)if("user_phone"===e[n].name){if(t=/[^\d() \- +]/,t.test(e[n].value)){o=!1;break}}else if("user_name"===e[n].name){if(t=/[^А-Яа-я\s]/,t.test(e[n].value)){o=!1;break}}else if("user_message"===e[n].name&&(t=/[^А-Яа-я0-9\?\.\,\!\s]/,t.test(e[n].value))){o=!1;break}return o})(e)?(a=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.value=""}))})).then((e=>{n.classList.remove("sk-pulse"),n.textContent="Спасибо! Наш менеджер с вами свяжется"})).catch((e=>{n.classList.remove("sk-pulse"),n.textContent="Ошибка..."})):(alert("Данные не валидны"),n.classList.remove("sk-pulse"))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),r=document.getElementById("timer-days"),l=e=>e<10?"0"+e:e;function a(){let e=(()=>{let e=(new Date("10 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.seconds>0&&(r.textContent=e.days,t.textContent=l(e.hours),o.textContent=l(e.minutes),n.textContent=l(e.seconds),e.timeRemaining<0&&clearInterval(c))}a();let c=setInterval(a,1e3)})(),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a"),o=document.querySelector('[href="#service-block"]'),n=document.querySelector("body"),r=t=>{e.classList.toggle("active-menu")};n.addEventListener("click",(n=>{if(!n.target.closest("menu")&&e.classList.contains("active-menu")&&(n.preventDefault(),r()),n.target.closest(".menu")&&(n.preventDefault(),r()),n.target.classList.contains("close-btn")&&(n.preventDefault(),r()),t.forEach((e=>{if(e===n.target){r();let t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"}),n.preventDefault()}})),n.target.closest("a")===o){let e=o.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),n.preventDefault()}}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn");document.documentElement.clientWidth<768?o.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block"}))})):o.forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=e}})}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{document.querySelector(".calc-block").querySelectorAll("input[type=text]").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}));const e=document.getElementById("form1").querySelector(".form-name"),t=document.getElementById("form1").querySelector(".form-email"),o=document.getElementById("form1").querySelector(".form-phone"),n=document.getElementById("form3").querySelector(".form-name"),r=document.getElementById("form3").querySelector(".form-email"),l=document.getElementById("form3").querySelector(".form-phone"),a=document.getElementById("form2").querySelector(".top-form"),c=document.getElementById("form2").querySelector(".form-email"),s=document.getElementById("form2").querySelector(".form-phone"),i=document.getElementById("form2").querySelector(".mess"),d=e=>{console.log("name"),e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-Я -]/,"")},u=e=>{console.log("email"),e.preventDefault(),e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/,"")},m=e=>{console.log("tel"),e.preventDefault(),e.target.value=e.target.value.replace(/[^()-\d]/,"")};e.addEventListener("input",d),t.addEventListener("input",u),o.addEventListener("input",m),n.addEventListener("input",d),r.addEventListener("input",u),l.addEventListener("input",m),a.addEventListener("input",d),i.addEventListener("input",d),c.addEventListener("input",u),s.addEventListener("input",m)})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t,o="portfolio-item-active",n="dot-active")=>{const r=document.querySelector(e),l=document.querySelectorAll(t);if(!r||0==l.length)return void console.warn("класс слайдера/слайдов не найден");const a=document.querySelector(".portfolio-dots");let c,s=0;const i=(()=>{if(l.length>=1){for(let e=0;e<l.length;e++){let t=document.createElement("li");0==e?t.classList.add("dot",n):t.classList.add("dot"),a.appendChild(t)}return document.querySelectorAll(".dot")}console.warn("пустой слайдер")})(),d=(e,t,o)=>{e[t].classList.remove(o)},u=(e,t,o)=>{e[t].classList.add(o)},m=()=>{d(l,s,o),d(i,s,n),s++,s>=l.length&&(s=0),u(l,s,o),u(i,s,n)},f=(e=1500)=>{c=setInterval(m,e)};r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(d(l,s,o),d(i,s,n),e.target.matches("#arrow-right")?s++:e.target.matches("#arrow-left")?s--:e.target.classList.contains("dot")&&i.forEach(((t,o)=>{e.target===t&&(s=o)})),s>=l.length&&(s=0),s<0&&(s=l.length-1),u(l,s,o),u(i,s,n))})),r.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),r.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&f(2e3)}),!0),f(2e3)})(".portfolio-content",".portfolio-item"),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total");var s;o.addEventListener("input",(s=o=>{o.target!==n&&o.target!==r&&o.target!==l&&o.target!==a||(()=>{const o=+n.options[n.selectedIndex].value,s=r.value;let i=0,d=1,u=1;if(""==o&&(c.textContent=0),l.value>1&&(d+=+l.value/10),a.value&&a.value<5?u=2:a.value&&a.value<10&&(u=1.5),i=n.value&&r.value?t*o*s*d*u:0,i>0){let t=+c.textContent;if(c.textContent<i){let o=i-c.textContent;e({duration:1e3,timing:e=>e,draw(e){c.textContent=t+Math.round(o*e)}})}else{let o=+c.textContent-i;e({duration:1e3,timing:e=>e,draw(e){c.textContent=t-Math.round(o*e)}})}}})()},500,function(e){let t=this.lastCall;this.lastCall=Date.now(),t&&this.lastCall-t<=500&&clearTimeout(this.lastCallTimer),this.lastCallTimer=setTimeout((()=>s(e)),500)}))})(100),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();