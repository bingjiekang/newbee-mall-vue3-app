import{c as u,t as x,d,G as P,ah as C,a as p,w as f,W as S,ao as _,T as c}from"./_plugin-vue_export-helper-d298c33c.js";import{u as y}from"./use-placeholder-7badc751.js";import{f as I}from"./index-59195d65.js";import{r as N,u as $}from"./index-01d1d77d.js";import{B as k}from"./index-d0844591.js";const[m,l]=u("action-bar"),B=Symbol(m),w={placeholder:Boolean,safeAreaInsetBottom:x};var E=d({name:m,props:w,setup(a,{slots:o}){const n=P(),e=y(n,l),{linkChildren:r}=C(B);r();const s=()=>{var i;return p("div",{ref:n,class:[l(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(i=o.default)==null?void 0:i.call(o)])};return()=>a.placeholder?e(s):s()}});const W=f(E),[R,T]=u("action-bar-button"),z=S({},N,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var F=d({name:R,props:z,setup(a,{slots:o}){const n=$(),{parent:e,index:r}=_(B),s=c(()=>{if(e){const t=e.children[r.value-1];return!(t&&"isButton"in t)}}),i=c(()=>{if(e){const t=e.children[r.value+1];return!(t&&"isButton"in t)}});return I({isButton:!0}),()=>{const{type:t,icon:b,text:h,color:v,loading:g,disabled:A}=a;return p(k,{class:T([t,{last:i.value,first:s.value}]),size:"large",type:t,icon:b,color:v,loading:g,disabled:A,onClick:n},{default:()=>[o.default?o.default():h]})}}});const Y=f(F);export{Y as A,W as a,B as b};
