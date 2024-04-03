import{c as B,ag as E,b as U,t as Y,d as R,G as D,aZ as V,T as F,K as _,a_ as G,ae as I,ab as y,a as l,Q as C,aX as w,al as X,w as A,Y as j,r as K,a$ as O,aa as Q}from"./_plugin-vue_export-helper-d298c33c.js";import{f as Z,L as M,e as q}from"./index-7f6e4180.js";import{u as z}from"./index-e5eba270.js";const[J,T,W]=B("list"),p={error:Boolean,offset:E(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:U("down"),loadingText:String,finishedText:String,immediateCheck:Y};var ee=R({name:J,props:p,emits:["load","update:error","update:loading"],setup(e,{emit:f,slots:s}){const o=D(e.loading),g=D(),v=D(),m=z(),a=V(g),c=F(()=>e.scroller||a.value),u=()=>{C(()=>{if(o.value||e.finished||e.disabled||e.error||(m==null?void 0:m.value)===!1)return;const{direction:i}=e,h=+e.offset,r=w(c);if(!r.height||X(g))return;let S=!1;const H=w(v);i==="up"?S=r.top-H.top<=h:S=H.bottom-r.bottom<=h,S&&(o.value=!0,f("update:loading",!0),f("load"))})},x=()=>{if(e.finished){const i=s.finished?s.finished():e.finishedText;if(i)return l("div",{class:T("finished-text")},[i])}},$=()=>{f("update:error",!1),u()},d=()=>{if(e.error){const i=s.error?s.error():e.errorText;if(i)return l("div",{role:"button",class:T("error-text"),tabindex:0,onClick:$},[i])}},k=()=>{if(o.value&&!e.finished&&!e.disabled)return l("div",{class:T("loading")},[s.loading?s.loading():l(M,{class:T("loading-icon")},{default:()=>[e.loadingText||W("loading")]})])};return _(()=>[e.loading,e.finished,e.error],u),m&&_(m,i=>{i&&u()}),G(()=>{o.value=e.loading}),I(()=>{e.immediateCheck&&u()}),Z({check:u}),y("scroll",u,{target:c,passive:!0}),()=>{var i;const h=(i=s.default)==null?void 0:i.call(s),r=l("div",{ref:v,class:T("placeholder")},null);return l("div",{ref:g,role:"feed",class:T(),"aria-busy":o.value},[e.direction==="down"?h:r,k(),x(),d(),e.direction==="up"?h:r])}}});const ce=A(ee),[te,P,ae]=B("pull-refresh"),N=50,ne=["pulling","loosing","success"],se={disabled:Boolean,modelValue:Boolean,headHeight:E(N),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:j,successDuration:E(500),animationDuration:E(300)};var ie=R({name:te,props:se,emits:["change","refresh","update:modelValue"],setup(e,{emit:f,slots:s}){let o;const g=D(),v=D(),m=V(g),a=K({status:"normal",distance:0,duration:0}),c=q(),u=()=>{if(e.headHeight!==N)return{height:`${e.headHeight}px`}},x=()=>a.status!=="loading"&&a.status!=="success"&&!e.disabled,$=t=>{const n=+(e.pullDistance||e.headHeight);return t>n&&(t<n*2?t=n+(t-n)/2:t=n*1.5+(t-n*2)/4),Math.round(t)},d=(t,n)=>{const b=+(e.pullDistance||e.headHeight);a.distance=t,n?a.status="loading":t===0?a.status="normal":t<b?a.status="pulling":a.status="loosing",f("change",{status:a.status,distance:t})},k=()=>{const{status:t}=a;return t==="normal"?"":e[`${t}Text`]||ae(t)},i=()=>{const{status:t,distance:n}=a;if(s[t])return s[t]({distance:n});const b=[];return ne.includes(t)&&b.push(l("div",{class:P("text")},[k()])),t==="loading"&&b.push(l(M,{class:P("loading")},{default:k})),b},h=()=>{a.status="success",setTimeout(()=>{d(0)},+e.successDuration)},r=t=>{o=O(m.value)===0,o&&(a.duration=0,c.start(t))},S=t=>{x()&&r(t)},H=t=>{if(x()){o||r(t);const{deltaY:n}=c;c.move(t),o&&n.value>=0&&c.isVertical()&&(Q(t),d($(n.value)))}},L=()=>{o&&c.deltaY.value&&x()&&(a.duration=+e.animationDuration,a.status==="loosing"?(d(+e.headHeight,!0),f("update:modelValue",!0),C(()=>f("refresh"))):d(0))};return _(()=>e.modelValue,t=>{a.duration=+e.animationDuration,t?d(+e.headHeight,!0):s.success||e.successText?h():d(0,!1)}),y("touchmove",H,{target:v}),()=>{var t;const n={transitionDuration:`${a.duration}ms`,transform:a.distance?`translate3d(0,${a.distance}px, 0)`:""};return l("div",{ref:g,class:P()},[l("div",{ref:v,class:P("track"),style:n,onTouchstartPassive:S,onTouchend:L,onTouchcancel:L},[l("div",{class:P("head"),style:u()},[i()]),(t=s.default)==null?void 0:t.call(s)])])}}});const ue=A(ie);export{ce as L,ue as P};