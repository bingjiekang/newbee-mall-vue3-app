import{ay as b,u as B,r as I,ae as L,Q as S,o as r,e as m,a,ax as t,av as d,aE as c,F as T,aw as A,au as D,f as g}from"./_plugin-vue_export-helper-cae794e0.js";import{G as N,J as H,b as M,S as P,K as v,y as E}from"./index-cb802f07.js";import{a as F}from"./good-f2aa65c3.js";import{s as R}from"./SimpleHeader-d42a7f83.js";import{A as V}from"./index-550deaf3.js";import{A as q,a as G}from"./index-3a89f443.js";import"./use-route-7443569a.js";import"./use-placeholder-36b6b197.js";import"./index-968a7cf8.js";const J={class:"product-detail"},K={class:"detail-content"},Q={class:"detail-swipe-wrap"},$=["src"],j={class:"product-info"},z={class:"product-title"},O={class:"product-desc"},U={class:"product-price"},W={class:"product-intro"},X=t("ul",null,[t("li",null,"概述"),t("li",null,"参数"),t("li",null,"安装服务"),t("li",null,"常见问题")],-1),Y=["innerHTML"],dt={__name:"ProductDetail",setup(Z){const C=b(),l=B(),n=N(),o=I({detail:{goodsCarouselList:[]}});L(async()=>{const{id:s}=C.params,{data:e}=await F(s);e.goodsCarouselList=e.goodsCarouselList.map(i=>H(i)),o.detail=e,n.updateCart()}),S(()=>{const s=document.querySelector(".detail-content");s.scrollTop=0});const h=()=>{l.push({path:"/cart"})},f=async()=>{const{resultCode:s}=await v({goodsCount:1,goodsId:o.detail.goodsId});s==200&&E("添加成功"),n.updateCart()},w=async()=>{await v({goodsCount:1,goodsId:o.detail.goodsId}),n.updateCart(),l.push({path:"/cart"})};return(s,e)=>{const i=M,y=P,u=V,_=q,x=G;return r(),m("div",J,[a(R,{name:"商品详情"}),t("div",K,[t("div",Q,[a(y,{class:"my-swipe","indicator-color":"#1baeae"},{default:d(()=>[(r(!0),m(T,null,A(o.detail.goodsCarouselList,(p,k)=>(r(),D(i,{key:k},{default:d(()=>[t("img",{src:p,alt:""},null,8,$)]),_:2},1024))),128))]),_:1})]),t("div",j,[t("div",z,c(o.detail.goodsName||""),1),t("div",O,c(o.detail.goodsIntro||"免邮费 顺丰快递"),1),t("div",U,[t("span",null,"¥"+c(o.detail.sellingPrice||""),1),t("span",null,"库存"+c(o.detail.stockNum),1)])]),t("div",W,[X,t("div",{class:"product-content",innerHTML:o.detail.goodsDetailContent||""},null,8,Y)])]),a(x,null,{default:d(()=>[a(u,{icon:"chat-o",text:"客服"}),a(u,{icon:"cart-o",badge:g(n).count?g(n).count:"",onClick:e[0]||(e[0]=p=>h()),text:"购物车"},null,8,["badge"]),a(_,{type:"warning",onClick:f,text:"加入购物车"}),a(_,{type:"danger",onClick:w,text:"立即购买"})]),_:1})])}}};export{dt as default};