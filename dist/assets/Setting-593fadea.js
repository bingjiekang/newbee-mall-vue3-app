import{m}from"./md5-55585f71.js";import{s as p}from"./SimpleHeader-d42a7f83.js";import{g as u,E as _,a as f}from"./user-378c8fa4.js";import{y as g,x as w}from"./index-cb802f07.js";import{at as b,r as k,ae as v,o as V,e as y,a as t,ax as S,av as r,aC as l}from"./_plugin-vue_export-helper-cae794e0.js";import{F as N}from"./index-f1cdf990.js";import{B as x}from"./index-968a7cf8.js";import"./_commonjsHelpers-725317a4.js";import"./index-6b0f6e36.js";import"./use-route-7443569a.js";import"./use-id-cc124f28.js";const B={class:"seting-box"},C={class:"input-item"},U={__name:"Setting",setup(h){const e=k({nickName:"",introduceSign:"",password:""});v(async()=>{const{data:o}=await u();e.nickName=o.nickName,e.introduceSign=o.introduceSign});const d=async()=>{const o={introduceSign:e.introduceSign,nickName:e.nickName};e.password&&(o.passwordMd5=m(e.password)),await _(o),g("保存成功"),window.location.href="/#/user"},c=async()=>{const{resultCode:o}=await f();o==200&&(w("token",""),window.location.href="/home")};return(o,a)=>{const n=N,i=x;return V(),y("div",B,[t(p,{name:"账号管理"}),S("div",C,[t(n,{modelValue:e.nickName,"onUpdate:modelValue":a[0]||(a[0]=s=>e.nickName=s),label:"昵称"},null,8,["modelValue"]),t(n,{modelValue:e.introduceSign,"onUpdate:modelValue":a[1]||(a[1]=s=>e.introduceSign=s),label:"个性签名"},null,8,["modelValue"]),t(n,{modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=s=>e.password=s),type:"password",label:"修改密码"},null,8,["modelValue"])]),t(i,{round:"",class:"save-btn",color:"#1baeae",type:"primary",onClick:d,block:""},{default:r(()=>[l("保存")]),_:1}),t(i,{round:"",class:"save-btn",color:"#1baeae",type:"primary",onClick:c,block:""},{default:r(()=>[l("退出登录")]),_:1})])}}},D=b(U,[["__scopeId","data-v-435beafb"]]);export{D as default};
