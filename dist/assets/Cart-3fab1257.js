import{u as $,r as G,ae as F,T as q,o as i,e as u,a as c,ax as o,av as l,au as g,f as D,b8 as f,F as L,aw as M,aE as m,aC as C}from"./_plugin-vue_export-helper-d298c33c.js";import{G as P,D as k,M as U,E as b,t as _,A as H,N as J,Q as O}from"./index-59195d65.js";import"./index-01d1d77d.js";/* empty css              *//* empty css              */import{s as Q}from"./SimpleHeader-677300a3.js";import{C as R,a as j,S as z,c as K,b as W}from"./index-d1e69be6.js";import{B as X}from"./index-d0844591.js";import"./Checker-b4815c83.js";import"./use-placeholder-7badc751.js";const Y="/assets/空购物车-5fc41b11.png";const Z={class:"cart-box"},tt={class:"cart-body"},et={class:"good-item"},st={class:"good-img"},ot=["src"],at={class:"good-desc"},nt={class:"good-title"},ct={class:"good-btn"},rt={class:"price"},lt={key:1,class:"empty"},it=o("img",{class:"empty-cart",src:Y,alt:"空购物车"},null,-1),dt=o("div",{class:"title"},"购物车空空如也",-1),It={__name:"Cart",setup(ut){const p=$(),v=P(),t=G({checked:!1,list:[],all:!1,result:[],checkAll:!0});F(()=>{h()});const h=async()=>{k({message:"加载中...",forbidClick:!0});const{data:e}=await U({pageNumber:1});t.list=e,t.result=e.map(a=>a.cartItemId),b()},y=q(()=>{let e=0;return t.list.filter(n=>t.result.includes(n.cartItemId)).forEach(n=>{e+=n.goodsCount*n.sellingPrice}),e}),I=()=>{p.push({path:"/home"})},x=async(e,a)=>{var d;if(e>5){_("超出单个商品的最大购买数量");return}if(e<1){_("商品不得小于0");return}if(((d=t.list.find(r=>r.cartItemId==a.name))==null?void 0:d.goodsCount)==e)return;k({message:"修改中...",forbidClick:!0});const n={cartItemId:a.name,goodsCount:e};await J(n),t.list.forEach(r=>{r.cartItemId==a.name&&(r.goodsCount=e)}),b()},w=async()=>{if(t.result.length==0){_("请选择商品进行结算");return}const e=JSON.stringify(t.result);p.push({path:"/create-order",query:{cartItemIds:e}})},S=async e=>{await O(e),v.updateCart(),h()},B=e=>{e.length==t.list.length?t.checkAll=!0:t.checkAll=!1,t.result=e},N=()=>{t.checkAll?t.result=[]:t.result=t.list.map(e=>e.cartItemId)};return(e,a)=>{const n=R,d=j,r=X,A=z,V=K,T=W;return i(),u("div",Z,[c(Q,{name:"购物车",noback:!0}),o("div",tt,[c(V,{onChange:B,modelValue:t.result,"onUpdate:modelValue":a[0]||(a[0]=s=>t.result=s),ref:"checkboxGroup"},{default:l(()=>[(i(!0),u(L,null,M(t.list,(s,E)=>(i(),g(A,{"right-width":50,key:E},{right:l(()=>[c(r,{square:"",icon:"delete",type:"danger",class:"delete-button",onClick:mt=>S(s.cartItemId)},null,8,["onClick"])]),default:l(()=>[o("div",et,[c(n,{name:s.cartItemId},null,8,["name"]),o("div",st,[o("img",{src:e.$filters.prefix(s.goodsCoverImg),alt:""},null,8,ot)]),o("div",at,[o("div",nt,[o("span",null,m(s.goodsName),1),o("span",null,"x"+m(s.goodsCount),1)]),o("div",ct,[o("div",rt,"¥"+m(s.sellingPrice),1),c(d,{integer:"",min:1,max:5,"model-value":s.goodsCount,name:s.cartItemId,"async-change":"",onChange:x},null,8,["model-value","name"])])])])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),t.list.length>0?(i(),g(T,{key:0,class:"submit-all van-hairline--top",price:D(y)*100,"button-text":"结算","button-type":"primary",onSubmit:w},{default:l(()=>[c(n,{onClick:N,checked:t.checkAll,"onUpdate:checked":a[1]||(a[1]=s=>t.checkAll=s)},{default:l(()=>[C("全选")]),_:1},8,["checked"])]),_:1},8,["price"])):f("",!0),t.list.length?f("",!0):(i(),u("div",lt,[it,dt,c(r,{round:"",color:"#1baeae",type:"primary",onClick:I,block:""},{default:l(()=>[C("前往选购")]),_:1})])),c(H)])}}};export{It as default};