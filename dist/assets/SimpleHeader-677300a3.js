import{at as _,G as d,u as b,o as c,e as n,ax as o,aE as p,F as k,aA as u,aB as m}from"./_plugin-vue_export-helper-d298c33c.js";const h={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup(a,s){const t=d(a.noback),e=b();return{goBack:()=>{a.back?e.push({path:a.back}):e.go(-1),s.emit("callback")},isback:t}}},i=a=>(u("data-v-eab389ba"),a=a(),m(),a),f={class:"simple-header van-hairline--bottom"},g={key:1},B={class:"simple-header-name"},y=i(()=>o("i",{class:"nbicon nbmore"},null,-1)),v=i(()=>o("div",{class:"block"},null,-1));function S(a,s,t,e,l,x){return c(),n(k,null,[o("header",f,[e.isback?(c(),n("i",g,"      ")):(c(),n("i",{key:0,class:"nbicon nbfanhui",onClick:s[0]||(s[0]=(...r)=>e.goBack&&e.goBack(...r))})),o("div",B,p(t.name),1),y]),v],64)}const E=_(h,[["render",S],["__scopeId","data-v-eab389ba"]]);export{E as s};