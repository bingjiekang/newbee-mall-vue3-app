import{u as B,B as P,c as w,a as k,r as O,P as N,O as R,L as I,T as q,I as z,S as D,b as G,d as M}from"./index-cb802f07.js";import{c as S,t as F,d as $,a as d,F as V,m as H,w as E,b as K,u as W,r as j,o as J,e as Q,f as U,R as X}from"./_plugin-vue_export-helper-cae794e0.js";import{A as Y,a as Z}from"./index-3a89f443.js";import{A as ee}from"./index-550deaf3.js";import{D as te}from"./index-aa276faf.js";import{D as re}from"./index-fb5b1fb5.js";import{C as L}from"./index-6b0f6e36.js";import{F as ie}from"./index-94405da2.js";import{A as ae}from"./index-326d6132.js";import{A as se}from"./index-773aad48.js";import{F as ne}from"./index-f1cdf990.js";import{S as oe,a as le,b as ce,C as de,c as ue}from"./index-20915dc6.js";import{C as me}from"./index-9de46ee7.js";import{B as fe}from"./index-968a7cf8.js";import{P as pe,L as ve}from"./index-e173efcc.js";import{T as he,a as be}from"./index-7c6e04a7.js";import"./use-placeholder-36b6b197.js";import"./use-route-7443569a.js";import"./index-f7760dca.js";import"./Checker-e857c1e9.js";import"./use-id-cc124f28.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const[ge,_]=S("cell-group"),xe={title:String,inset:Boolean,border:F};var ye=$({name:ge,inheritAttrs:!1,props:xe,setup(e,{slots:n,attrs:i}){const a=()=>{var s;return d("div",H({class:[_({inset:e.inset}),{[P]:e.border&&!e.inset}]},i,B()),[(s=n.default)==null?void 0:s.call(n)])},t=()=>d("div",{class:_("title",{inset:e.inset})},[n.title?n.title():e.title]);return()=>e.title||n.title?d(V,null,[t(),a()]):a()}});const Ce=E(ye),[_e,A,h]=S("contact-card"),Ae={tel:String,name:String,type:K("add"),addText:String,editable:F};var Se=$({name:_e,props:Ae,emits:["click"],setup(e,{emit:n}){const i=t=>{e.editable&&n("click",t)},a=()=>e.type==="add"?e.addText||h("addContact"):[d("div",null,[`${h("name")}：${e.name}`]),d("div",null,[`${h("tel")}：${e.tel}`])];return()=>d(L,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:A([e.type]),border:!1,isLink:e.editable,titleClass:A("title"),onClick:i},{title:a})}});const Fe=E(Se);const $e={id:"app"},Ee={__name:"App",setup(e){const n=W(),i=j({transitionName:"slide-left"});return n.beforeEach((a,t)=>{a.meta.index>t.meta.index?i.transitionName="slide-left":a.meta.index<t.meta.index?i.transitionName="slide-right":i.transitionName=""}),(a,t)=>(J(),Q("div",$e,[d(U(X),{class:"router-view"})]))}};(function(e,n){var i=e.document,a=i.documentElement,t=i.querySelector('meta[name="viewport"]'),s=i.querySelector('meta[name="flexible"]'),r=0,l=0,f,u=n.flexible||(n.flexible={});if(t){console.warn("将根据已有的meta标签来设置缩放比例");var b=t.getAttribute("content").match(/initial\-scale=([\d\.]+)/);b&&(l=parseFloat(b[1]),r=parseInt(1/l))}else if(s){var v=s.getAttribute("content");if(v){var g=v.match(/initial\-dpr=([\d\.]+)/),x=v.match(/maximum\-dpr=([\d\.]+)/);g&&(r=parseFloat(g[1]),l=parseFloat((1/r).toFixed(2))),x&&(r=parseFloat(x[1]),l=parseFloat((1/r).toFixed(2)))}}if(!r&&!l){e.navigator.appVersion.match(/android/gi);var T=e.navigator.appVersion.match(/iphone/gi),y=e.devicePixelRatio;T?y>=3&&(!r||r>=3)?r=3:y>=2&&(!r||r>=2)?r=2:r=1:r=1,l=1/r}if(a.setAttribute("data-dpr",r),!t)if(t=i.createElement("meta"),t.setAttribute("name","viewport"),t.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(t);else{var C=i.createElement("div");C.appendChild(t),i.write(C.innerHTML)}function p(){var o=a.getBoundingClientRect().width;o/r>540&&(o=540*r);var c=o/10;a.style.fontSize=c+"px",u.rem=e.rem=c}e.addEventListener("resize",function(){clearTimeout(f),f=setTimeout(p,300)},!1),e.addEventListener("pageshow",function(o){o.persisted&&(clearTimeout(f),f=setTimeout(p,300))},!1),i.readyState==="complete"?i.body.style.fontSize=12*r+"px":i.addEventListener("DOMContentLoaded",function(o){i.body.style.fontSize=12*r+"px"},!1),p(),u.dpr=e.dpr=r,u.refreshRem=p,u.rem2px=function(o){var c=parseFloat(o)*this.rem;return typeof o=="string"&&o.match(/rem$/)&&(c+="px"),c},u.px2rem=function(o){var c=parseFloat(o)/this.rem;return typeof o=="string"&&o.match(/px$/)&&(c+="rem"),c}})(window,window.lib||(window.lib={}));const m=w(Ee);m.use(k());m.use(O);m.use(Y).use(ee).use(Z).use(te).use(N).use(R).use(I).use(re).use(q).use(Fe).use(ie).use(ae).use(se).use(ne).use(Ce).use(L).use(oe).use(z).use(le).use(me).use(fe).use(D).use(G).use(pe).use(ve).use(he).use(be).use(ce).use(de).use(ue).use(M);m.config.globalProperties.$filters={prefix(e){return e&&e.startsWith("http")||(e=`http://140.83.37.178:8080${e}`),e}};m.mount("#app");
