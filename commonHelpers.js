(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();let s=document.querySelector(".leave-app-card-list"),d=document.querySelector(".leave-app-card-btn");function l(n){let e=n.getBoundingClientRect(),i=document.documentElement;return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||i.clientHeight)&&e.right<=(window.innerWidth||i.clientWidth)}l(s)?(s.children[0].style.opacity="1",s.children[1].style.opacity="1",s.children[2].style.opacity="1",d.style.opacity="1"):window.addEventListener("scroll",()=>{l(s)&&(s.classList.add("anim-fade-in"),d.classList.add("btn-anim"))});window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(e){e.stopPropagation()};window.submitted=!1;document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".form-app"),e=document.getElementById("popup"),i=document.getElementById("iframeHiddenConfirm");window.showPopup=function(){e.classList.remove("hidden"),e.style.display="flex"},window.closePopup=function(){e.classList.add("hidden"),e.style.display="none",n.reset()},i.onload=function(){window.submitted&&showPopup()},n.onsubmit=function(){window.submitted=!0}});document.addEventListener("DOMContentLoaded",function(){var n;function e(){if(window.innerWidth<=1280){if(!n){n=new Swiper(".swiper",{loop:!1,slidesPerView:1,breakpoints:{768:{slidesPerView:2}},pagination:{el:".swiper-pagination",clickable:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var i=document.querySelectorAll(".swiper .swiper-slide");i.forEach(function(r){r.setAttribute("role","listitem")})}}else n&&(n.destroy(!0,!0),n=null)}e(),window.addEventListener("resize",e)});
//# sourceMappingURL=commonHelpers.js.map