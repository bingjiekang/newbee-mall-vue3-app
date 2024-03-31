import{p as A,i as R,P as _,w as F,j as H,k as K,l as N}from"./index-59195d65.js";import{B as b}from"./index-d0844591.js";import{A as y,a as I}from"./index-a7f823c0.js";import{c as z,W as L,Y as M,a7 as U,b as V,t as v,d as j,G,r as W,a as o,m as X,ar as Y,X as q,V as k,aO as J,w as Q}from"./_plugin-vue_export-helper-d298c33c.js";const[Z,a,u]=z("dialog"),$=L({},A,{title:String,theme:String,width:M,message:[String,Function],callback:Function,allowHtml:Boolean,className:U,transition:V("van-dialog-bounce"),messageAlign:String,closeOnPopstate:v,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:v,closeOnClickOverlay:Boolean}),p=[...R,"transition","closeOnPopstate"];var ee=j({name:Z,props:$,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:d,slots:l}){const g=G(),i=W({confirm:!1,cancel:!1}),w=t=>d("update:show",t),h=t=>{var n;w(!1),(n=e.callback)==null||n.call(e,t)},C=t=>()=>{e.show&&(d(t),e.beforeClose?(i[t]=!0,N(e.beforeClose,{args:[t],done(){h(t),i[t]=!1},canceled(){i[t]=!1}})):h(t))},f=C("cancel"),m=C("confirm"),x=F(t=>{var n,c;if(t.target!==((c=(n=g.value)==null?void 0:n.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?m:k,Escape:e.showCancelButton?f:k})[t.key](),d("keydown",t)},["enter","esc"]),P=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:a("header",{isolated:!e.message&&!l.default})},[t])},T=t=>{const{message:n,allowHtml:c,messageAlign:s}=e,r=a("message",{"has-title":t,[s]:s}),B=J(n)?n():n;return c&&typeof B=="string"?o("div",{class:r,innerHTML:B},null):o("div",{class:r},[B])},S=()=>{if(l.default)return o("div",{class:a("content")},[l.default()]);const{title:t,message:n,allowHtml:c}=e;if(n){const s=!!(t||l.title);return o("div",{key:c?1:0,class:a("content",{isolated:!s})},[T(s)])}},D=()=>o("div",{class:[K,a("footer")]},[e.showCancelButton&&o(b,{size:"large",text:e.cancelButtonText||u("cancel"),class:a("cancel"),style:{color:e.cancelButtonColor},loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:f},null),e.showConfirmButton&&o(b,{size:"large",text:e.confirmButtonText||u("confirm"),class:[a("confirm"),{[H]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:m},null)]),O=()=>o(I,{class:a("footer")},{default:()=>[e.showCancelButton&&o(y,{type:"warning",text:e.cancelButtonText||u("cancel"),class:a("cancel"),color:e.cancelButtonColor,loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:f},null),e.showConfirmButton&&o(y,{type:"danger",text:e.confirmButtonText||u("confirm"),class:a("confirm"),color:e.confirmButtonColor,loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:m},null)]}),E=()=>l.footer?l.footer():e.theme==="round-button"?O():D();return()=>{const{width:t,title:n,theme:c,message:s,className:r}=e;return o(_,X({ref:g,role:"dialog",class:[a([c]),r],style:{width:q(t)},tabindex:0,"aria-labelledby":n||s,onKeydown:x,"onUpdate:show":w},Y(e,p)),{default:()=>[P(),S(),E()]})}}});const le=Q(ee);export{le as D,ee as s};
