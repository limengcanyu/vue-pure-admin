import{u as n}from"./app-9580cee8.js";import{d as o,an as i,x as l,r as p,ao as m,y as u,f,k as h,aq as k}from"./index-0dd8d5e4.js";const y=o({__name:"Pie",setup(d){const{isDark:t}=i(),r=l(()=>t.value?"dark":"light"),e=p(null),{setOptions:s,resize:c}=m(e,{theme:r});return s({tooltip:{trigger:"item"},legend:{icon:"circle",right:!0},series:[{name:"Github信息",type:"pie",top:"20%",radius:"80%",center:["40%","50%"],color:["#e6a23c","#f56c6c","#53a7ff"],data:[{value:400,name:"watchers"},{value:1600,name:"forks"},{value:7200,name:"star"}]}]},{name:"click",callback:a=>{}},{type:"zrender",name:"click",callback:a=>{}}),u(()=>n().getSidebarStatus,()=>{k(600).then(()=>c())}),(a,_)=>(f(),h("div",{ref_key:"pieChartRef",ref:e,style:{width:"100%",height:"35vh"}},null,512))}});export{y as _};