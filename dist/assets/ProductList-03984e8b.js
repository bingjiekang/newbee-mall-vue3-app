import{at as B,ay as C,u as I,r as S,o as c,e as d,ax as t,ad as T,a as n,av as p,F as V,aw as R,aE as _,aA as N,aB as $}from"./_plugin-vue_export-helper-d298c33c.js";import"./index-01d1d77d.js";/* empty css              *//* empty css              */import{C as D}from"./index-59195d65.js";import{s as U}from"./good-71ec7ce8.js";import{T as q,a as A}from"./index-7f09f902.js";import{L as E,P as F}from"./index-80addbda.js";import"./use-id-7060907e.js";const M="/assets/搜索-d40b4d67.png";const h=i=>(N("data-v-6ce09f7d"),i=i(),$(),i),O={class:"product-list-wrap"},j={class:"product-list-content"},z={class:"category-header wrap"},G={class:"header-search"},H=h(()=>t("i",{class:"nbicon nbSearch"},null,-1)),J={class:"content"},K=["onClick"],Q=["src"],W={class:"product-info"},X={class:"name"},Y={class:"subtitle"},Z=h(()=>t("br",null,null,-1)),ee={class:"price"},te={key:1,class:"empty",src:M,alt:"搜索"},se={__name:"ProductList",setup(i){const u=C(),f=I(),e=S({keyword:u.query.keyword||"",searchBtn:!1,seclectActive:!1,refreshing:!1,list:[],loading:!1,finished:!1,productList:[],totalPage:0,page:1,orderBy:""}),m=async()=>{const{categoryId:o}=u.query;if(!o&&!e.keyword){e.finished=!0,e.loading=!1;return}const{data:a,data:{list:r}}=await U({pageNumber:e.page,goodsCategoryId:o,keyword:e.keyword,orderBy:e.orderBy});e.productList=e.productList.concat(r),e.totalPage=a.totalPage,e.loading=!1,e.page>=a.totalPage&&(e.finished=!0)},y=()=>{f.go(-1)},v=o=>{f.push({path:`/product/${o.goodsId}`})},k=()=>{l()},g=()=>{!e.refreshing&&e.page<e.totalPage&&(e.page=e.page+1),e.refreshing&&(e.productList=[],e.refreshing=!1),m()},l=()=>{e.refreshing=!0,e.finished=!1,e.loading=!0,e.page=1,g()},b=({name:o})=>{console.log("name",o),e.orderBy=o,l()};return(o,a)=>{const r=q,w=A,L=E,P=F;return c(),d("div",O,[t("div",j,[t("header",z,[t("i",{class:"nbicon nbfanhui",onClick:y}),t("div",G,[H,T(t("input",{type:"text",class:"search-title","onUpdate:modelValue":a[0]||(a[0]=s=>e.keyword=s)},null,512),[[D,e.keyword]])]),t("span",{class:"search-btn",onClick:k},"搜索")]),n(w,{type:"card",color:"#1baeae",onClickTab:b},{default:p(()=>[n(r,{title:"推荐",name:""}),n(r,{title:"新品",name:"new"}),n(r,{title:"价格",name:"price"})]),_:1})]),t("div",J,[n(P,{modelValue:e.refreshing,"onUpdate:modelValue":a[2]||(a[2]=s=>e.refreshing=s),onRefresh:l,class:"product-list-refresh"},{default:p(()=>[n(L,{loading:e.loading,"onUpdate:loading":a[1]||(a[1]=s=>e.loading=s),finished:e.finished,"finished-text":e.productList.length?"没有更多了":"搜索想要的商品",onLoad:g,onOffset:s=>10},{default:p(()=>[e.productList.length?(c(!0),d(V,{key:0},R(e.productList,(s,x)=>(c(),d("div",{class:"product-item",key:x,onClick:oe=>v(s)},[t("img",{src:o.$filters.prefix(s.goodsCoverImg)},null,8,Q),t("div",W,[t("p",X,_(s.goodsName),1),t("p",Y,_(s.goodsIntro),1),Z,t("span",ee,"￥ "+_(s.sellingPrice),1)])],8,K))),128)):(c(),d("img",te))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])])])}}},ue=B(se,[["__scopeId","data-v-6ce09f7d"]]);export{ue as default};
