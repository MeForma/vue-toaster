(function(e){function t(t){for(var n,a,l=t[0],i=t[1],u=t[2],b=0,d=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);r&&r(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var c=s[t],n=!0,l=1;l<c.length;l++){var i=c[l];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var r=i;s.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0ab7":function(e,t,c){},"1eee":function(e,t,c){},"3b8c":function(e,t,c){"use strict";c("1eee")},"3c6f":function(e,t,c){"use strict";c("0ab7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function o(e,t,c,o,s,a){var l=Object(n["o"])("HelloWorld");return Object(n["i"])(),Object(n["d"])("div",null,[Object(n["g"])(l,{msg:"Welcome to Vue Toaster Example"})])}c("b0c0");var s=Object(n["v"])("data-v-d7c93ae2");Object(n["k"])("data-v-d7c93ae2");var a={class:"hello"},l=Object(n["g"])("p",null,"Click a button to show a Toast",-1),i={class:"c-grid"},u=Object(n["f"])("Default"),r=Object(n["f"])("Success"),b=Object(n["f"])("Info"),d=Object(n["f"])("Warning"),p=Object(n["f"])("Error"),j=Object(n["g"])("h2",null,"Do your changes",-1),O={class:"c-two-columns"},f=Object(n["g"])("label",{class:"c-label",for:"message"},"Message",-1),g=Object(n["g"])("label",{class:"c-label"},"Position",-1),m={class:"c-label"},h={class:"c-label"},v=Object(n["f"])(" Disable duration "),y={class:"c-label"},k=Object(n["f"])(" Dismissible on click "),x={class:"c-label"},_=Object(n["f"])(" Enqueue "),C=Object(n["g"])("label",{class:"c-label"}," Max Toasts",-1),S={class:"c-label"},w=Object(n["f"])(" Pause on hover "),N={class:"c-label"},T=Object(n["f"])(" Use default CSS "),D={class:"c-column-right"},M={class:"c-code"},P=Object(n["g"])("code",null,"this.$toast(",-1),H={class:"c-code--string"},q={key:0},U=Object(n["g"])("code",null,"{",-1),V={key:0,class:"c-code--object-line"},W=Object(n["g"])("code",null,"type:",-1),I={class:"c-code--string"},$={key:1,class:"c-code--object-line"},z=Object(n["g"])("code",null,"position:",-1),B={class:"c-code--string"},E={key:2,class:"c-code--object-line"},J=Object(n["g"])("code",null,"duration:",-1),A={class:"c-code--number"},F={key:3,class:"c-code--object-line"},G=Object(n["g"])("code",null,"dismissible:",-1),K={class:"c-code--number"},L={key:4,class:"c-code--object-line"},Q=Object(n["g"])("code",null,"queue:",-1),R={class:"c-code--number"},X={key:5,class:"c-code--object-line"},Y=Object(n["g"])("code",null,"max:",-1),Z={class:"c-code--number"},ee={key:6,class:"c-code--object-line"},te=Object(n["g"])("code",null,"pauseOnHover:",-1),ce={class:"c-code--number"},ne={key:7,class:"c-code--object-line"},oe=Object(n["g"])("code",null,"useDefaultCss:",-1),se={class:"c-code--number"},ae=Object(n["g"])("code",null,"}",-1),le=Object(n["g"])("code",null,")",-1),ie=Object(n["f"])("Show it");Object(n["j"])();var ue=s((function(e,t,c,o,ue,re){var be=Object(n["o"])("Spacing"),de=Object(n["o"])("Button");return Object(n["i"])(),Object(n["d"])("div",a,[Object(n["g"])(be,{bottom:"4"},{default:s((function(){return[Object(n["g"])("h1",null,Object(n["p"])(c.msg),1),l]})),_:1}),Object(n["g"])("div",i,[Object(n["g"])(de,{class:"v--default",onClick:re.toast},{default:s((function(){return[u]})),_:1},8,["onClick"]),Object(n["g"])(de,{class:"v--success",onClick:t[1]||(t[1]=function(e){return re.toast("success")})},{default:s((function(){return[r]})),_:1}),Object(n["g"])(de,{class:"v--info",onClick:t[2]||(t[2]=function(e){return re.toast("info")})},{default:s((function(){return[b]})),_:1}),Object(n["g"])(de,{class:"v--warning",onClick:t[3]||(t[3]=function(e){return re.toast("warning")})},{default:s((function(){return[d]})),_:1}),Object(n["g"])(de,{class:"v--error",onClick:t[4]||(t[4]=function(e){return re.toast("error")})},{default:s((function(){return[p]})),_:1})]),Object(n["g"])(be,{vertical:4},{default:s((function(){return[j,Object(n["g"])(be,{vertical:2},{default:s((function(){return[Object(n["g"])("div",O,[Object(n["g"])("div",null,[Object(n["g"])("fieldset",null,[f,Object(n["u"])(Object(n["g"])("input",{id:"message","onUpdate:modelValue":t[5]||(t[5]=function(e){return ue.message=e}),type:"text"},null,512),[[n["r"],ue.message]])]),Object(n["g"])("fieldset",null,[g,(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(re.positions,(function(e){return Object(n["i"])(),Object(n["d"])("label",{key:e.key,class:"c-label"},[Object(n["u"])(Object(n["g"])("input",{name:"position",type:"radio",value:e.value,"onUpdate:modelValue":function(e){return ue.options.position=e},onChange:t[6]||(t[6]=function(){return re.toast&&re.toast.apply(re,arguments)})},null,40,["value","onUpdate:modelValue"]),[[n["q"],ue.options.position]]),Object(n["f"])(Object(n["p"])(e.name),1)])})),128))]),Object(n["g"])("fieldset",null,[Object(n["g"])("label",m," Duration: "+Object(n["p"])(ue.options.duration)+Object(n["p"])(ue.options.duration?"ms":""),1),Object(n["u"])(Object(n["g"])("input",{type:"range",min:"1000",max:"10000","onUpdate:modelValue":t[7]||(t[7]=function(e){return ue.options.duration=e}),disabled:!1===ue.options.duration},null,8,["disabled"]),[[n["r"],ue.options.duration]]),Object(n["g"])("label",h,[Object(n["g"])("input",{type:"checkbox",onChange:t[8]||(t[8]=function(){return re.changeDuration&&re.changeDuration.apply(re,arguments)})},null,32),v])]),Object(n["g"])("fieldset",null,[Object(n["g"])("label",y,[Object(n["g"])("input",{type:"checkbox",checked:"",onChange:t[9]||(t[9]=function(e){return ue.options.dismissible=e.target.checked})},null,32),k])]),Object(n["g"])("fieldset",null,[Object(n["g"])("label",x,[Object(n["g"])("input",{type:"checkbox",onChange:t[10]||(t[10]=function(e){return ue.options.queue=e.target.checked})},null,32),_])]),Object(n["g"])("fieldset",null,[C,Object(n["u"])(Object(n["g"])("input",{type:"number","onUpdate:modelValue":t[11]||(t[11]=function(e){return ue.options.maxToasts=e}),placeholder:"false"},null,512),[[n["r"],ue.options.maxToasts]])]),Object(n["g"])("fieldset",null,[Object(n["g"])("label",S,[Object(n["g"])("input",{type:"checkbox",checked:"",onChange:t[12]||(t[12]=function(e){return ue.options.pauseOnHover=e.target.checked})},null,32),w])]),Object(n["g"])("fieldset",null,[Object(n["g"])("label",N,[Object(n["g"])("input",{type:"checkbox",checked:"",onChange:t[13]||(t[13]=function(e){return ue.options.useDefaultCss=e.target.checked})},null,32),T])])]),Object(n["g"])("div",D,[Object(n["g"])("div",M,[P,Object(n["g"])(be,{left:"2"},{default:s((function(){return[Object(n["g"])("code",H,'"'+Object(n["p"])(ue.message)+'"',1),re.hasOptions?(Object(n["i"])(),Object(n["d"])("code",q,",")):Object(n["e"])("",!0)]})),_:1}),re.hasOptions?(Object(n["i"])(),Object(n["d"])(be,{key:0,left:"2"},{default:s((function(){return[U,Object(n["g"])(be,{left:"4"},{default:s((function(){return[ue.options.type?(Object(n["i"])(),Object(n["d"])("span",V,[W,Object(n["g"])("code",I,Object(n["p"])(ue.options.type),1)])):Object(n["e"])("",!0),ue.options.position?(Object(n["i"])(),Object(n["d"])("span",$,[z,Object(n["g"])("code",B,'"'+Object(n["p"])(ue.options.position)+'"',1)])):Object(n["e"])("",!0),4e3!==ue.options.duration?(Object(n["i"])(),Object(n["d"])("span",E,[J,Object(n["g"])("code",A,Object(n["p"])(ue.options.duration),1)])):Object(n["e"])("",!0),!1===ue.options.dismissible?(Object(n["i"])(),Object(n["d"])("span",F,[G,Object(n["g"])("code",K,Object(n["p"])(ue.options.dismissible),1)])):Object(n["e"])("",!0),ue.options.queue?(Object(n["i"])(),Object(n["d"])("span",L,[Q,Object(n["g"])("code",R,Object(n["p"])(ue.options.queue),1)])):Object(n["e"])("",!0),!1!==ue.options.maxToasts?(Object(n["i"])(),Object(n["d"])("span",X,[Y,Object(n["g"])("code",Z,Object(n["p"])(ue.options.maxToasts),1)])):Object(n["e"])("",!0),!1===ue.options.pauseOnHover?(Object(n["i"])(),Object(n["d"])("span",ee,[te,Object(n["g"])("code",ce,Object(n["p"])(ue.options.pauseOnHover),1)])):Object(n["e"])("",!0),!1===ue.options.useDefaultCss?(Object(n["i"])(),Object(n["d"])("span",ne,[oe,Object(n["g"])("code",se,Object(n["p"])(ue.options.useDefaultCss),1)])):Object(n["e"])("",!0)]})),_:1}),ae]})),_:1})):Object(n["e"])("",!0),le]),Object(n["g"])(de,{onClick:re.toast,class:"v--default"},{default:s((function(){return[ie]})),_:1},8,["onClick"])])])]})),_:1})]})),_:1})])})),re=(c("d81d"),c("b64b"),c("ac1f"),c("5319"),c("5530")),be={class:"c-button"},de=Object(n["g"])("div",{class:"c-button__hover"},null,-1),pe={class:"c-button__content"};function je(e,t,c,o,s,a){return Object(n["i"])(),Object(n["d"])("button",be,[de,Object(n["g"])("div",pe,[Object(n["n"])(e.$slots,"default")])])}var Oe={name:"Button"};c("764b");Oe.render=je;var fe=Oe;function ge(e,t,c,o,s,a){return Object(n["i"])(),Object(n["d"])("div",{style:a.spacingStyle},[Object(n["n"])(e.$slots,"default")],4)}c("99af"),c("a9e3");var me=8,he={name:"Spacing",props:{top:{type:[String,Number],default:0},bottom:{type:[String,Number],default:0},left:{type:[String,Number],default:0},right:{type:[String,Number],default:0},vertical:{type:[String,Number],default:0},horizontal:{type:[String,Number],default:0}},computed:{spacingStyle:function(){var e=Math.max(Number(this.top),Number(this.vertical))*me,t=Math.max(Number(this.right),Number(this.horizontal))*me,c=Math.max(Number(this.bottom),Number(this.vertical))*me,n=Math.max(Number(this.left),Number(this.horizontal))*me;return"margin: ".concat(e,"px ").concat(t,"px ").concat(c,"px ").concat(n,"px;")}}};he.render=ge;var ve=he,ye=c("af56"),ke={name:"HelloWorld",data:function(){return{message:"Hi! I'm a Toast",options:{duration:4e3}}},components:{Button:fe,Spacing:ve},props:{msg:String},computed:{positions:function(){return Object.keys(ye["a"]).map((function(e){return{key:e,value:ye["a"][e],name:ye["a"][e].replace(/-/," ")}}))},hasOptions:function(){return this.options&&(Object.keys(this.options).length>1||4e3!==this.options.duration)}},methods:{toast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c={dismissible:t,onClick:this.onClick};"string"===typeof e&&(c.type=e),"string"===typeof this.options.maxToasts&&(this.options.maxToasts=parseInt(this.options.maxToasts)),this.$toast.show(this.message,Object(re["a"])(Object(re["a"])({},c),this.options))},changeDuration:function(e){this.options.duration=!e.target.checked&&4e3},onClick:function(e){console.log(e)}}};c("3b8c");ke.render=ue,ke.__scopeId="data-v-d7c93ae2";var xe=ke,_e={name:"App",components:{HelloWorld:xe}};c("3c6f");_e.render=o;var Ce=_e;Object(n["c"])(Ce).use(ye["b"]).mount("#app")},"620d":function(e,t,c){},"764b":function(e,t,c){"use strict";c("620d")}});
//# sourceMappingURL=app.c0aa222f.js.map