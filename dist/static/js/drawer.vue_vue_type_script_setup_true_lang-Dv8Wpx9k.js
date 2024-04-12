import{f as y,g as U,b as E,c as x,_ as J}from"./_plugin-vue_export-helper-D5XCxx20.js";/* empty css                   */import{u as O,P as W}from"./plus-form-BSABUXIv.js";import{d as C,a as i,p as X,d0 as j,n as S,f as F,b as q,aI as T,w as a,X as r,i as k,u as t,a8 as I,l as g,aJ as V,b6 as $,bI as A,e as G,k as H,h as K}from"./index-BxkcXAmK.js";var M=C({name:"PlusDrawerForm",__name:"index",props:{modelValue:{default:()=>({})},visible:{type:Boolean,default:!1},drawer:{default:()=>({})},size:{default:"540px"},form:{default:()=>({})}},emits:["update:modelValue","update:visible","submit","change","cancel","reset"],setup(P,{expose:f,emit:l}){const p=P,{t:b}=O(),h=i(),n=X(()=>{var e;return(e=h.value)==null?void 0:e.formInstance}),c=i(),o=i({}),m=i(!1),w=j(),_=y(w,U()),z=y(w,E()),N=y(w,x());S(()=>p.visible,e=>{m.value=e},{immediate:!0}),S(()=>p.modelValue,e=>{o.value=e},{immediate:!0});const R=(e,u)=>{l("update:modelValue",e),l("change",e,u)},B=()=>{l("submit",o.value)},D=()=>{m.value=!1,l("update:visible",m.value),l("cancel")},L=()=>{l("reset")};return f({drawerInstance:c,formInstance:n}),(e,u)=>(F(),q(t(A),I({ref_key:"drawerInstance",ref:c,modelValue:m.value,"onUpdate:modelValue":u[1]||(u[1]=d=>m.value=d),size:e.size||"540px",title:t(b)("plus.drawerForm.title"),"close-on-click-modal":!1,"close-on-press-escape":!1},e.drawer,{onClose:D}),T({default:a(()=>[k(t(W),I({ref_key:"formInstance",ref:h,modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=d=>o.value=d),"footer-align":"right"},e.form,{onSubmit:B,onChange:R,onReset:L}),T({_:2},[e.$slots["form-footer"]?{name:"footer",fn:a(()=>[r(e.$slots,"form-footer")]),key:"0"}:void 0,e.$slots["form-group-header"]?{name:"group-header",fn:a(()=>[r(e.$slots,"form-group-header")]),key:"1"}:void 0,g(t(_),(d,s)=>({name:s,fn:a(v=>[r(e.$slots,s,V($(v)))])})),g(t(z),(d,s)=>({name:s,fn:a(v=>[r(e.$slots,s,V($(v)))])})),g(t(N),(d,s)=>({name:s,fn:a(v=>[r(e.$slots,s,V($(v)))])})),e.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:a(()=>[r(e.$slots,"tooltip-icon")]),key:"2"}:void 0]),1040,["modelValue"])]),_:2},[e.$slots["drawer-header"]?{name:"header",fn:a(()=>[r(e.$slots,"drawer-header")]),key:"0"}:void 0,e.$slots["drawer-footer"]?{name:"footer",fn:a(()=>[r(e.$slots,"drawer-footer")]),key:"1"}:void 0]),1040,["modelValue","size","title"]))}}),Q=J(M,[["__file","index.vue"]]);const Y=Q,oe=C({__name:"drawer",setup(P){const f=[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]},{label:"是否显示",width:100,prop:"switch",valueType:"switch"},{label:"时间",prop:"time",valueType:"date-picker"},{label:"数量",prop:"number",valueType:"input-number",fieldProps:{precision:2,step:2}},{label:"城市",prop:"city",valueType:"cascader",options:[{value:"0",label:"陕西",children:[{value:"0-0",label:"西安",children:[{value:"0-0-0",label:"新城区"},{value:"0-0-1",label:"高新区"},{value:"0-0-2",label:"灞桥区"}]}]},{value:"1",label:"山西",children:[{value:"1-0",label:"太原",children:[{value:"1-0-0",label:"小店区"},{value:"1-0-1",label:"古交市"},{value:"1-0-2",label:"万柏林区"}]}]}]},{label:"地区",prop:"place",tooltip:"请精确到门牌号",fieldProps:{placeholder:"请精确到门牌号"}},{label:"要求",prop:"demand",valueType:"checkbox",options:[{label:"四六级",value:"0"},{label:"计算机二级证书",value:"1"},{label:"普通话证书",value:"2"}]},{label:"梦想",prop:"gift",valueType:"radio",options:[{label:"诗",value:"0"},{label:"远方",value:"1"},{label:"美食",value:"2"}]},{label:"到期时间",prop:"endTime",valueType:"date-picker",fieldProps:{type:"datetimerange",startPlaceholder:"请选择开始时间",endPlaceholder:"请选择结束时间"}},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],l=i(!1),p=i({}),b=()=>{l.value=!0};return(h,n)=>{const c=G("el-button");return F(),H("div",null,[k(c,{onClick:b},{default:a(()=>[K("打开抽屉表单")]),_:1}),k(t(Y),{visible:l.value,"onUpdate:visible":n[0]||(n[0]=o=>l.value=o),modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=o=>p.value=o),form:{columns:f}},null,8,["visible","modelValue","form"])])}}});export{oe as _};