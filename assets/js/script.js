"use strict";const delay=e=>new Promise(t=>setTimeout(t,e)),elementToggleFunc=function(e){e.classList.toggle("active")};$.getJSON("https://api.ipify.org?format=json",function(e){$("#ip").html(e.ip),console.log("Ip pulled: "),console.log(e.ip)});const sidebar=document.querySelector("[data-sidebar]"),sidebarBtn=document.querySelector("[data-sidebar-btn]");sidebarBtn.addEventListener("click",function(){elementToggleFunc(sidebar)});const projectsItem=document.querySelectorAll("[data-projects-item]"),modalContainer=document.querySelector("[data-modal-container]"),modalCloseBtn=document.querySelector("[data-modal-close-btn]"),overlay=document.querySelector("[data-overlay]"),modalImg=document.querySelector("[data-modal-img]"),modalTitle=document.querySelector("[data-modal-title]"),modalText=document.querySelector("[data-modal-text]"),projectsModalFunc=function(){modalContainer.classList.toggle("active"),overlay.classList.toggle("active")};for(let i=0;i<projectsItem.length;i++)projectsItem[i].addEventListener("click",function(){modalImg.src=this.querySelector("[data-projects-avatar]").src,modalImg.alt=this.querySelector("[data-projects-avatar]").alt,modalTitle.innerHTML=this.querySelector("[data-projects-title]").innerHTML,modalText.innerHTML=this.querySelector("[data-projects-text]").innerHTML,projectsModalFunc()});const select=document.querySelector("[data-select]"),selectItems=document.querySelectorAll("[data-select-item]"),selectValue=document.querySelector("[data-selecct-value]"),filterBtn=document.querySelectorAll("[data-filter-btn]");for(let i=0;i<selectItems.length;i++)selectItems[i].addEventListener("click",function(){let e=this.innerText.toLowerCase();selectValue.innerText=this.innerText,elementToggleFunc(select),filterFunc(e)});const filterItems=document.querySelectorAll("[data-filter-item]"),filterFunc=function(e){for(let t=0;t<filterItems.length;t++)"all"===e?filterItems[t].classList.add("active"):e===filterItems[t].dataset.category?filterItems[t].classList.add("active"):filterItems[t].classList.remove("active")};let lastClickedBtn=filterBtn[0];for(let i=0;i<filterBtn.length;i++)filterBtn[i].addEventListener("click",function(){let e=this.innerText.toLowerCase();selectValue.innerText=this.innerText,filterFunc(e),lastClickedBtn.classList.remove("active"),this.classList.add("active"),lastClickedBtn=this});const form=document.querySelector("[data-form]"),formInputs=document.querySelectorAll("[data-form-input]"),formBtn=document.querySelector("[data-form-btn]");for(let i=0;i<formInputs.length;i++)formInputs[i].addEventListener("input",function(){form.checkValidity()?formBtn.removeAttribute("disabled"):formBtn.setAttribute("disabled","")});const navigationLinks=document.querySelectorAll("[data-nav-link]"),pages=document.querySelectorAll("[data-page]");for(let i=0;i<navigationLinks.length;i++)navigationLinks[i].addEventListener("click",function(){for(let e=0;e<pages.length;e++)this.innerHTML.toLowerCase()===pages[e].dataset.page?(pages[e].classList.add("active"),navigationLinks[e].classList.add("active"),window.scrollTo(0,0)):(pages[e].classList.remove("active"),navigationLinks[e].classList.remove("active"))});
